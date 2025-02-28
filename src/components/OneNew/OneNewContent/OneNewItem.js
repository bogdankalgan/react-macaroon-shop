import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import styles from './OneNewItem.module.css'

function OneNewItem(props) {
    const {text} = props;

    return (
        <div className={styles.oneNewItem}>
            <div className={styles.oneNewItemIcon}>
                <FontAwesomeIcon icon={faCheck}/>
            </div>

            <p className={styles.oneNewItemText}>{text}</p>
        </div>
    )
}

export default OneNewItem