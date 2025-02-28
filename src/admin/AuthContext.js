import {createContext, useContext, useState} from "react";

const AuthContext = createContext(null);

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData); // ✅ Сохранение пользователя в контексте
        localStorage.setItem("user", JSON.stringify(userData)); // ✅ Можно сохранить в localStorage
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
