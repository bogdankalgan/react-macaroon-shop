import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faMobileScreen, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faVk, faSquareOdnoklassniki, faTelegram} from "@fortawesome/free-brands-svg-icons";
import styles from "./HeaderTop.module.css";
import {useEffect, useState, useContext} from "react";
import {dataBase} from "../../dataBase";
import {CartContext} from "../../CartContext";
import {Link} from "react-router-dom";

const getCartText = (count) => {
    if (count % 10 === 1 && count % 100 !== 11) {
        return `${count} товар`;
    } else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
        return `${count} товара`;
    } else {
        return `${count} товаров`;
    }
};

function HeaderTop() {
    const {cartCount} = useContext(CartContext);
    const hrefs = {
        fresh: "fresh",
        delivery: "delivery",
        opt: "opt",
        contacts: "contacts",
        phone: "8 812 309-82-88",
    };

    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchCities = async () => {
            const {data, error} = await dataBase.from("cities").select("*");
            if (error) {
                console.log("Ошибка загрузки данных", error);
            } else {
                setCities(data);
            }
        };

        fetchCities();
    }, []);

    return (
        <div className={styles.headerTop}>
            <ul className={styles.headerTopList}>
                <li><Link to={hrefs.fresh}>Гарантия свежести</Link></li>
                <li><Link to={hrefs.delivery}>Доставка и оплата</Link></li>
                <li><Link to={hrefs.opt}>Оптовые поставки</Link></li>
                <li><Link to={hrefs.contacts}>Контакты</Link></li>
            </ul>

            <div className={styles.headerTopRight}>
                <div className={styles.headerTopSelect}>
                    <FontAwesomeIcon icon={faLocationDot}/>
                    <select>
                        {cities.map((city) => (
                            <option key={city.id} value={city.id}>{city.name}</option>
                        ))}
                    </select>
                </div>

                <div className={styles.headerTopPhone}>
                    <FontAwesomeIcon icon={faMobileScreen}/>
                    <a href={hrefs.phone}>8 812 309-82-88</a>
                </div>

                <Link to="/cart" className={styles.headerTopTrash}>
                    <FontAwesomeIcon icon={faCartShopping}/>
                    <p>В корзине {getCartText(cartCount)}</p>
                </Link>

                <div className={styles.headerTopSocial}>
                    <button><FontAwesomeIcon icon={faTelegram}/></button>
                    <button><FontAwesomeIcon icon={faVk}/></button>
                    <button><FontAwesomeIcon icon={faSquareOdnoklassniki}/></button>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;
