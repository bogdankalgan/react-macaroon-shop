import FooterRightItem from './FooterRightItem'
import {faInstagram, faFacebook, faVk} from "@fortawesome/free-brands-svg-icons";
import styles from "./FooterRightItemContainer.module.css";

function FooterRightItemContainer() {
    const items = [
        {icon: faInstagram, href: 'https://www.instagram.com', padding: '10px'},
        {icon: faFacebook, href: 'https://www.facebook.com', padding: '11px 16px'},
        {icon: faVk, href: 'https://www.vk.com', padding: '14px 9px'},
    ]

    return (
        <div className={styles.FooterRightItemContainer}>
            {items.map(item => (
                <FooterRightItem icon={item.icon} href={item.href} key={item.href}/>
            ))}
        </div>
    )
}

export default FooterRightItemContainer;