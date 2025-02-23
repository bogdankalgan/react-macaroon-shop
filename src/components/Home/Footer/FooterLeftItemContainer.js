import FooterLeftItem from './FooterLeftItem';
import styles from './FooterLeftItemContainer.module.css';

function FooterLeftItemContainer() {
    const items = [
        {text: 'Готовим вручную и с любовью', icon: '/icons/footer/1.svg'},
        {text: 'Доставим в день заказа', icon: '/icons/footer/2.svg'},
        {text: '100% миндальная мука и натуральные ингредиенты', icon: '/icons/footer/3.svg'},
    ]

    return (
        <div className={styles.footerLeftItemContainer}>
            {items.map((item, i) => (
                <FooterLeftItem text={item.text} icon={item.icon} key={i}/>
            ))}
        </div>
    )
}

export default FooterLeftItemContainer;