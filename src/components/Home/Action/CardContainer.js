import React, {useRef, useState, useEffect} from "react";
import Card from "./Card";
import ActionButtonContainer from "./ActionButtonContainer";
import styles from "./CardContainer.module.css";

function CardContainer() {
    const items = [
        {
            title: "По СПб в районе КАД –  от 3000₽ По МСК – от 5000₽",
            bannerText: "БЕСПЛАТНАЯ ДОСТАВКА",
            imgUrl: "img/actions/1.png"
        },
        {
            title: "Шоколадное пирожное картошка на основе бисквита!",
            bannerText: "НОВИНКА",
            imgUrl: "img/actions/2.png"
        },
        {
            title: "Аппетитные конфеты на основе миндального печенья и крема",
            bannerText: "НОВИНКА",
            imgUrl: "img/actions/3.png"
        },
        {
            title: "Карамель на палочке из натуральных ингредиентов",
            bannerText: "СЛАДКАЯ НОВИНКА",
            imgUrl: "img/actions/4.png"
        },


        {
            title: "По СПб в районе КАД –  от 3000₽ По МСК – от 5000₽",
            bannerText: "БЕСПЛАТНАЯ ДОСТАВКА",
            imgUrl: "img/actions/1.png"
        },
        {
            title: "Шоколадное пирожное картошка на основе бисквита!",
            bannerText: "НОВИНКА",
            imgUrl: "img/actions/2.png"
        },
        {
            title: "Аппетитные конфеты на основе миндального печенья и крема",
            bannerText: "НОВИНКА",
            imgUrl: "img/actions/3.png"
        },
        {
            title: "Карамель на палочке из натуральных ингредиентов",
            bannerText: "СЛАДКАЯ НОВИНКА",
            imgUrl: "img/actions/4.png"
        },

        {
            title: "По СПб в районе КАД –  от 3000₽ По МСК – от 5000₽",
            bannerText: "БЕСПЛАТНАЯ ДОСТАВКА",
            imgUrl: "img/actions/1.png"
        },
        {
            title: "Шоколадное пирожное картошка на основе бисквита!",
            bannerText: "НОВИНКА",
            imgUrl: "img/actions/2.png"
        },
        {
            title: "Аппетитные конфеты на основе миндального печенья и крема",
            bannerText: "НОВИНКА",
            imgUrl: "img/actions/3.png"
        },
        {
            title: "Карамель на палочке из натуральных ингредиентов",
            bannerText: "СЛАДКАЯ НОВИНКА",
            imgUrl: "img/actions/4.png"
        },
    ];

    const containerRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth <= 320 ? 3 : 4);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const scrollToPage = (page) => {
        if (containerRef.current) {
            const cardWidth = 288;
            const gap = 30;
            const scrollAmount = page === 1
                ? 0
                : window.innerWidth <= 320
                    ? (cardWidth + gap) * (page - 1)
                    : (cardWidth + gap) * itemsPerPage * (page - 1);
            containerRef.current.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    };

    const handlePageChange = (page) => {
        const maxPage = totalPages;
        const safePage = Math.min(page, maxPage);
        setCurrentPage(safePage);
        scrollToPage(safePage);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                // Removed restriction on mobile to allow free scrolling
                const scrollLeft = containerRef.current.scrollLeft;
                const scrollWidth = containerRef.current.clientWidth;
                const page = Math.round(scrollLeft / scrollWidth) + 1;
                setCurrentPage(page);
            }
        };

        const ref = containerRef.current;
        ref.addEventListener("scroll", handleScroll);

        return () => {
            if (ref) ref.removeEventListener("scroll", handleScroll);
        };
    }, [totalPages]);

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 320;
            setItemsPerPage(isMobile ? 3 : 4);
            setCurrentPage(1); // сброс страницы
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={styles.ActionContainer}>
            <div
                ref={containerRef}
                className={styles.ItemsContainer}
                style={window.innerWidth <= 320 ? {
                    width: "calc(288px * 3 + 30px * 2 + 17px * 2)",
                    paddingLeft: "17px",
                    paddingRight: "17px",
                    overflowX: "auto"
                } : {}}
            >
                {(window.innerWidth <= 320 ? items.slice(0, 3) : items).map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.CardWrapper} ${window.innerWidth <= 320 && index >= 3 ? styles.HiddenCard : ''}`}
                    >
                        <Card
                            title={item.title}
                            bannerText={item.bannerText}
                            imgUrl={item.imgUrl}
                        />
                    </div>
                ))}
            </div>
            <ActionButtonContainer
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default CardContainer;
