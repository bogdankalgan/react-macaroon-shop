import {Link, useLocation} from "react-router-dom";
import styles from "./BreadCrumbs.module.css";

function Breadcrumbs({title}) {
    const location = useLocation();

    const pathNamesMap = {
        "": "Главная",
        "readyNabery": "Готовые наборы",
        "cart": "Корзина",
        "about": "О нас",
        "catalog": "Каталог десертов",
        "corporatives": "Корпоративные подарки",
        "layer": "Предложения для юридических лиц",
        "marriege": "Предложение для свадеб",
        "guarantee": "Гарантии вкуса и качества",
        "delivery": "Доставка и оплата",
        "contacts": "Контакты",
        "news": "Новости"
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
                        > {title || pathNamesMap[value] || value}
                    </span>
                ) : (
                    <span key={to}>
                        {" > "}
                        <Link to={to}>{pathNamesMap[value] || value}</Link>
                    </span>
                );
            })}
        </nav>
    );
}

export default Breadcrumbs;
