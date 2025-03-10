import {createContext, useContext, useState, useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem("user")) || null;
    });

    useEffect(() => {
        // Проверяем, не был ли сервер перезапущен
        if (!sessionStorage.getItem("sessionValid")) {
            localStorage.removeItem("user"); // Сбрасываем пользователя
            setUser(null);
            sessionStorage.setItem("sessionValid", "true"); // Устанавливаем флаг активности сессии
        }

        // Если пользователь есть – сохраняем его в `localStorage`
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        }

        // Если нажали "Назад" на странице логина – блокируем "Вперёд"
        if (location.pathname === "/login") {
            window.history.pushState(null, "", location.pathname);
            window.history.forward();
        }
    }, [location.pathname, user]);

    const login = async (userData) => {
        try {
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));
            navigate("/admin", {replace: true});
        } catch (error) {
            console.error("Ошибка входа:", error);
        }
    };

    const logout = () => {
        try {
            setUser(null);
            localStorage.removeItem("user");
            sessionStorage.removeItem("sessionValid"); // Удаляем сессию при выходе
            navigate("/login", {replace: true});
        } catch (error) {
            console.error("Ошибка выхода:", error);
        }
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
