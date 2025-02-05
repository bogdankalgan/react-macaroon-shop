import styles from './FooterRightItem.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function FooterRightItem(props) {
    const {icon, href, padding} = props;

    return (
        <div className={styles.FooterRightItem} style={{padding: padding}}>
            <a href={href} className={styles.FooterRightItemLink}>
                <FontAwesomeIcon icon={icon}/>
            </a>
        </div>
    )
}

export default FooterRightItem