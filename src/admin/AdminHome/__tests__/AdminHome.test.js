import React from 'react';
import {render, screen} from '@testing-library/react';
import AdminHome from "../AdminHome";
import {AuthContext} from "../../AuthContext";
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";

test("рендерит панель администратора при наличии user", () => {
    render(
        <MemoryRouter>
            <AuthContext.Provider value={{logout: jest.fn() }}>
                <AdminHome />
            </AuthContext.Provider>
        </MemoryRouter>
    )

    expect(screen.getByText(/админ/i)).toBeInTheDocument();
    expect(screen.getByText("Пользователи")).toBeInTheDocument();
    expect(screen.getByText("Новости")).toBeInTheDocument()
    expect(screen.getByText("Наборы")).toBeInTheDocument()
    expect(screen.getByText("Города")).toBeInTheDocument()
})

test("вызов logout при клике на кнопку", async () => {
    const logoutMock = jest.fn()
    const user = userEvent.setup()

    render(
        <MemoryRouter>
            <AuthContext.Provider value={{ logout: logoutMock }}>
                <AdminHome />
            </AuthContext.Provider>
        </MemoryRouter>
    )

    const button = screen.getByText("Сьбаться нахуй")
    await user.click(button)

    expect(logoutMock).toHaveBeenCalled();
})