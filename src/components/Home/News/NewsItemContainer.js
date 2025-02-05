import {useState, useEffect, useRef} from "react";
import NewsItem from "./NewsItem";
import {dataBase} from "../../dataBase";
import styles from "./NewsItemContainer.module.css";
import NewsButtonContainer from "./NewsButtonContainer";

function NewsItemContainer() {
    const [news, setNews] = useState([]);
    const containerRef = useRef(null);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(news.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        const fetchNews = async () => {
            try {
                const {data, error} = await dataBase.from("news").select("*");

                if (error) throw error;

                setNews(data);
            } catch (error) {
                console.log("Error loading data", error);
            }
        };
        fetchNews();
    }, []);


    const scrollToPage = (page) => {
        if (containerRef.current) {
            const scrollAmount = containerRef.current.clientWidth;
            containerRef.current.scrollTo({
                left: (page - 1) * scrollAmount,
                behavior: "smooth",
            });
            setCurrentPage(page);
        }
    };


    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const scrollLeft = containerRef.current.scrollLeft;
                const scrollWidth = containerRef.current.clientWidth;
                const page = Math.round(scrollLeft / scrollWidth) + 1;
                if (page !== currentPage) {
                    setCurrentPage(page);
                }
            }
        };

        const ref = containerRef.current;
        if (ref) {
            ref.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (ref) {
                ref.removeEventListener("scroll", handleScroll);
            }
        };
    }, [currentPage]);

    return (
        <div>
            <div
                className={styles.NewsItemContainer}
                ref={containerRef}
                style={{
                    display: "flex",
                    overflowX: "auto",
                    scrollBehavior: "smooth",
                }}
            >
                {news.map((item) => (
                    <div
                        key={item.id}
                    >
                        <NewsItem
                            imgPath={item.imgpath}
                            title={item.title}
                            descr={item.description}
                            date={item.date}
                        />
                    </div>
                ))}
            </div>

            <NewsButtonContainer
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={scrollToPage}
            />
        </div>
    );
}

export default NewsItemContainer;
