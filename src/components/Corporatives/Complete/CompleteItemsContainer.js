import {useState, useRef, useEffect} from "react";
import CompleteItem from "./CompleteItem";
import styles from "./CompleteItemsContainer.module.css";
import ActionButtonContainer from "../../Home/Action/ActionButtonContainer";

function CompleteItemsContainer() {
    const items = [
        {text: "Макароны для отеля 'Бла бла'"},
        {text: "Набор для кафе 'Мята'"},
        {text: "Макароны для отеля 'Бла бла'"},
        {text: "Набор для кафе 'Мята'"},
        {text: "Макароны для отеля 'Бла бла'"},
        {text: "Набор для кафе 'Мята'"},
        {text: "Макароны для отеля 'Бла бла'"},
        {text: "Набор для кафе 'Мята'"},
        {text: "Макароны для отеля 'Бла бла'"},
        {text: "Набор для кафе 'Мята'"},
        {text: "Макароны для отеля 'Бла бла'"},
        {text: "Набор для кафе 'Мята'"}
    ];

    const itemsPerPage = 4; // Количество элементов на странице
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const containerRef = useRef(null); // Создаем ref для контейнера карточек

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollIntoView({behavior: "smooth", block: "start"});
        }
    }, [currentPage]); // Скролл срабатывает при смене страницы

    // Фильтруем элементы для текущей страницы
    const visibleItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (newPage) => {
        console.log(`Переход на страницу: ${newPage}`);
        setCurrentPage(newPage);
    };

    return (
        <div>
            <div ref={containerRef} className={styles.completeItemContainer}>
                {visibleItems.map((item, index) => (
                    <CompleteItem key={index} text={item.text}/>
                ))}
            </div>

            <div className={styles.completeItemContainerButtons}>
                <ActionButtonContainer
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default CompleteItemsContainer;
