import styles from "./HeaderBottom.module.css"

function HeaderBottom() {
    const hrefs = {
        sales: "#sales",
        gifts: "#gifts",
        choice: "#choice",
        createDesign: "#createDesign",
    }
    return (
        <div className={styles.headerBottom}>
            <ul className={styles.headerBottomList}>
                <li>
                    <a href={hrefs.sales}>
                        СЛАДКИЕ ДНИ
                    </a>
                </li>

                <select>
                    <option>
                        подарочные наборы
                    </option>
                </select>

                <li>
                    <a href={hrefs.choice}>
                        Собрать набор
                    </a>
                </li>

                <img src="icons/siteIcon/logoHeader.svg" alt="header site logo"></img>

                <li>
                    <a href={hrefs.createDesign}>
                        Создать дизайн
                    </a>
                </li>

                <select>
                    <option>
                        КОМПАНИЯМ
                    </option>
                </select>

                <select>
                    <option>
                        ВЕСЬ КАТАЛОГ
                    </option>
                </select>
            </ul>
        </div>
    );
}

export default HeaderBottom;
