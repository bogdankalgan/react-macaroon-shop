import styles from './Payment.module.css'

function Payment() {
    return (
        <section className={styles.Payment}>
            <div className={styles.PaymentDivs}>
                {Array.from({length: 48}).map((_, index) => (
                    <div className={styles.PaymentDiv} key={index}></div>
                ))}
            </div>
            <div className={styles.PaymentContent}>
                <p className={styles.PaymentTitle}>Самовывоз</p>

                <p className={styles.PaymentDescr}>Вы можете сделать заказ и забрать его самостоятельно с нашего
                    производства по адресу: ул. Маршала Тухачевского 22 БЦ "Сова"</p>
                <p className={styles.PaymentDescr}>Заказ необходимо сделать до 20 часов, чтобы забрать его на следующий
                    день в пункте самовывоза в любое удобное время в промежутке с 13 до 22 часов.</p>
                <p className={styles.PaymentDescr}>Оплатить заказ банковской картой можно заранее при оформлении.
                    Непосредственно при получении банковской картой расплатиться нельзя.</p>

                <p className={styles.PaymentTitle}>Оплата</p>

                <p className={styles.PaymentDescr}>Вы можете оплатить заказ при получении наличными или заранее оплатить
                    заказ банковской картой. Для этого укажите выбранный способ при оформлении заказа.</p>
                <p className={styles.PaymentDescr}>Оплата банковской картой удобна, если вы хотите отправить десерты в
                    подарок или не желаете возиться с наличными при получении заказа.</p>
                <p className={styles.PaymentDescr}>Если у Вас нет карты российского банка, мы можем принять оплату через
                    платёжную систему PayPal.</p>
            </div>

            <div className={styles.PaymentImg}>
                <img src='./img/payment/1.png' alt="payment img"/>
            </div>
        </section>
    )
}

export default Payment