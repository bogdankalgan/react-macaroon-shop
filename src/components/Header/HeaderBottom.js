import styles from "./HeaderBottom.module.css"

function HeaderBottom() {
    const hrefs = {}
    return (
        <div className={styles.headerBottom}>
            <ul className={styles.headerBottomList}>
                <li>
                    <a>
                        СЛАДКИЕ ДНИ
                    </a>
                </li>

                <select>
                    <option>
                        подарочные наборы
                    </option>
                </select>

                <li>
                    <a>
                        Собрать набор
                    </a>
                </li>

                <img src="icons/siteIcon/logoHeader.svg" alt="header site logo"></img>

                <li>
                    <a>
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
