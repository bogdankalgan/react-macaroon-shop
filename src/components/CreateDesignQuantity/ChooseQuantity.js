import {useEffect} from "react";
import Header from "../Home/Header/Header";
import BreadCrumbs from "../BreadCrumbs";
import Footer from "../Home/Footer/Footer";
import ChooseQuantityCardsContainer from "./ChooseQuantityCardsContainer";

function ChooseQuantity() {
    useEffect(() => {
        document.body.classList.add('choose-quantity-page');
        return () => {
            document.body.classList.remove('choose-quantity-page');
        };
    }, []);

    return (
        <div>
            <Header/>
            <BreadCrumbs/>

            <div style={{textAlign: "center", marginBottom: "36px"}}>
                <h1 className="titleFirst">Выберите количество</h1>
            </div>

            <ChooseQuantityCardsContainer/>

            <Footer/>
        </div>
    )
}

export default ChooseQuantity