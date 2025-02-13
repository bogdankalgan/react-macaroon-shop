import styles from './Calculation.module.css';
import Input from './Input';
import PinkButton from '../..//Corporatives/PinkButton';

function Calculation() {
    return (
        <section className={styles.Calculation}>
            <h2 className="titleSecond" style={{marginBottom: "64px"}}>Заказать расчёт или отправить запрос <br/> на
                сотрудничество</h2>


            <div className={styles.CalculationInputs}>
                <div>
                    <p>Ваше имя*</p>
                    <Input type="text" placeholder="Укажите имя" required/>
                </div>

                <div>
                    <p>Название компании</p>

                    <Input type="text" placeholder="Укажите название"/>
                </div>

                <div>
                    <p>Добавить комментарий</p>

                    <textarea rows={9} cols={45}/>
                </div>

                <div>
                    <p>Ваш телефон*</p>

                    <Input type="number" placeholder="+7 (___) ___-__-__" required/>
                </div>

                <div>
                    <p>E-mail</p>

                    <Input type="email" placeholder="post@gmail.com"/>
                </div>
            </div>

            <div style={{textAlign: "center", marginBottom: "23px"}}>
                <PinkButton text="Заказать расчёт"/>
            </div>

            <p>Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с <a href="!">Договором оферты</a> и разрешаю
                обработку моих
                персональных данных в соответствии с <a href="@">Политикой конфиденциальности</a></p>
        </section>
    )
}


export default Calculation;