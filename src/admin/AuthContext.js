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
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        }

        if (!user && location.pathname.startsWith("/admin")) {
            navigate("/login", {replace: true});
        }
    }, [location.pathname, user, navigate]);

    const login = async (userData) => {
        try {
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));

            // 🔥 Очистка истории браузера после входа, чтобы нельзя было вернуться в `/login`
            navigate("/admin", {replace: true});
            window.history.replaceState(null, "", "/admin");
        } catch (error) {
            console.error("Ошибка входа:", error);
        }
    };

    const logout = () => {
        try {
            setUser(null);
            localStorage.removeItem("user");

            // 🔥 Полностью очищаем историю, чтобы нельзя было вернуться в `/admin`
            navigate("/login", {replace: true});
            window.history.replaceState(null, "", "/login");


        } catch(error) {
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

export {AuthContext};