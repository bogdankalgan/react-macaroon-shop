import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Banner.module.css";
import {useRef, useState, useEffect} from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";

function Banner() {
    const items = [
        { path: '/icons/1.svg', text: 'МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ' },
        { path: '/icons/2.svg', text: 'ВСЕГДА СВЕЖЕЕ' },
        { path: '/icons/3.svg', text: 'ОПТОВЫЕ ПОСТАВКИ ОТ ПРОИЗВОДИТЕЛЯ' },
        { path: '/icons/4.svg', text: 'ВСЕГДА СВЕЖЕЕ' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("right");
    const nodeRef = useRef(null);
    const intervalRef = useRef(null);

    const nextIndex = () => {
        const newDirection = 'right'
        setDirection(newDirection)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        resetAutoSlide()
    }

    const prevIndex = () => {
        const newDirection = 'left'
        setDirection(newDirection)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
        resetAutoSlide()
    }

    const startAutoSlide = () => {
        intervalRef.current=setInterval(()=>{
            setDirection("right");
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 4000)
    }

    const resetAutoSlide = () => {
        if(intervalRef.current) {clearInterval(intervalRef.current)}
        startAutoSlide()
    }

    useEffect(() => {
        startAutoSlide()
        return () => {
            clearInterval(intervalRef.current)
        }
        // eslint-disable-next-line
    }, [])


    return (
        <div className={styles.headerTop}>
            <button className={styles.sliderButton} id='buttonLeft' onClick={nextIndex}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className={styles.itemsContainer}>
            <SwitchTransition>
                <CSSTransition key={currentIndex} timeout={300} classNames={{
                    enter: direction=== 'right' ? styles.fadeEnterRight : styles.fadeEnterLeft,
                    enterActive: styles.fadeEnterActive,
                    exit: styles.fadeExit,
                    exitActive: direction ==='right' ? styles.fadeExitRight : styles.fadeExitLeft,
                }} nodeRef={nodeRef}>
                        <div ref={nodeRef} key={currentIndex} className={styles.item}>
                            <img src={items[currentIndex].path} alt={items[currentIndex].text}
                                 onError={(e) => e.target.src = "../public/icons/siteIcon/logo.svg"}/>
                            <p>{items[currentIndex].text}</p>
                        </div>
                </CSSTransition>
            </SwitchTransition>
            </div>


            <button className={styles.sliderButton} id='buttonRight' onClick={prevIndex}>
                <FontAwesomeIcon icon={faChevronRight}/>
            </button>
        </div>
    );
}

export default Banner;
