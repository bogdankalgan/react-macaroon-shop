import {useAuth} from "../AuthContext";
import {Link} from "react-router-dom";

function AdminHome() {
    const {logout} = useAuth();

    return (
        <div>
            <h2>Админ-панель</h2>
            <nav>
                <Link to="/admin/users">Пользователи</Link>
                <Link to="/admin/content">Контент</Link>
                <button onClick={logout}>Выйти</button>
            </nav>
        </div>
    );
}

export default AdminHome;
