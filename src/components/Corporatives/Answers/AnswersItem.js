import styles from './AnswersItem.module.css'

function AnswersItem(props) {
    const {title, descr} = props;

    return (
        <div className={styles.AnswersItem}>
            <p className={styles.AnswerItemTitle}>{title}</p>

            <div className={styles.AnswerItemDivider}></div>

            <p className={styles.AnswerItemDescr}>{descr}</p>
        </div>
    )
}

export default AnswersItem