import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Login from "../Login";
import {AuthContext} from "../../AuthContext";
import {MemoryRouter} from "react-router-dom";
import {act} from "react-dom/test-utils";


jest.mock("../../../components/dataBase", () => ({
    dataBase: {
        from: () => ({
            select: () => ({
                eq: () => ({
                    single: async () => ({
                        data: { name: "bogdan", pass: "hashed", role: "admin" },
                        error: null
                    })
                })
            })
        })
    }
}));

jest.mock("bcryptjs", () => ({
    compare: async () => true
}));

test("ввод логина и пароля вызывает login()", async () => {
    const loginMock = jest.fn();
    const user = userEvent.setup();

    render(
        <MemoryRouter>
            <AuthContext.Provider value={{ login: loginMock }}>
                <Login />
            </AuthContext.Provider>
        </MemoryRouter>
    );

    const loginInput = await screen.findByPlaceholderText("Логин");
    const passInput = await screen.findByPlaceholderText("Пароль");
    const button = await screen.findByRole("button", { name: /войти в сучку/i });



    await act(async () => {
        await user.type(loginInput, "bogdan");
        await user.type(passInput, "xui123");
        await user.click(button);
    })

    expect(loginMock).toHaveBeenCalledWith({ name: "bogdan", role: "admin" });
});