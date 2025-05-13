import NaberyItem from "./NaberyItem";
import styles from "./Nabery.module.css";
import styled from 'styled-components'

function Nabery() {
    const items = [
        {
            href: "#readyNabery",
            iconPath: "icons/nabery/1.svg",
            title: "Готовые наборы",
            descr: "Готовые наборы со скидкой. Вы можете подобрать набор на подходящий случай.",
            backgroundBefore: "rgba(255, 255, 255, 0.3)",
            clipPath: "polygon(100% 100%, 100% 0, 51% 50%, 0% 100%)",
            styles: {
                background: "#FFDBC3"
            }
        },

        {
            href: "#create",
            iconPath: "icons/nabery/2.svg",
            title: "Собрать свой набор",
            descr: "Выбрать количество макарун, и выбрать вкусы",
            backgroundBefore: "rgba(255, 255, 255, 0.3)",
            clipPath: "polygon(0 0, 100% 100%, 52% 100%, 0 100%)",
            styles: {
                background: "#FFC2CC"
            }
        },

        {
            href: "#individualNaber",
            iconPath: "icons/nabery/3.svg",
            title: "Набор с индивидуальной печатью",
            descr: "Собрать набор макарон с уникальным дизайном.",
            backgroundBefore: "rgba(255, 255, 255, 0.3)",
            clipPath: "polygon(0 0, 100% 0, 100% 100%)",
            styles: {
                background: "#B4EAB3"
            }
        },

        {
            href: "#marriegeOffer",
            iconPath: "icons/nabery/4.svg",
            title: "Свадебные предложения",
            descr: "Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества",
            backgroundBefore: "rgba(255, 255, 255, 0.3)",
            clipPath: "polygon(100% 0, 0 100%, 0 0)",
            styles: {
                background: "#FDD5CD"
            }
        },

        {
            href: "#corporativeGifts",
            iconPath: "icons/nabery/5.svg",
            title: "Корпоративные подарки",
            descr: "От 85 руб за шт. С уникальным дизайном. Приятный комплимент для коллег и партнеров",
            backgroundBefore: "rgba(255, 255, 255, 0.3)",
            clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
            styles: {
                background: "#A8DCDF"
            }
        },

        {
            href: "#opt",
            iconPath: "icons/nabery/6.svg",
            title: "Оптовые поставки",
            descr: "Предложение для кофеен, кафе, отелей и т.д. Посмотрите условия сотрудничества и отзывы.",
            backgroundBefore: "rgba(255, 255, 255, 0.3)",
            clipPath: "polygon(0 100%, 0 0, 100% 100%)",
            styles: {
                background: "#C4C6EC"
            }
        }
    ]

    const StyledNaberyItem = styled.div`
        position: relative;
        background: ${(props) => props.backgroundBefore || "transparent"};

        &::after {
            content: "";
            display: inline-block;
            width: 100%;
            height: 100%;
            background: ${(props) => props.backgroundBefore || "transparent"};
            position: absolute;
            left: 0;
            top: 0;
            clip-path: ${(props) => props.clipPath};
        }
        
        @media (max-width: 320px) {
            background: none !important;
            & {
                background-color: transparent !important;
            }
            &::after {
                background: none !important;
            }
        }
    `;

    return (
        <section className={styles.Nabery}>
            {items.map((item) => (
                <StyledNaberyItem backgroundBefore={item.backgroundBefore} clipPath={item.clipPath} key={item.href}>
                    <NaberyItem href={item.href} iconPath={item.iconPath} title={item.title}
                                descr={item.descr} stylesItem={item.styles}/>
                </StyledNaberyItem>
            ))}
        </section>
    )
}


export default Nabery