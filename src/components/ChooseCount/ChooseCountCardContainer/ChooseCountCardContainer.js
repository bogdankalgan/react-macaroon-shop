import {useState} from "react";
import ChooseCountCard from "../ChooseCountCard/ChooseCountCard";
import PinkButton from "../../Corporatives/PinkButton";
import styles from "./ChooseCountCardContainer.module.css";

function ChooseCountCardContainer({onNext}) {
    const [selectedItem, setSelectedItem] = useState(null);

    const items = [
        {id: 1, imgPath: "/img/chooseCountImg/1.png", title: "Набор из 6 макарон", price: "350 руб."},
        {id: 2, imgPath: "/img/chooseCountImg/2.png", title: "Набор из 12 макарон", price: "700 руб."},
        {id: 3, imgPath: "/img/chooseCountImg/3.png", title: "Набор из 24 макарон", price: "1400 руб."},
        {id: 4, imgPath: "/img/chooseCountImg/4.png", title: "Набор из 48 макарон", price: "2800 руб."},
        {
            id: 5,
            imgPath: "/img/chooseCountImg/5.png",
            title: "Набор из 40 макарон в круглой коробке",
            price: "3000 руб."
        },
        {
            id: 6,
            imgPath: "/img/chooseCountImg/6.png",
            title: "Набор из 70 макарон в круглой коробке",
            price: "5000 руб."
        }
    ];

    const handleSelect = (item) => {
        setSelectedItem(item); // Сохраняем объект, а не число
    };

    const handleNext = () => {
        if (!selectedItem) {
            console.error("❌ Ошибка: не выбрано количество макаронсов", selectedItem);
            return;
        }

        if (typeof selectedItem !== "object" || !selectedItem.title) {
            console.error("❌ Ошибка: `selectedItem` не является объектом или не содержит `title`!", selectedItem);
            return;
        }

        const match = selectedItem.title.match(/\d+/);
        if (!match) {
            console.error("❌ Ошибка: Не удалось извлечь число из `title`", selectedItem.title);
            return;
        }


        if (onNext) {
            onNext(selectedItem)
        } else {
            console.error("❌ Ошибка: `onNext` не передан в `ChooseCountCardContainer`");
        }
    };

    return (
        <div>
            <div className={styles.ChooseCountCardContainer}>
                {items.map((item) => (
                    <ChooseCountCard
                        key={item.id}
                        imgPath={item.imgPath}
                        title={item.title}
                        price={item.price}
                        isSelected={selectedItem?.id === item.id}
                        onSelect={() => handleSelect(item)}
                    />
                ))}
            </div>

            {selectedItem && (
                <div className={styles.nextButton} onClick={handleNext} style={{marginBottom: "50px"}}>
                    <PinkButton text="Далее"/>
                </div>
            )}
        </div>
    );
}

export default ChooseCountCardContainer;