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
    const itemsPerPage = 4;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const scrollToPage = (page) => {
        if (containerRef.current) {
            const scrollAmount = containerRef.current.clientWidth;
            containerRef.current.scrollTo({
                left: (page - 1) * scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        scrollToPage(page);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
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
    }, []);

    return (
        <div className={styles.ActionContainer}>
            <div
                ref={containerRef}
                className={styles.ItemsContainer}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
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
