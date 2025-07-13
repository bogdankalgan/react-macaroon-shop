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
        "layer": "Предложения для юридических лиц",
        "marriege": "Предложение для свадеб",
        "guarantee": "Гарантии вкуса и качества",
        "delivery": "Доставка и оплата",
        "contacts": "Контакты",
        "news": "Новости",
        "create-your-set": "Собрать набор",
        "choose-count": "Выбрать количество",
        "choose-taste": "Выбрать вкусы",
        "choose-extras": "Дополнительно",
        "create-design": "Создать дизайн",
        "choose-quantity": "Выбрать количество",
        "choose-img": "Выбрать картинку",
        "choose-more": "Дополнительно",
        "summary": "Итого",
        "your-choice": "Ваш выбор"
    };

    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav className={styles.BreadCrumbs}>
            <Link to="/">Главная</Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;

                return (
                    <span key={to}>
                        {" > "}
                        {isLast ? (
                            <span className={styles.active}>{pathNamesMap[value] || value}</span>
                        ) : (
                            <Link to={to}>{pathNamesMap[value] || value}</Link>
                        )}
                    </span>
                );
            })}
        </nav>
    );
}

export default Breadcrumbs;