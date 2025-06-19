import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdminNabery from "../AdminNabery";
import {MemoryRouter} from "react-router-dom";
import {CartContext, CartProvider} from "../../../components/CartContext";

const mockSelect = jest.fn();
const mockInsert = jest.fn(() => Promise.resolve({ error: null }));

jest.mock("../../../components/dataBase", () => ({
    __esModule: true,
    uploadImageToSupabase: jest.fn(() => Promise.resolve("mocked/image/path.jpg")),
    dataBase: {
        from: () => ({
            select: () => ({
                order: () => Promise.resolve({
                    data: [{
                        id: 9,
                        title: "Old Title",
                        description: "Old Description",
                        price: "100",
                        imgpath: "old.png"
                    }],
                    error: null
                }),
            }),
            insert: jest.fn(() => Promise.resolve({ error: null })),
            update: () => ({
                eq: () => Promise.resolve({ error: null }),
            }),
            delete: () => ({
                eq: () => Promise.resolve({ error: null }),
            }),
        }),
    },
}));

test("добавляет набор", async () => {
    const user = userEvent.setup();

    mockSelect.mockReturnValueOnce({
        order: () => Promise.resolve({ data: [], error: null }),
    });

    render(
        <CartContext.Provider value={{addToCart: jest.fn()}}>
            <MemoryRouter>
                <AdminNabery />
            </MemoryRouter>
        </CartContext.Provider>
    );

    const titleInput = screen.getByPlaceholderText("Название");
    const descrInput = screen.getByPlaceholderText("Описание");
    const priceInput = screen.getByPlaceholderText("Цена");
    const fileInput = screen.getByTestId("file-input");
    const button = screen.getByText("Добавить");

    await user.type(titleInput, "Test title");
    await user.type(descrInput, "Test description");
    await user.type(priceInput, "500");

    const file = new File(["test"], "image.png", { type: "image/png" });
    await user.upload(fileInput, file);

    await user.click(button);

    await waitFor(() => expect(screen.getByText("Добавить")).toBeInTheDocument());


    await waitFor(() => {
        expect(screen.getByPlaceholderText("Название")).toHaveValue("Test title");
        expect(screen.getByPlaceholderText("Описание")).toHaveValue("Test description");
        expect(screen.getByPlaceholderText("Цена")).toHaveValue("500");
    });
});


test("редактирует набор", async () => {
    const user = userEvent.setup();

    mockSelect.mockReturnValueOnce({
        order: jest.fn(() => Promise.resolve({
            data: [{
                id: 9,
                title: "Old Title",
                description: "Old Description",
                price: "100",
                imgpath: "old.png"
            }],
            error: null,
        })),
    });

    render(
        <CartContext.Provider value={{addToCart: jest.fn()}}>
            <MemoryRouter>
                <AdminNabery />
            </MemoryRouter>
        </CartContext.Provider>
    );

    const editButton = await screen.findByTestId("edit-button-9");
    await user.click(editButton);

    const titleInput = screen.getAllByPlaceholderText("Название")[0];
    const descrInput = screen.getAllByPlaceholderText("Описание")[0];
    const priceInput = screen.getAllByPlaceholderText("Цена")[0];

    expect(titleInput).toHaveValue("Old Title");
    expect(descrInput).toHaveValue("Old Description");
    expect(priceInput).toHaveValue("100");

    await user.clear(titleInput);
    await user.type(titleInput, "New Title");
    await user.clear(descrInput);
    await user.type(descrInput, "New Description");
    await user.clear(priceInput);
    await user.type(priceInput, "500");

    const saveButton = screen.getByText("Сохранить")
    await user.click(saveButton);

    await waitFor(() => {
        expect(screen.getByText(/добавить/i)).toBeInTheDocument();
    });
})

test("удаляет набор", async () => {
    const user = userEvent.setup();

    render(
        <CartContext.Provider value={{addToCard: jest.fn()}}>
            <MemoryRouter>
                <AdminNabery />
            </MemoryRouter>
        </CartContext.Provider>
    )

    const deleteButton = await screen.findByTestId("delete-button-9")
    await user.click(deleteButton);

    await waitFor(() => {
        expect(screen.queryByTestId("delete-button")).not.toBeInTheDocument();
    })
})
