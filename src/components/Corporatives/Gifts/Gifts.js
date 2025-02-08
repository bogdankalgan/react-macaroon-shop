import styles from "./Gifts.module.css"
import GiftsItemContainer from "./GiftsItemsContainer"
import PinkButton from "../PinkButton"

function Gifts() {
    return (
        <section className={styles.Gifts}>
            <h2 className="titleSecond" style={{marginBottom: "40px"}}>Некоторые варианты подарков</h2>

            <GiftsItemContainer/>

            <div style={{textAlign: "center"}}>
                <PinkButton text="Получить КП"/>
            </div>
        </section>
    )
}

export default Gifts;