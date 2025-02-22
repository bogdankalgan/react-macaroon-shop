import styles from "./Hero.module.css";

function Hero() {
    return (
        <section className={styles.Hero}>
            <div className={styles.HeroImg}>
                <img src='/img/contactsHero/1.png' alt='contacts hero img' />
            </div>

            <div className={styles.HeroContent}>
                <h1 className='titleFirst'>Контакты</h1>

                <div>
                    <p>Производство</p>

                    <p>Маршала Тухачевского, 22</p>
                    <p>Время работы: с 8 до 19:30.</p>
                </div>

                <div>
                    <p>Пункты самовывоза:</p>

                    <p>Кафе “Морошка”. Маршала Тухачевского, 22 <br/>(с 8 до 19:30)</p>
                    <p>Кафе “Мята”. Наб канала Грибоедова, 37 <br/>(с 10 до 22)</p>
                </div>

                <div>
                    <p>Телефоны:</p>

                    <p>8 (812) 309-82-88 основной номер</p>
                    <p>8 (981) 841-85-25 для жалоб и предложений</p>
                </div>
            </div>
        </section>
    )
}

export default Hero;