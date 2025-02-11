import {Link, useLocation} from "react-router-dom";
import styles from "./BreadCrumbs.module.css";

function Breadcrumbs() {
    const location = useLocation();

    const pathNamesMap = {
        "": "Главная",
        "readyNabery": "Готовые наборы",
        "cart": "Корзина",
        "about": "О нас",
        "catalog": "Каталог десертов",
        "corporatives": "Корпоративные подарки",
        "layer": " Предложения для юридических лиц",
    };

    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav className={styles.BreadCrumbs}>
            <Link to="/" className={pathnames.length === 0 ? styles.active : ""}>
                Главная
            </Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;

                return isLast ? (
                    <span key={to} className={styles.active}>
                        > {pathNamesMap[value] || value}
                    </span>
                ) : (
                    <span key={to}>
                        {" / "}
                        <Link to={to}>{pathNamesMap[value] || value}</Link>
                    </span>
                );
            })}
        </nav>
    );
}

export default Breadcrumbs;
