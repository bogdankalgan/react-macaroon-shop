import {useNavigate} from "react-router-dom";
import Header from "../Home/Header/Header";
import Breadcrumbs from "../BreadCrumbs";

function ChooseExtrats({onNext}) {
    const navigate = useNavigate();

    const handleNext = (extras) => {
        if (onNext) {
            onNext(extras);
            navigate("/create-your-set/summary");
        } else {
            console.error("onNext не передан в ChooseExtrats");
        }
    };

    return (
        <div>
            <Header/>
            <Breadcrumbs/>
            <h1 className="titleFirst">Выберите дополнительные опции</h1>
            <button onClick={() => handleNext(["Подарочная упаковка"])}>Далее</button>
        </div>
    );
}

export default ChooseExtrats;