import styles from './FooterLeftItem.module.css';

function FooterLeftItem(props) {
    const {text, icon} = props;

    return (
        <div className={styles.FooterLeftItem}>
            <img src={icon} alt={text}/>

            <p className={styles.FooterLeftItemText}>{text}</p>
        </div>
    )
}

export default FooterLeftItem;