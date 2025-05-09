import styles from "./HeaderBottom.module.css"
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faVk, faTelegram, faOdnoklassniki} from "@fortawesome/free-brands-svg-icons";
import {useEffect, useState} from "react";
import {dataBase} from "../../dataBase";

function HeaderBottom() {
    const hrefs = {
        sales: "#sales",
        gifts: "#gifts",
        choice: "#choice",
        createDesign: "#createDesign",
    }

    const [menuVisible, setMenuVisible] = useState(false);
    const [cities, setCities] = useState([])

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
        <div>
            <div className={styles.headerBottom}>
                <ul className={styles.headerBottomList}>
                    <li>
                        <a href={hrefs.sales}>
                            СЛАДКИЕ ДНИ
                        </a>
                    </li>

                    <select>
                        <option>
                            подарочные наборы
                        </option>
                    </select>

                    <li>
                        <Link to={'/create-your-set/choose-count'}>
                            Собрать набор
                        </Link>
                    </li>

                    <Link to='/'><img src="/icons/siteIcon/logoHeader.svg" alt="header site logo"></img></Link>


                    <li>
                        <Link to="/create-design/choose-quantity">Создать дизайн</Link>
                    </li>

                    <select>
                        <option>
                            КОМПАНИЯМ
                        </option>
                    </select>

                    <select>
                        <option>
                            ВЕСЬ КАТАЛОГ
                        </option>
                    </select>
                </ul>
            </div>

            <div className={styles.headerMobile}>
                <button className={styles.headerMobileButton} onClick={() => setMenuVisible(!menuVisible)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>

                <img src="/icons/mobile-logo-header.svg" alt="header site logo"/>

                <Link to="/cart" className={styles.headerMobileCart}>
                    <FontAwesomeIcon icon={faCartShopping}/>
                </Link>
            </div>

            {menuVisible && (
                <div className={styles.headerMobileMenu}>
                    <div className={styles.headerMobileItem}>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <select>
                            {cities.map((city) => (
                                <option key={city.id} value={city.id}>{city.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.headerMobileItem}>
                        <Link>Сладкие дни</Link>
                    </div>

                    <div className={styles.headerMobileItem}>
                        <select>
                            <option>подарочные наборы</option>
                        </select>
                    </div>

                    <div className={styles.headerMobileItem}>
                        <Link to="/create-your-set/choose-count">Собрать набор</Link>
                    </div>

                    <div className={styles.headerMobileItem}>
                        <Link to={"/create-design/choose-quantity"}>СОЗДАТЬ ДИЗАЙН </Link>
                    </div>

                    <div className={styles.headerMobileItem}>
                        <select>
                            <option>КОМПАНИЯМ</option>
                        </select>
                    </div>

                    <div className={styles.headerMobileItem}>
                        <select>
                            <option>Весь каталог</option>
                        </select>
                    </div>

                    <div className={styles.headerMobileLinks}>
                        <Link>Гарантия свежести</Link>
                        <Link>Доставка и оплата</Link>
                        <Link>Оптовые поставки</Link>
                        <Link>Контакты</Link>
                    </div>

                    <div className={styles.headerMobilePhone}>
                        <FontAwesomeIcon icon={faPhone}/>
                        <a href="8 812 309-82-88">8 812 309-82-88</a>
                    </div>

                    <div className={styles.headerMobileSocials}>
                        <FontAwesomeIcon icon={faTelegram}/>
                        <FontAwesomeIcon icon={faVk}/>
                        <FontAwesomeIcon icon={faOdnoklassniki}/>
                    </div>
                </div>
            )}
        </div>

    );
}

export default HeaderBottom;
