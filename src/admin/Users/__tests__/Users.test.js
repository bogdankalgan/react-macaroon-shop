import React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Users from "../Users";
import { MemoryRouter } from "react-router-dom";
import {AuthContext} from "../../AuthContext";


const mockUpdate = jest.fn();
const mockDelete = jest.fn();

jest.mock("../../../components/dataBase", () => {
    return {
        dataBase: {
            from: () => ({
                select: jest.fn(() => ({
                    data: [
                        { id: 1, name: "bob", role: "user" },
                        { id: 2, name: "alice", role: "user" }
                    ],
                    error: null
                })),
                update: (data) => ({
                    eq: jest.fn().mockImplementation(() => {
                        mockUpdate(data);
                        return Promise.resolve({ error: null });
                    })
                }),
                delete: () => ({
                    eq: jest.fn().mockImplementation((key, value) => {
                        mockDelete(key, value);
                        return { error: null };
                    })
                }),
                insert: jest.fn(() => ({ error: null }))
            })
        }
    };
});

test("рендерит заголовок и пользователей", async () => {
    render(
        <MemoryRouter>
            <Users />
        </MemoryRouter>
    );

    expect(await screen.findByText(/список долбоебов/i)).toBeInTheDocument();
    expect(await screen.findByText("bob")).toBeInTheDocument();
    expect(await screen.findByText("alice")).toBeInTheDocument();
});

test("редактирует пользователя", async () => {
    render(
        <MemoryRouter>
            <AuthContext.Provider value={{}}>
                <Users/>
            </AuthContext.Provider>
        </MemoryRouter>
    )

    const user = userEvent.setup()
    const editButtons = await screen.findAllByText(/Исправить/i)
    await user.click(editButtons[0]);

    const nameInput = screen.getByDisplayValue("bob")
    const passInput = screen.getByPlaceholderText(/новый блядский пароль/i)
    const saveButton = screen.getByText(/Сахранить/i)

    await user.clear(nameInput);
    await user.type(nameInput, "editeduser")
    await user.type(passInput, "newpass123")

    await user.click(saveButton)

    await waitFor(() => expect(mockUpdate).toHaveBeenCalledWith(
        expect.objectContaining({
            name: "editeduser",
            pass: expect.any(String),
        })
    ))
})
test("удаляет пользователя", async () => {
    render(
        <MemoryRouter>
            <Users />
        </MemoryRouter>
    );

    const user = userEvent.setup();
    const deleteButtons = await screen.findAllByText(/удалить/i);
    await user.click(deleteButtons[0]);

    await waitFor(() => {
        expect(mockDelete).toHaveBeenCalledWith("id", 1);
    });
});