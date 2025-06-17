import React from 'react';
import {render, screen} from '@testing-library/react';
import {AuthContext, AuthProvider, useAuth} from "../AuthContext";
import {MemoryRouter} from "react-router-dom";


const TestComponent = () => {
    const {user, login, logout} = useAuth();

    return (
        <div>
            <div data-testid="user">{user ? user.name : "no-user"}</div>
            <button onClick={() => login({name: "admin"})}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

describe('AuthContext', () => {
    beforeEach(() => {
        localStorage.clear();
        sessionStorage.clear();
    })

    test("login сохраняет пользователя", () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <TestComponent></TestComponent>
                </AuthProvider>
            </MemoryRouter>
        )

        screen.getByText("Login").click();
        screen.getByText("Logout").click();

        expect(screen.getByTestId("user").textContent).toBe("no-user");
        expect(localStorage.getItem("user")).toBe(null);
    })
})

test("useAuth возвращает user, login, logout", () => {
    let context;

    const Reader = () => {
        context = useAuth();
        return null;
    }

    render(
        <MemoryRouter>
            <AuthProvider>
                <Reader/>
            </AuthProvider>
        </MemoryRouter>
    )

    expect(context).toHaveProperty("user")
    expect(context).toHaveProperty("login")
    expect(context).toHaveProperty("logout");
})