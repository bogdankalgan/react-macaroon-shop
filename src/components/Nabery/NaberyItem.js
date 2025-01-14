import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import styles from "./NaberyItem.module.css";

function NaberyItem(props) {
    const {title, descr, iconPath, href, stylesItem} = props;
    return (
        <div className={styles.NaberyItem} style={stylesItem}>
            <a key={href} href={href}>
                <div className={styles.NaberyItemIconContainer}>
                    <img src={iconPath} alt={title} className={styles.NaberyItemIcon}></img>
                </div>

                <p className={styles.NaberyItemTitle}>{title} <FontAwesomeIcon icon={faArrowRight}/></p>

                <p className={styles.NaberyItemDescr}>{descr}</p>
            </a>
        </div>
    )
}

export default NaberyItem;