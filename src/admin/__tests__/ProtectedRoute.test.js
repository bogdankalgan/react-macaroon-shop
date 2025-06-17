import React from "react";
import { render, screen } from "@testing-library/react";
import ProtectedRoute from "../ProtectedRoute";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../AuthContext";


test("рендерит children при наличии user", () => {
    render(
        <MemoryRouter>
            <AuthContext.Provider value={{ user: { name: "admin" } }}>
                <ProtectedRoute>
                    <div>Admin panel</div>
                </ProtectedRoute>
            </AuthContext.Provider>
        </MemoryRouter>
    );

    expect(screen.getByText("Admin panel")).toBeInTheDocument();
});

test("редирект на /login если user отсутсвует", () => {
    render(
        <MemoryRouter initialEntries={["/admin"]}>
            <AuthContext.Provider value={{ user: null }}>
                <ProtectedRoute>
                    <div>Admin panel</div>
                </ProtectedRoute>
            </AuthContext.Provider>
        </MemoryRouter>
    );

    expect(screen.queryByText("Admin panel")).not.toBeInTheDocument();
});