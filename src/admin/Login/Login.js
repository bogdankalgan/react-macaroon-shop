import {useState} from "react";
import {useAuth} from "../AuthContext";
import {dataBase} from "../../components/dataBase";
import {useNavigate} from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const {login} = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const {data, error} = await dataBase
                .from("users")
                .select("name, pass, role")
                .eq("name", name)
                .single();

            if (error || !data) {
                setError("Неверный логин или пароль");
                return;
            }

            if (pass !== data.pass) {
                setError("Неправильный логин или пароль")
                return
            }

            login({name: data.name, role: data.role});

            navigate("/admin");

        } catch (err) {
            setError("Ошибка сервера. Попробуйте позже.");
            console.error("Ошибка сервера:", err);
        }
    };

    return (
        <div className={styles.Login}>
            <h1 className="titleFirst" style={{marginBottom: '20px'}}>Вход в админку</h1>
            {error && <p style={{color: "red"}}>{error}</p>}
            <form onSubmit={handleSubmit} className={styles.LoginForm}>
                <input
                    type="text"
                    placeholder="Логин"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
}

export default Login;
