import Header from "../Home/Header/Header";
import BreadCrumbs from "../BreadCrumbs";
import Footer from "../Home/Footer/Footer";
import ChooseMoreItemContainer from "./ChooseMoreItemContainer";
import PinkButton from "../Corporatives/PinkButton";
import styles from "./ChooseMore.module.css"
import {useCreateDesign} from "../DesignContext";
import {useNavigate} from "react-router-dom";

function ChooseMore() {
    const {baseCount, basePrice} = useCreateDesign()
    const {selectedExtras, setSelectedExtras} = useCreateDesign()
    const navigate = useNavigate()

    const handleClick = () => navigate("/create-design/your-choice");

    const handleRemoveExtra = (id) => {
        setSelectedExtras(prev =>
            prev
                .map(item => item.id === id ? {...item, count: item.count - 1} : item)
                .filter(item => item.count > 0)
        );
    }


    return (
        <div>
            <Header/>
            <BreadCrumbs/>

            <div style={{textAlign: "center", marginBottom: "36px"}}>
                <h2 className="titleFirst">Дополнительно</h2>
            </div>

            <div className={styles.ChooseMoreContainer}>
                <ChooseMoreItemContainer selectedExtras={selectedExtras} setSelectedExtras={setSelectedExtras}/>

                <div className={styles.ChooseMoreSidebar}>
                    <p className={styles.ChooseMoreSidebarTitle}>Набор макаон {baseCount} шт. с индивидуальным дизайном. <span>{basePrice}</span></p>

                    <div className={styles.ChooseMoreSidebarItems}>
                        {selectedExtras.map(item => (
                            item.count > 0 && (
                                <div key={item.id} className={styles.ChooseMoreSidebarItem}>
                                    <span>
                                      {item.title} <span>{item.price * item.count} руб.</span>
                                    </span>
                                    <button onClick={() => handleRemoveExtra(item.id)}>x</button>
                                </div>
                            )
                        ))}
                    </div>



                    <div style={{textAlign: "center"}} className={styles.ChooseMoreSidebarNext} onClick={handleClick}>
                        <PinkButton text="ГОТОВО"  />
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default ChooseMore