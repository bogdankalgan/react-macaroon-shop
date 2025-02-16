import styles from './Questions.module.css'
/*import QuestionsItem from "./QuestionsItem";*/
import AnswersItem from "../../Corporatives/Answers/AnswersItem";

function Questions() {
    const items = [
        {title: "Сколько хранятся пирожные макарон?", descr: "Срок хранения бла бла бла"},

        {
            title: "Как быстро мы выполняем заказы",
            descr: "Стандартный срок выполнения заказа 3-5 дней, При большом тираже и в предновогодний сезон может увеличиться. Потому что..."
        },

        {
            title: "А за 2 дня?", descr: "Текст про дополнительную стоимость при срочных заказах"
        }
    ]

    return (
        <section className={styles.Questions}>
            <h2 className='titleSecond' style={{marginBottom: "33px"}}>Ответы на вопросы</h2>
            <div className={styles.QuestionsItems}>
                {items.map((item, index) => {
                    return (
                        <AnswersItem title={item.title} descr={item.descr} key={index}/>)
                })}
            </div>
        </section>
    )
}

export default Questions