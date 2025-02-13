import {cloneElement} from "react";
import AnswersItem from "../../Corporatives/Answers/AnswersItem";
import styles from "./RecomendedItem.module.css";

function ModifyRecomendedItem({children}) {
    return cloneElement(children, {className: styles.RecomendedItem});
}

function RecomendedItem(props) {
    const {data} = props;

    return (
        <>
            {data.map((rec, index) => (
                <ModifyRecomendedItem key={index}>
                    <div>
                        <AnswersItem title={rec.recText} descr={rec.recDescr}/>

                        <div className={styles.RecomendedItemText}>
                            <div>
                                <p className={styles.RecomendedItemTitle}>Иванов Иван</p>
                                <p className={styles.RecomendedItemDescr}>Генеральный директор ООО “ААА”</p>
                            </div>
                            <img src="/icons/recomended/1.svg" alt="recomended icon"/>
                        </div>
                    </div>
                </ModifyRecomendedItem>
            ))}
        </>
    );
}

export default RecomendedItem;
