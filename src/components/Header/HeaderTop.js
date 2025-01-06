import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faMobileScreen, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faVk, faSquareOdnoklassniki, faTelegram} from "@fortawesome/free-brands-svg-icons";
import styles from "./HeaderTop.module.css"

function HeaderTop() {
    const hrefs = {
        fresh: "fresh",
        delivery: "delivery",
        opt: "opt",
        contacts: "contacts",
        phone: "8 812 309-82-88"
    }

    return (
        <div className={styles.headerTop}>
            <ul className={styles.headerTopList}>
                <li>
                <a href={hrefs.fresh}>Гарантия свежести</a>
                </li>

                <li>
                <a href={hrefs.delivery}>Доставка и оплата</a>
                </li>

                <li>
                <a href={hrefs.opt}>Оптовые поставки</a>
                </li>

                <li>
                <a href={hrefs.contacts}>Контакты</a>
                </li>
            </ul>


            <div className={styles.headerTopRight}>
                <div>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <select></select>
                </div>

                <div className={styles.headerTopPhone}>
                    <FontAwesomeIcon icon={faMobileScreen} />
                    <a href={hrefs.phone}>
                        8 812 309-82-88
                    </a>
                </div>

                <button className={styles.headerTopTrash}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <p>В корзине ( товара)</p>
                </button>

                <div>
                    <button>
                        <FontAwesomeIcon icon={faTelegram}/>
                    </button>

                    <button>
                        <FontAwesomeIcon icon={faVk}/>
                    </button>

                    <button>
                        <FontAwesomeIcon icon={faSquareOdnoklassniki}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;