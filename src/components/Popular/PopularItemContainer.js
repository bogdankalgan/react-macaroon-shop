import React from "react";
import PopularItem from './PopularItem'
import styles from './PopularItemContainer.module.css'

function PopularItemContainer(props) {
    const {items} = props;
    /*const items = [
        {
            id: 1,
            imgUrl: "./img/popular/1.png",
            title: "Сердце",
            descr: "24 штуки в коробке в виде сердца.\n Ассорти из 6 вкусов",
            price: "2800 руб"
        },

        {
            id: 2,
            imgUrl: "./img/popular/2.png",
            title: "Красота спасёт мир ",
            descr: "Набор 16 шт. Вкусы: клубника - базилик, кокос, \n голубой сыр, пармезан", price: "750 руб"
        },

        {
            id: 3,
            imgUrl: "./img/popular/3.png",
            title: "Круглый набор",
            descr: "40 макаронс в круглой коробке с персональной \n надписью",
            price: "3900 руб"
        },

        {
            id: 4,
            imgUrl: "./img/popular/4.png",
            title: "Набор на 9",
            descr: "Набор из 9 штук в квадратной коробке. Вкусы: \n шоколад, фисташка, вишня",
            price: "950 руб"
        },

        {
            id: 5,
            imgUrl: "./img/popular/5.png",
            title: "Набор на 16",
            descr: "Набор 16 шт. Вкусы соленая карамель, голубой \n  сыр, пармезан, шоколад ",
            price: "1500 руб"
        },

        {
            id: 6,
            imgUrl: "./img/popular/6.png",
            title: "Сердце ",
            descr: "24 штуки в коробке в виде сердца.\n Ассорти из 6 вкусов ",
            price: "2500 руб"
        }
    ]*/
    return (
        <div className={styles.PopularItemContainer}>
            {items.map((item,) => (
                <PopularItem key={item.id} imgPath={item.imgPath} title={item.title} descr={item.description}
                             price={item.price}/>
            ))}
        </div>
    )
}

export default PopularItemContainer;