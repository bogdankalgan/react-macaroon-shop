import {useAuth} from "../AuthContext";
import {Link} from "react-router-dom";
import PinkButton from "../../components/Corporatives/PinkButton";
import styles from "./AdminHome.module.css";

function AdminHome() {
    const {logout} = useAuth();

    return (
        <div className={styles.AdminHome}>
            <h2 className={styles.AdminHomeTitle}>Админ-панель</h2>
            <p className={styles.AdminHomeDescr}>Ну и куда ты хочешь попиздовать?</p>
            <nav className={styles.AdminHomeNav}>
                <Link to="/admin/users" className={styles.AdminHomeLink}>Пользователи</Link>
                <Link to="/admin/news" className={styles.AdminHomeLink}>Новости</Link>
                <Link to="/admin/nabery" className={styles.AdminHomeLink}>Наборы</Link>
                <Link to="/admin/cities" className={styles.AdminHomeLink}>Города</Link>
            </nav>
            <div onClick={logout}>
                <PinkButton text='Сьбаться нахуй'/>
            </div>
        </div>
    );
}

export default AdminHome;
