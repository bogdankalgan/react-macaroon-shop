import {useState, useEffect} from "react";
import {dataBase, uploadImageToSupabase} from "../../components/dataBase";
import PinkButton from "../../components/Corporatives/PinkButton";
import PopularItem from "../../components/Home/Popular/PopularItem";
import styles from "./AdminNabery.module.css";

function AdminNabery() {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState("");
    const [descr, setDescr] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const {data, error} = await dataBase.from("popularitems").select("*").order("id", {ascending: false});

        if (!error) {
            setItems(data); // 🔥 Теперь карточки отобразятся!
        } else {
            console.error("Ошибка загрузки наборов:", error);
        }
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const addOrUpdateItem = async () => {
        if (!title.trim() || !descr.trim() || !price.trim()) {
            console.warn("Заполни все поля!");
            return;
        }

        setLoading(true);

        let imgPath = null;

        if (image) {
            imgPath = await uploadImageToSupabase(image);

            if (!imgPath) {
                console.error("Ошибка загрузки изображения");
                setLoading(false);
                return;
            }
        }

        if (editingId) {
            console.log("Редактируем набор с ID:", editingId);

            const updateData = {title, description: descr, price};
            if (imgPath) updateData.imgpath = imgPath; // 🔥 Теперь БД обновляется правильно!

            const {error} = await dataBase.from("popularitems").update(updateData).eq("id", editingId);

            if (error) {
                console.error("Ошибка обновления набора:", error);
            } else {
                console.log("Набор успешно обновлён!");
            }
        } else {
            const itemId = Math.floor(Math.random() * 10000000);
            console.log("Добавляем набор с ID:", itemId);

            const {error} = await dataBase.from("popularitems").insert([
                {
                    imgpath: imgPath || "",
                    title,
                    description: descr,
                    price,
                },
            ]);

            if (error) console.error("Ошибка добавления набора:", error);
        }

        setLoading(false);
        setTitle("");
        setDescr("");
        setPrice("");
        setImage(null);
        setEditingId(null);
        fetchItems();
    };

    const deleteItem = async (id) => {
        const {error} = await dataBase.from("popularitems").delete().eq("id", id);

        if (!error) {
            setItems(items.filter((item) => item.id !== id));
        } else {
            console.error("Ошибка удаления набора", error);
        }
    };

    const startEditing = (item) => {
        setEditingId(item.id);
        setTitle(item.title);
        setDescr(item.description);
        setPrice(item.price);
        setImage(null);
    };

    const cancelEditing = () => {
        setEditingId(null);
        setTitle("");
        setDescr("");
        setPrice("");
        setImage(null);
    };

    return (
        <div className={styles.AdminNabery}>
            <h1>Неберы бляять</h1>

            <div className={styles.AddAdminNaber}>
                <input type="text" placeholder="Название" value={title} onChange={(e) => setTitle(e.target.value)}
                       className={styles.AdminNaberyInput}/>
                <input type="text" placeholder="Описание" value={descr} onChange={(e) => setDescr(e.target.value)}
                       className={styles.AdminNaberyInput}/>
                <input type="text" placeholder="Цена" value={price} onChange={(e) => setPrice(e.target.value)}
                       className={styles.AdminNaberyInput}/>
                <input type="file" accept="image/*" onChange={handleFileChange} className={styles.AdminNaberyInput}/>
                <div onClick={addOrUpdateItem}>
                    <PinkButton text={loading ? "Загрузка..." : editingId ? "Обновить" : "Добавить"}/>
                </div>
            </div>

            <ul className={styles.AdminNaberyList}>
                {items.map((item) => (
                    <li key={item.id} className={styles.AdminNaberyListItem}>
                        {editingId === item.id ? (
                            <div className={styles.AddAdminNaber}>
                                <input type="text" value={title} placeholder="Название"
                                       onChange={(e) => setTitle(e.target.value)} className={styles.AdminNaberyInput}/>
                                <input type="text" value={descr} placeholder="Описание"
                                       onChange={(e) => setDescr(e.target.value)} className={styles.AdminNaberyInput}/>
                                <input type="text" value={price} placeholder="Цена"
                                       onChange={(e) => setPrice(e.target.value)} className={styles.AdminNaberyInput}/>
                                <input type="file" accept="image/*" onChange={handleFileChange}
                                       className={styles.AdminNaberyInput}/>
                                <div onClick={addOrUpdateItem}>
                                    <PinkButton text="Сохранить"/>
                                </div>
                                <div onClick={cancelEditing}>
                                    <PinkButton text="Отмена"/>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <PopularItem imgPath={item.imgpath} id={item.id} title={item.title}
                                             descr={item.description} price={item.price}/>

                                <div className={styles.AdminNaberyListItemButtons}>
                                    <div onClick={() => startEditing(item)}>
                                        <PinkButton text="Редактировать"/>
                                    </div>
                                    <div onClick={() => deleteItem(item.id)}>
                                        <PinkButton text="Удалить"/>
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminNabery;
