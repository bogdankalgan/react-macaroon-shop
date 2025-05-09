import { useNavigate, useLocation } from 'react-router-dom';
import PinkButton from "../Corporatives/PinkButton";
import styles from './ReadyModal.module.css';

export default function SuccessPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const count = location.state?.count || 0;

    return (
        <div className={styles.ReadyModalContainer}>
            <div className={styles.ReadyModal}>
                <h2 className="titleSecond" style={{marginBottom: "20px"}}>Готово!</h2>
                <p className={styles.ReadyModalDescr}>Ваш набор из {count} макарон с индивидуальным дизайном собран и добавлен в корзину.</p>
                <div className={styles.ReadyModalButtons}>
                    <button onClick={() => navigate('/')} className={styles.BlueButton}>На главную</button>
                    <div onClick={() => navigate('/cart')}>
                        <PinkButton text="Перейти в корзину"/>
                    </div>

                </div>
            </div>
        </div>
    );
}