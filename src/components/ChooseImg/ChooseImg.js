import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateDesign } from "../DesignContext";
import Header from "../Home/Header/Header";
import BreadCrumbs from "../BreadCrumbs";
import Footer from "../Home/Footer/Footer";
import styles from './ChooseImg.module.css'
import {id} from "date-fns/locale"

function ChooseImg() {
    const { amount } = useCreateDesign();
    const navigate = useNavigate();
    const [selected, setSelected] = useState([]);
    const [textInput, setTextInput] = useState("");

    const images = [
        { id: 1, img: "/img/CreateDesignChooseImg/1.png", type: "img" },
        { id: 2, img: "/img/CreateDesignChooseImg/2.png", type: "img" },
        { id: 3, img: "/img/CreateDesignChooseImg/3.png", type: "img" },
        { id: 4, img: "/img/CreateDesignChooseImg/4.png", type: "img" },
        { id: 5, img: "/img/CreateDesignChooseImg/5.png", type: "img" },
        { id: 6, img: "/img/CreateDesignChooseImg/6.png", type: "img" },
        { id: 7, img: "/img/CreateDesignChooseImg/7.png", type: "img" },
        { id: 8, img: "/img/CreateDesignChooseImg/1.png", type: "img" },
        { id: 9, img: "/img/CreateDesignChooseImg/2.png", type: "img" },
        { id: 10, img: "/img/CreateDesignChooseImg/3.png", type: "img" },
        { id: 11, img: "/img/CreateDesignChooseImg/4.png", type: "img" },
        { id: 12, img: "/img/CreateDesignChooseImg/5.png", type: "img" },
        { id: 13, img: "/img/CreateDesignChooseImg/6.png", type: "img" },
        { id: 14, img: "/img/CreateDesignChooseImg/7.png", type: "img" },
        { id: 15, img: "/img/CreateDesignChooseImg/7.png", type: "img" }
    ];

    useEffect(() => {
        const saved = localStorage.getItem("create-design-selected");
        if (saved) {
            setSelected(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("create-design-selected", JSON.stringify(selected));
    }, [selected]);

    useEffect(() => {
        return () => {
            localStorage.removeItem("create-design-selected");
        };
    }, []);

    const totalCount = selected.reduce((sum, item) => sum + item.count, 0);

    const handleAddImg = (img) => {
        setSelected(prev => {
            const exists = prev.find(i => i.id === img.id && i.type === "img");
            if (totalCount >= amount) return prev;

            if (exists) {
                return prev.map(i =>
                    i.id === img.id && i.type === "img" ? { ...i, count: i.count + 1 } : i
                );
            } else {
                return [...prev, { ...img, count: 1 }];
            }
        });
    };

    const handleUploadImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const base64 = e.target.result;
            const newImg = {
                id: Date.now(),
                type: "img",
                img: base64,
                count: 1
            };
            setSelected(prev => {
                const totalCount = prev.reduce((sum, item) => sum + item.count, 0);
                if (totalCount >= amount) return prev;
                return [...prev, newImg];
            });
        };
        reader.readAsDataURL(file);
    };

    const handleAddText = () => {
        setSelected(prev => {
            const totalCount = prev.reduce((sum, item) => sum + item.count, 0);
            if (!textInput.trim() || totalCount >= amount) return prev;

            return [...prev, {
                id: Date.now(),
                type: "text",
                text: textInput.trim(),
                count: 1
            }];
        });
        setTextInput("");
    };

   /* const handleIncrease = (id, type) => {
        setSelected(prev => prev.map(i =>
            i.id === id && i.type === type ? { ...i, count: i.count + 1 } : i
        ));
    };
*/
    const handleDecrease = (id, type) => {
        setSelected(prev => prev.flatMap(i => {
            if (i.id === id && i.type === type) {
                if (i.count > 1) return [{ ...i, count: i.count - 1 }];
                else return [];
            }
            return [i];
        }));
    };

    const handleNext = () => {
        if (totalCount === amount) {
            localStorage.removeItem("create-design-selected");
            navigate("/create-design/choose-more");
        }
    };

    useEffect(() => {
        document.body.classList.add('choose-img-page');
        return () => {
            document.body.classList.remove('choose-img-page');
        };
    }, []);

    const handleRemove = (id) => {
        setSelected(prev => prev.filter(item => item.id !== id));
    };

    return (
        <div>
            <Header/>
            <BreadCrumbs/>

        <div className={styles.ChooseImgContaier}>
            <h1 className="titleFirst">Выберите изображения</h1>

            <p className={styles.ChooseImgDescr}>Загрузите собственные изображения или выберите из нашей галереи</p>

            <div className={styles.SelectedImgs}>
                <p>Выбранные изображения</p>

                <div className={styles.SelectedImgsItemsContainer}>
                    {selected.map(item => (
                        <div key={item.id} className={styles.SelectedImgsItem}>
                            <img src={item.img} alt={item.id} key={item.id}/>
                            <button onClick={() => handleRemove(item.id)}>x</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.ChooseImgContent}>
            <div className={styles.ChooseImg}>
                {images.map(img => (
                    <div key={img.id}>
                        <img src={img.img} alt={img.id} onClick={() => handleAddImg(img)} />
                        <div className={styles.ChooseImgCounter}>
                            <button onClick={() => handleDecrease(
                                (selected.find(i => i.img === img.img && i.type === "img")?.id) ?? img.id,
                                "img"
                            )}>-</button>
                            <span>
                                {selected.find(i => i.img === img.img && i.type === "img")?.count || 0}
                            </span>
                            <button onClick={() => handleAddImg(img)}>+</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.ChooseImgSidebr}>
            <div className={styles.ChooseImgSidebarTitle}>
                <h2>{totalCount} из {amount}</h2>
            </div>
            <div className={styles.ChooseImgSidebarItems}>
                {selected.map(item => (
                    <div key={item.id} className={styles.ChooseImgSidebarItem}>
                        {item.type === "img" ? (
                            <img src={item.img} alt={item.id} />
                        ) : (
                            <div>{item.text}</div>
                        )}
                        <button onClick={() => handleDecrease(item.id, item.type)} className={styles.ChooseImgSidebarItemButton}>x</button>
                    </div>
                ))}
            </div>
                <div  className={styles.ChooseImgUpload}>
                    <input type="file" accept="image/*" onChange={handleUploadImage} id="upload-file" style={{display: "none"}}/>
                    <label htmlFor="upload-file" className={styles.ChooseImgUploadLabel}>
                        <div className={styles.ChooseImgUploadImg}>
                            <img src="../icons/ChooseImgIcon/1.svg" alt="choose img icon for upload file"/>
                        </div>
                        Загрузить с компьютера
                    </label>
                    <div className={styles.ChooseImgUploadAddText}>
                        <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} placeholder="Введите текст" maxLength={20} onKeyDown={(e) => {if (e.key === "Enter") {
                            handleAddText();
                        }
                        }}/>
                    </div>
                </div>

            <p className={styles.ChooseImgRule}>Для продолжения количество макарон должно равняться <b>{amount} шт.</b></p>

            <div style={{textAlign: "center"}}>
                <button onClick={handleNext} disabled={totalCount !== amount} className={styles.ChooseImgButtonNext}>Далее</button>
            </div>
            </div>
            </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ChooseImg;