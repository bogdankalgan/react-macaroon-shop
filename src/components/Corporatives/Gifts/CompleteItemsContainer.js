import CompleteItem from "./CompleteItem";
import styles from "./CompleteItemsContainer.module.css";
import ActionButton from "../../Home/Action/ActionButton"
import ActionButtonContaner from "../../Home/Action/ActionButtonContainer"

function CompleteItemsContainer() {
    const items = [
        {text: "Макароны для отеля “Бла бла”"},
        {text: "Набор для кафе “Мята”"},
        {text: "Макароны для отеля “Бла бла”"},
        {text: "Набор для кафе “Мята”"},

        {text: "Макароны для отеля “Бла бла”"},
        {text: "Набор для кафе “Мята”"},
        {text: "Макароны для отеля “Бла бла”"},
        {text: "Набор для кафе “Мята”"},

        {text: "Макароны для отеля “Бла бла”"},
        {text: "Набор для кафе “Мята”"},
        {text: "Макароны для отеля “Бла бла”"},
        {text: "Набор для кафе “Мята”"},
    ]

    return (
        <div className={styles.completeItemContainer}>
            {items.map((item, index) => (
                <CompleteItem key={index} text={item.text}/>
            ))}


            <ActionButtonContaner/>
        </div>
    )
}

export default CompleteItemsContainer;