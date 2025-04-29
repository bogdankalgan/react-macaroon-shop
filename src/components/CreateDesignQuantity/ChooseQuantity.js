import Header from "../Home/Header/Header";
import BreadCrumbs from "../BreadCrumbs";
import Footer from "../Home/Footer/Footer";
import ChooseQuantityCardsContainer from "./ChooseQuantityCardsContainer";

function ChooseQuantity() {
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