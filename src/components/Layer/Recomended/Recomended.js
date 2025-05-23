import styles from './Recomended.module.css';
import RecomededItem from './RecomendedItem';

function Recomended() {
    const recData = [
        {recText: "Очень хорошие пироженки и трубочки, рекомендую", recDescr: "Отзыв блаблабла"},

        {
            recText: "Очень хорошие пироженки и трубочки, рекомендую",
            recDescr: "Банальные, но неопровержимые выводы, а также представители современных социальных резервов ассоциативно распределены по отраслям. Противоположная точка зрения подразумевает, что многие известные личности могут быть обнародованы."
        },

        {
            recText: "Заголовок отзыва",
            recDescr: "Ключевые особенности структуры проекта неоднозначны и будут указаны как претенденты на роль ключевых факторов. А также явные признаки победы институционализации будут заблокированы в рамках своих собственных рациональных ограничений. Элементы политического процесса функционально разнесены на независимые элементы. В своём стремлении улучшить пользовательский опыт мы упускаем, что представители современных социальных резервов обнародованы."
        },


        {
            recText: "Очень хорошие пироженки и трубочки, рекомендую",
            recDescr: "Являясь всего лишь частью общей картины, активно развивающиеся страны третьего мира, вне зависимости от их уровня, должны быть указаны как претенденты на роль ключевых факторов. "
        },
    ]

    return (
        <section className={styles.Recomended}>
            <h2 className="titleSecond" style={{marginBottom: "25px"}}>Нас рекомендуют</h2>

            <div className={styles.RecomendedItemContainer}>
                <RecomededItem data={recData}/>
            </div>
        </section>
    )
}

export default Recomended