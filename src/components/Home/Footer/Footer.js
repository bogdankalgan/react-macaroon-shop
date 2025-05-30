import styles from "./Footer.module.css"
import FooterLinkContainer from "./FooterLinkContainer";
import FooterLeftItemContainer from "./FooterLeftItemContainer";
import FooterRightItemContainer from "./FooterRightItemContainer";

function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterLeft}>
                <FooterLeftItemContainer/>

                <p className={styles.FooterLeftText}>© 2021 Макароншоп <br/> ООО "Квантум", Санкт-Петербург, улица
                    Маршала Тухачевского, <br/> дом 22
                </p>
            </div>

            <div className={styles.FooterMid}>
                <FooterLinkContainer/>
            </div>

            <div className={styles.FooterRight}>
                <div className={styles.FooterRightContacts}>
                    <a href='tel:+7 (812) 309 82 88' className={styles.FooterRightLink}>+7 (812) 309 82 88</a>
                    <p className={styles.FooterRightHours}>с 9:00 до 21:00</p>
                </div>
                <FooterRightItemContainer/>
            </div>
        </footer>
    )
}

export default Footer;