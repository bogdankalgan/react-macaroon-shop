import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Header from "../Home/Header/Header";
import Breadcrumbs from "../BreadCrumbs";
import PinkButton from "../Corporatives/PinkButton";
import styles from './ChooseExtrats.module.css'

const extratsList = [
    {id: 1, title: "Открыточка с пожеланием", price: 30},
    {id: 2, title: "Открытка 2", price: 50},
    {id: 3, title: "Лента атласная", price: 0},
    {id: 4, title: "Набор эклеров 6 шт.", price: 450}
]

function ChooseExtrats({onNext, count, price}) {
    const navigate = useNavigate();
    const [extras, setExtras] = useState({})

    const updateExtras = (id, delta) => {
        setExtras((prev) => {
            const newCount = (prev[id]?.count || 0) + delta;
            if (newCount < 0) return prev;

            const updated = {
                ...prev,
                [id]: {...extratsList.find(item => item.id === id), count: newCount}
            }
            return updated;
        })
    }


    const handleNext = () => {
        const selectedExtras = Object.values(extras).filter(e => e.count > 0)
        onNext && onNext(selectedExtras)
        navigate("/create-your-set/summary", {state: {extras: selectedExtras}});
    }

    return (
        <div className={styles.ChooseExtras}>
            <Header/>
            <Breadcrumbs/>
            <div style={{textAlign: "center"}}>
                <h1 className="titleFirst">Дополнительно</h1>
            </div>

            <div className={styles.ChooseExtrasContainer}>
                <div className={styles.ChooseExtrasCards}>
                    {extratsList.map((item) => {
                        return (
                            <div key={item.id} className={styles.ChooseExtrasCard}>
                                <div className={styles.ChooseExtrasCardImg}></div>
                                <h3 className={styles.ChooseExtrasCardTitle}>{item.title}</h3>
                                <div className={styles.ChooseExtrasCardButtons}>
                                    <p className={styles.ChooseExtrasCardPrice}>{item.price} руб</p>
                                    <div>
                                        <button onClick={() => updateExtras(item.id, -1)}>-</button>
                                        <span>{extras[item.id]?.count || 0}</span>
                                        <button onClick={() => updateExtras(item.id, 1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className={styles.ChooseExtrasOrder}>
                    <p className={styles.ChooseExtrasOrderTitle}> Набор {count} шт. <span>{price}</span></p>
                    <div className={styles.ChooseExtrasOrderDopContainer}>
                        {Object.values(extras).filter(e => e.count > 0).map((extras) => {
                            return (
                                <p key={extras.id} className={styles.ChooseExtrasOrderDop}>
                                    {extras.title} : <span>{extras.price} руб</span>
                                </p>
                            )
                        })}
                    </div>

                    <div onClick={() => handleNext()} className={styles.ChooseExtrasOrderButton}>
                        <PinkButton text="Готово"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseExtrats;