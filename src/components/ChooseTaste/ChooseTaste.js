import {useState, useEffect} from "react";
import Header from "../Home/Header/Header";
import Breadcrumbs from "../BreadCrumbs";
import PinkButton from "../Corporatives/PinkButton";
import PopularButton from "../Home/Popular/PopularButton";
import styles from "./ChooseTaste.module.css";
import {Link} from "react-router-dom";

const availableTastes = [
    {id: 1, title: "Ананас"}, {id: 2, title: "Яблоко"},
    {id: 3, title: "Вишня"}, {id: 4, title: "Кокос"},
    {id: 5, title: "Пармезан"}, {id: 6, title: "Чесночок"},
];

const seasonItems = [
    {
        id: 1,
        imgPath: '/img/tastes/1.png',
        title: "Шоколад, банан",
        descr: "Сезонный вкус: молочный шоколад, отборные свежие бананы"
    },
    {
        id: 2,
        imgPath: '/img/tastes/2.png',
        title: "Облепиха, розмарин",
        descr: "Сезонный вкус: белый шоколад, свежие ягоды облепихи, немного розмарина"
    },
    {
        id: 3,
        imgPath: '/img/tastes/3.png',
        title: "Чёрный трюфель",
        descr: "Белый шоколад, сливки и паста из летнего чёрного итальянского трюфеля."
    },
    {
        id: 4,
        imgPath: '/img/tastes/4.png',
        title: "Голубой сыр",
        descr: "Наш самый пикантный и один из самых популярных вкусов. Это нужно попробовать!"
    },
    {
        id: 5,
        imgPath: '/img/tastes/5.png',
        title: "Пармезан",
        descr: "Пикантный сладко-соленый вкус. Начинка изготавливается с использованием настоящего итальянского сыра Parmigiano Reggiano и Grana Padano категории DOP."
    },
    {
        id: 6,
        imgPath: "/img/tastes/6.png",
        title: "Песто ",
        descr: "Внутри ингредиетны классического песто - свежий ароматный базилик, итальянский пармезан, кедровые орешки и всё это в виде ганаша на белом шоколаде."
    },
    {
        id: 7,
        imgPath: '/img/tastes/1.png',
        title: "Шоколад, банан",
        descr: "Сезонный вкус: молочный шоколад, отборные свежие бананы"
    },
    {
        id: 8,
        imgPath: '/img/tastes/2.png',
        title: "Облепиха, розмарин",
        descr: "Сезонный вкус: белый шоколад, свежие ягоды облепихи, немного розмарина"
    },
    {
        id: 9,
        imgPath: '/img/tastes/3.png',
        title: "Чёрный трюфель",
        descr: "Белый шоколад, сливки и паста из летнего чёрного итальянского трюфеля."
    },
];

function ChooseTaste({count, price, selectedTastes = [], onNext}) {
    const [flavors, setFlavors] = useState({});
    const isMobile = window.innerWidth <= 320;

    const getTotalSelected = () => {
        return Object.values(flavors).reduce((sum, count) => sum + count, 0);
    };

    useEffect(() => {
        document.body.classList.add('choose-taste-page');
        return () => {
            document.body.classList.remove('choose-taste-page');
        };
    }, []);

    const updateFlavorCount = (id, type, delta) => {
        setFlavors((prev) => {
            const key = `${type}-${id}`; // Уникальный ключ

            const totalSelected = Object.values(prev).reduce((sum, num) => sum + num, 0);

            if (delta > 0 && totalSelected >= count) {

                return prev; // Не даем добавить больше, чем `count`
            }

            const newCount = (prev[key] ?? 0) + delta;
            if (newCount < 0) return prev;

            const updated = {...prev, [key]: newCount};
            return updated;
        });
    };

    useEffect(() => {
    }, [count, selectedTastes]);

    if (!count) {
        return <h1>❌ Ошибка: Количество макаронс не передано!</h1>;
    }

    const handleNext = () => {
        const totalSelected = getTotalSelected();

        if (!count) {
            console.error("❌ Ошибка: не выбрано количество макаронс");
            return;
        }

        if (totalSelected !== count) {
            console.error(`❌ Ошибка: Выбрано ${totalSelected}, но нужно ${count}`);
            return;
        }

        try {
            onNext && onNext({count, price, flavors});
        } catch (error) {
            console.error("❌ Ошибка при выполнении onNext: ", error);
        }

        onNext({count, price, flavors});
    };



    return (
        <div>
            <Header/>
            <Breadcrumbs/>
            <div style={{textAlign: "center", marginBottom: "38px"}}>
                <h1 className="titleFirst">Выберите вкусы</h1>
            </div>

            <div className={styles.ChooseTasteTastes}>
                <div className={styles.ChooseTasteSeason}>
                    {seasonItems.map((item) => {
                        return (
                            <div key={item.id} className={styles.ChooseTasteSeasonCard}>
                                <img src={item.imgPath} alt={item.title}
                                     style={{margin: "auto auto"}}/>
                                <p className={styles.ChooseTasteSeasonCardTitle}>{item.title}</p>
                                <p className={styles.ChooseTasteSeasonCardDescr}>{item.descr}</p>
                                <div className={styles.ChooseTasteSeasonCardButtons}>
                                    <button onClick={() => updateFlavorCount(item.id, "season", -1)}>-</button>
                                    <span>{flavors[`season-${item.id}`] || 0}</span>
                                    <button onClick={() => updateFlavorCount(item.id, "season", 1)}>+</button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.ChooseTastesRegularTastes}>
                    <div style={{textAlign: "center", marginBottom: "20px"}}>
                        <h3 className={styles.ChooseTasteTastesTitle}>
                            {getTotalSelected()} из {count} шт.{" "}
                            <span>
                            {typeof price === "string" ? price : "Ошибка в цене"}
                        </span>
                        </h3>
                    </div>


                    <div className={styles.ChooseTastesRegularTastesCardContainer}>
                        {availableTastes.map((taste) => {
                            return (
                                <div key={taste.id} className={styles.ChooseTastesRegularTastesCard}>
                                    <span>{taste.title}</span>
                                    <div className={styles.ChooseTasteTastesItem}>
                                        <button onClick={() => updateFlavorCount(taste.id, "regular", -1)}>-</button>
                                        <span>{flavors[`regular-${taste.id}`] || 0}</span>
                                        <button onClick={() => updateFlavorCount(taste.id, "regular", 1)}>+</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {getTotalSelected() !== count && (
                        <p className={styles.ChooseTasteCount}>Для продолжения количество макарон должно
                            равняться {count} шт.</p>
                    )}

                    <div onClick={getTotalSelected() === count ? handleNext : null}
                         className={styles.ChooseTastesRegularTastesButtons}>
                        <PinkButton text={isMobile ? "Далее" : "Оформить заказ"}/>
                        <Link to={'/create-your-set/choose-count'}>
                            <PopularButton text="Собрать еще набор"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseTaste;