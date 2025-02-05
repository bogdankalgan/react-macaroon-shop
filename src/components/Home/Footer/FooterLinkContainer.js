import styles from "./FooterLinkContainer.module.css"
import FooterLink from "./FooterLink";

function FooterLinkContainer() {
    const info = [
        {text: 'Информация', link: '#info'},
        {text: 'О компании', link: '#info'},
        {text: 'Гарантии вкуса и свежести', link: '#info'},
        {text: 'Доставка и оплата', link: '#info'},
        {text: 'Контакты', link: '#info'},
    ]

    const catalog = [
        {text: 'Каталог', link: '#catalog'},
        {text: 'Каталог десертов', link: '#catalog'},
        {text: 'Готовые наборы', link: '#catalog'},
        {text: 'Собрать свой набор', link: '#catalog'},
        {text: 'Акции', link: '#catalog'},
    ]

    const buis = [
        {text: 'ДЛЯ БИЗНЕСА', link: '#buis'},
        {text: 'Корпоративные подарки', link: '#buis'},
        {text: 'Для юридических лиц', link: '#buis'},
        {text: 'Оповикам', link: '#buis'},
    ]

    return (
        <div className={styles.FooterLinkContainerHead}>
            <div className={styles.FooterLinkContainerInfo}>
                {info.map((item, index) => (
                    <FooterLink key={index} link={item.link} text={item.text}/>
                ))}
            </div>

            <div className={styles.FooterLinkContainerCatalog}>
                {catalog.map((item, index) => (
                    <FooterLink key={index} link={item.link} text={item.text}/>
                ))}
            </div>

            <div className={styles.FooterLinkContainerBuis}>
                {buis.map((item, index) => (
                    <FooterLink key={index} link={item.link} text={item.text}/>
                ))}
            </div>
        </div>
    )
}

export default FooterLinkContainer;