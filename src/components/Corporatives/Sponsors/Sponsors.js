import {useState} from "react";
import SponsorsItem from "./SponsorsItem";
import ActionButtonContainer from "../../Home/Action/ActionButtonContainer";
import styles from "./Sponsors.module.css";

function Sponsors() {
    const items = [
        {imgPath: "img/sponsors/1.png"},
        {imgPath: "img/sponsors/2.png"},
        {imgPath: "img/sponsors/3.png"},
        {imgPath: "img/sponsors/4.png"},
        {imgPath: "img/sponsors/5.png"},
        {imgPath: "img/sponsors/6.png"},

        {imgPath: "img/sponsors/1.png"},
        {imgPath: "img/sponsors/2.png"},
        {imgPath: "img/sponsors/3.png"},
        {imgPath: "img/sponsors/4.png"},
        {imgPath: "img/sponsors/5.png"},
        {imgPath: "img/sponsors/6.png"},

        {imgPath: "img/sponsors/1.png"},
        {imgPath: "img/sponsors/2.png"},
        {imgPath: "img/sponsors/3.png"},
        {imgPath: "img/sponsors/4.png"},
        {imgPath: "img/sponsors/5.png"},
        {imgPath: "img/sponsors/6.png"},
    ];

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);


    const visibleItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <section className={styles.Sponsors}>
            <div className={styles.SponsorsContainer}>
                {visibleItems.map((item, i) => (
                    <SponsorsItem key={i} imgPath={item.imgPath}/>
                ))}
            </div>

            <ActionButtonContainer
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </section>
    );
}

export default Sponsors;
