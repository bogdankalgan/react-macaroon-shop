import {useState, useEffect} from "react";
import {dataBase, uploadImageToSupabase} from "../../components/dataBase";
import PinkButton from "../../components/Corporatives/PinkButton";
import NewsItem from "../../components/Home/News/NewsItem";
import styles from "./AmdminNews.module.css";

function AdminNews() {
    const [news, setNews] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [newDescr, setNewDescr] = useState("");
    const [newImg, setNewImg] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        const {data, error} = await dataBase.from("news").select("*").order("date", {ascending: false});

        if (!error) {
            setNews(data);
        } else {
            console.error("Ошибка загрузки новостей:", error);
        }
    };

    const handleFileChange = (e) => {
        setNewImg(e.target.files[0]);
    };

    const addOrUpdateNews = async () => {
        if (!newTitle.trim() || !newDescr.trim()) {
            return;
        }

        setLoading(true);

        let imgPath = null;
        if (newImg) {
            imgPath = await uploadImageToSupabase(newImg);
            if (!imgPath) {
                console.error("Ошибка загрузки изображения.");
                setLoading(false);
                return;
            }
        }

        if (editingId) {
            const updateData = {title: newTitle, description: newDescr};
            if (imgPath) updateData.imgpath = imgPath;

            const {error} = await dataBase.from("news").update(updateData).eq("id", editingId);

            if (error) console.error("Ошибка обновления новости:", error);
        } else {
            const newsId = Math.floor(Math.random() * 1000000);
            const {error} = await dataBase.from("news").insert([
                {
                    id: newsId,
                    imgpath: imgPath || "",
                    date: new Date().toISOString(),
                    title: newTitle,
                    description: newDescr,
                },
            ]);

            if (error) console.error("Ошибка добавления новости:", error);
        }

        setLoading(false);
        setNewTitle("");
        setNewDescr("");
        setNewImg(null);
        setEditingId(null);
        fetchNews();
    };

    const deleteNews = async (id) => {
        const {error} = await dataBase.from("news").delete().eq("id", id);

        if (!error) {
            setNews(news.filter((item) => item.id !== id));
        } else {
            console.error("Ошибка удаления новости:", error);
        }
    };

    const startEditing = (newsItem) => {
        setEditingId(newsItem.id);
        setNewTitle(newsItem.title);
        setNewDescr(newsItem.description);
        setNewImg(null);
    };

    const cancelEditing = () => {
        setEditingId(null);
        setNewTitle("");
        setNewDescr("");
        setNewImg(null);
    };

    return (
        <div className={styles.News}>
            <h2 className={styles.NewsTitle}>Новости</h2>

            <div className={styles.AddNews}>
                <input
                    type="text"
                    placeholder="Заголовок"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Описание"
                    value={newDescr}
                    onChange={(e) => setNewDescr(e.target.value)}
                />
                <input type="file" accept="image/*" data-testid="file-input" onChange={handleFileChange} />
                <div onClick={addOrUpdateNews}>
                    <PinkButton
                        text={loading ? "Загрузка..." : editingId ? "Обновить новость" : "Добавить новость"}
                        disabled={loading}
                    />
                </div>
            </div>

            <ul className={styles.NewsList}>
                {news.map((newsItem) => (
                    <li key={newsItem.id} className={styles.NewsListItem}>
                        {editingId === newsItem.id ? (
                            <div className={styles.AddNews}>
                                <input
                                    type="text"
                                    placeholder="Заголовок"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Описание"
                                    value={newDescr}
                                    onChange={(e) => setNewDescr(e.target.value)}
                                />
                                <input type="file" accept="image/*" onChange={handleFileChange}/>
                                <div style={{display: "flex", gap: "10px"}}>
                                    <div onClick={addOrUpdateNews}>
                                        <PinkButton text="Сохранить"/>
                                    </div>
                                    <div onClick={cancelEditing}>
                                        <PinkButton text="Отмена"/>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <NewsItem
                                    title={newsItem.title}
                                    descr={newsItem.description}
                                    id={newsItem.id}
                                    imgPath={newsItem.imgpath}
                                    date={new Date(newsItem.date).toLocaleDateString('ru-RU', {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric"
                                    })}
                                />
                                <div style={{display: "flex", gap: "10px"}}>
                                    <div onClick={() => startEditing(newsItem)}>
                                        <PinkButton text="Редактировать"/>
                                    </div>
                                    <div onClick={() => deleteNews(newsItem.id)}>
                                        <PinkButton text="Удалить новость"/>
                                    </div>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminNews;
