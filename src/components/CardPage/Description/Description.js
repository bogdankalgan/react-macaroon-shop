import styles from './Description.module.css'
import React, {useState} from "react";

function Description() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {title: "Описание", content: "Текстовая информация и таблички. Для примера рыба-текст."},
        {title: "Состав и пищевая ценность", content: "Сложно сказать, почему активно развивающиеся страны..."},
        {title: "Условия и срок хранения ", content: "Представители социальных резервов смешаны с данными..."},
    ]

    return (
        <div className={styles.DescriptionContainer}>
        <div className={styles.Description}>
            <div className={styles.DescriptionButtons}>
                {tabs.map((tab, index) => (
                    <button key={index} className={activeTab === index ? styles.DescriptionBtnActive : styles.DescriptionBtn } onClick={() => setActiveTab(index)}>{tab.title}</button>
                ))}
            </div>

            <div className={styles.DescriptionText}>
                <p>{tabs[activeTab].content}</p>
            </div>
        </div>
        </div>
    )
}

export default Description