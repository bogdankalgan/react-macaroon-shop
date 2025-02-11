import styles from './HeroText.module.css'
import PopularButton from '../../Home/Popular/PopularButton'

function HeroText() {
    return (
        <div className={styles.HeroText}>
            <h1 className='titleFirst' style={{marginBottom: "13px"}}>Поставки пирожных оптом</h1>

            <p className="descr">Наши макаронсы и трубочки продаются в крупнейших кондитерских и кофейных сетях
                Санкт-Петербурга. Присоединяйтесь!</p>

            <div className={styles.HeroTextButtons}>
                <PopularButton text="Презентация"/>
                <PopularButton text="Прайс-лист"/>
            </div>

            <div className={styles.HeroTextListWrap}>
                <p>Мы предлагаем: </p>
                <ul className={styles.HeroTextList}>
                    <li className={styles.HeroTextListItem}>прямые поставки от производителя, всегда свежая продукция;
                    </li>
                    <li className={styles.HeroTextListItem}>ассортимент с высоким средним чеком и маржой;</li>
                    <li className={styles.HeroTextListItem}>бесплатные акриловые шоубоксы для витрины;</li>
                    <li className={styles.HeroTextListItem}>продукцию для дегустации или снижение цены для проведения
                        промо-акций;
                    </li>
                    <li className={styles.HeroTextListItem}>гибкие условия сотрудничества и поставок.</li>
                </ul>
            </div>
        </div>
    )
}

export default HeroText