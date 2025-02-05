import styles from "./FooterLink.module.css"

function FooterLink(props) {
    const {text, link} = props;

    return (
        <a href={link}
           className={text === 'Информация' || text === 'Каталог' || text === 'ДЛЯ БИЗНЕСА' ? styles.FooterLink__head : styles.FooterLink}>{text}</a>
    )
}

export default FooterLink;