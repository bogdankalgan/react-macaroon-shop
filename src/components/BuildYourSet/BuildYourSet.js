import {Routes, Route, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import ChooseCount from "../ChooseCount/ChooseCount";
import ChooseTaste from "../ChooseTaste/ChooseTaste";
import ChooseExtrats from "../ChooseExtrats/ChooseExtrats";
import Summary from "../Summary/Summary";

function BuildYourSet() {
    const navigate = useNavigate();
    const [selectedCount, setSelectedCount] = useState(null);
    const [selectedTaste, setSelectedTaste] = useState([]);
    const [selectedExtras, setSelectedExtras] = useState([]);

    useEffect(() => {
        if (selectedCount) {
           
        }
    }, [selectedCount]);

    return (
        <Routes>
            <Route
                path="choose-count"
                element={
                    <ChooseCount
                        onNext={(data) => {
                            setSelectedCount(data);
                            setTimeout(() => navigate("/create-your-set/choose-taste"), 100);
                        }}
                    />
                }
            />
            <Route
                path="choose-taste"
                element={
                    selectedCount ? (
                        <ChooseTaste
                            count={selectedCount.count}
                            price={selectedCount.price}
                            selectedTastes={Array.isArray(selectedTaste) ? selectedTaste : []}
                            onNext={(tastes) => {
                                setSelectedTaste(tastes);
                                navigate("/create-your-set/choose-extras");
                            }}
                        />
                    ) : (
                        <h1>❌ Ошибка: Сначала выберите количество макаронсов!</h1>
                    )
                }
            />
            <Route
                path="choose-extras"
                element={
                    <ChooseExtrats
                        onNext={(extras) => {
                            setSelectedExtras(extras);
                            navigate("/create-your-set/summary");
                        }}
                    />
                }
            />
            <Route
                path="summary"
                element={<Summary count={selectedCount} tastes={selectedTaste} extras={selectedExtras}/>}
            />
        </Routes>
    );
}

export default BuildYourSet;