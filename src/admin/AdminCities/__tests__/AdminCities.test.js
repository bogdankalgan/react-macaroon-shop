jest.setTimeout(10000);
const mockSelect = jest.fn();
const mockInsert = jest.fn();

jest.mock("../../../components/dataBase", () => {
    return {
        dataBase: {
            from: () => ({
                select: mockSelect,
                insert: jest.fn((data) => {
                    mockInsert(data);
                    return { error: null };
                }),
                update: jest.fn(() => ({ error: null })),
                delete: jest.fn(() => ({ error: null })),
                eq: jest.fn(() => ({
                    update: jest.fn(() => ({ error: null })),
                    delete: jest.fn(() => ({ error: null })),
                })),
            }),
        },
    };
});

beforeEach(() => {
    mockSelect.mockReturnValue({
        order: () => ({ data: [], error: null }),
    });
});

import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import AdminCities from "../AdminCities";

describe("AdminCities", () => {
    test("добавляет город", async () => {
        render(
            <MemoryRouter>
                <AdminCities />
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText("Введи название города");
        const button = screen.getByText("Добавить город");

        await userEvent.type(input, "Чугуев");
        await userEvent.click(button);

        await waitFor(() => {
            expect(mockInsert).toHaveBeenCalledWith([{ name: "Чугуев" }]);
        });
    });
});


test("редактирует город", async () => {
    mockSelect.mockReturnValueOnce({
        order: () => ({
            data: [{ id: 1, name: "Харьков" }],
            error: null
        })
    });

    render(
        <MemoryRouter>
            <AdminCities />
        </MemoryRouter>
    );

    await waitFor(() => {
        expect(screen.getByText(/Даунские города/)).toBeInTheDocument();
    });

    const input = screen.getByPlaceholderText("Введи название города");

    const editButton = screen.getByText("Редактиравать");
    await userEvent.click(editButton);

    await userEvent.clear(input);
    await userEvent.type(input, "Новый Чугуев");

    const saveButton = screen.getByText("Добавить город");
    await userEvent.click(saveButton);

    await waitFor(() => {
        expect(screen.queryByDisplayValue("Новый Чугуев")).not.toBeInTheDocument();
    });
})

test("удаляет город", async () => {
    mockSelect.mockReturnValueOnce({
        order: () => ({
            data: [{id: 1, name: "Харьков"}]
        })
    })

    render(
        <MemoryRouter>
            <AdminCities />
        </MemoryRouter>
    )

    await waitFor(() => {
        expect(screen.getByText("Харьков")).toBeInTheDocument();
    })

    const deleteButton = screen.getByText("Удалить мразь")
    await userEvent.click(deleteButton);

    await waitFor(() => {
        expect(screen.queryByText("Харьков")).not.toBeInTheDocument();
    })
})