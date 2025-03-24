import React from 'react';
import PinkButton from "../Corporatives/PinkButton";
import PopularButton from "../Home/Popular/PopularButton";
import styles from "./Modal.module.css";

function Modal({onClose, onGoHome, onGoCart, count}) {
    return (
        <div className={styles.Modal}>
            <div>
                <h2>Готово!</h2>
                <p>Ваш набор из {count} макаронс собран и добавлен в корзину</p>

                <div>
                    <div onClick={onGoHome}>
                        <PopularButton text="На главную "/>
                    </div>

                    <div onClick={onGoCart}>
                        <PinkButton text="Перейти в корзину"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;