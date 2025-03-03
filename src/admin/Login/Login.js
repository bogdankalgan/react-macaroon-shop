import {useState} from "react";
import {useAuth} from "../AuthContext";
import {dataBase} from "../../components/dataBase";
import {useNavigate} from "react-router-dom";
import styles from "./Login.module.css";
import PinkButton from "../../components/Corporatives/PinkButton";

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
                setError("Введи правильно пароль или логин, дебил сука");
                return;
            }

            if (pass !== data.pass) {
                setError("Введи правильно пароль или логин, дебил сука")
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
            <h1 className={styles.LoginFormTitle}>Вход в админку</h1>
            {error && <p style={{color: "red"}}>{error}</p>}
            <form onSubmit={handleSubmit} className={styles.LoginForm}>
                <input
                    type="text"
                    placeholder="Логин"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.LoginFormInput}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    className={styles.LoginFormInput}
                />
                <PinkButton text='Войти'/>
            </form>
        </div>
    );
}

export default Login;
