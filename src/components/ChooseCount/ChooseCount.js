import {useNavigate} from "react-router-dom";
import Header from "../Home/Header/Header";
import BreadCrumb from "../BreadCrumbs";
import ChooseCountCardContainer from "./ChooseCountCardContainer/ChooseCountCardContainer";

function ChooseCount({onNext}) {
    const navigate = useNavigate();

    const handleNext = (selectedItem) => {
        if (!selectedItem || typeof selectedItem !== "object") {
            console.error("❌ Ошибка: `selectedItem` не является объектом!", selectedItem);
            return;
        }

        if (!selectedItem.title || !selectedItem.price) {
            console.error("❌ Ошибка: `selectedItem` не содержит `title` или `price`!", selectedItem);
            return;
        }

        const match = selectedItem.title.match(/\d+/);
        const count = match ? parseInt(match[0], 10) : 6;
        const price = selectedItem.price || "Ошибка в цене";


        if (onNext) {
            onNext({count, price});
            navigate("/create-your-set/choose-taste");
        } else {
            console.error("❌ Ошибка: `onNext` не передан!");
        }
    };

    return (
        <div>
            <Header/>
            <BreadCrumb/>
            <h2 className="titleSecond" style={{marginBottom: "36px"}}>
                Выберите количество
            </h2>

            <ChooseCountCardContainer onNext={handleNext}/>
        </div>
    );
}

export default ChooseCount;