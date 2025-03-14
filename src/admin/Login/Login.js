import {useState} from "react";
import {useAuth} from "../AuthContext";
import {useNavigate} from "react-router-dom";
import {dataBase} from "../../components/dataBase";
import PinkButton from "../../components/Corporatives/PinkButton";
import bcryptjs from "bcryptjs";
import styles from './Login.module.css'

function Login() {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const {login} = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const {data, error} = await dataBase.from("users").select("*").eq("name", name).single();

            if (error || !data) {
                setError("Неверный логин или пароль");
                return;
            }

            const passwordMatch = await bcryptjs.compare(pass, data.pass);

            if (!passwordMatch) {
                setError("Неверный логин или пароль");
                return;
            }

            login({name: data.name, role: data.role});

            navigate("/admin", {replace: true});
            window.history.replaceState(null, "", "/admin");
        } catch (err) {
            setError("Ошибка сервера");
            console.error("Ошибка сервера:", err);
        }
    };

    return (
        <div className={styles.Login}>
            <h2 className={styles.LoginFormTitle}>Вход в админку</h2>
            {error && <p style={{color: "red"}}>{error}</p>}
            <form onSubmit={handleSubmit} className={styles.LoginForm}>
                <input type="text" placeholder="Логин" value={name} onChange={(e) => setName(e.target.value)}
                       className={styles.LoginFormInput}/>
                <input type="password" placeholder="Пароль" value={pass} onChange={(e) => setPass(e.target.value)}
                       className={styles.LoginFormInput}/>
                <PinkButton text="Войти в сучку"/>
            </form>
        </div>
    );
}

export default Login;
