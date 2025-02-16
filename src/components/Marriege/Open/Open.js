import styles from './Open.module.css'
import PinkButton from '../../Corporatives/PinkButton'

function Open() {
    return (
        <section className={styles.Open}>
            <div className={styles.OpenImg}>
                <img src="/img/open/1.png" alt="open img"/>
            </div>

            <div className={styles.OpenContent}>
                <h2 className="titleSecond" style={{marginBottom: "13px"}}>Мы открыты для новых идей</h2>

                <p className="descr" style={{marginBottom: "42px"}}>
                    Каждое событие уникально и мы готовы предложить индивидуальные решения для Вашего мероптиятия
                </p>

                <div className={styles.OpenInputs}>
                    <div>
                        <p>Ваше имя*</p>

                        <input required={true} type="text" placeholder="Укажите имя"/>
                    </div>

                    <div>
                        <p>Телефон*</p>

                        <input required={true} type="number" placeholder="+7 (___) ___-__-__"/>
                    </div>

                    <div className={styles.OpenIdea}>
                        <p>Опишите Вашу идею</p>

                        <input/>
                    </div>
                </div>

                <PinkButton text="Отправить заявку"/>

                <p className={styles.OpenPolicy}>Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с <a
                    href="&">Договором
                    оферты</a> и разрешаю обработку
                    моих персональных данных в соответствии с <a href="&">Политикой конфиденциальности</a></p>
            </div>
        </section>
    )
}

export default Open