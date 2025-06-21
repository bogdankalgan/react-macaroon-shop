import {useState, useEffect} from "react";
import {dataBase} from "../../components/dataBase";
import PinkButton from "../../components/Corporatives/PinkButton";
import styles from "./AdminCities.module.css";


function AdminCities() {
    const [cities, setCities] = useState([]);
    const [newCityName, setNewCityName] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchCities()
    })

    const fetchCities = async () => {
        const {data, error} = await dataBase.from("cities").select("*").order('id', {ascending: true});

        if (!error) {
            setCities(data);
        } else {
            console.error("Ошибка загрузки городов:", error)
        }
    }

    const addOrUpdateCities = async () => {
        if (!newCityName.trim()) {
            console.warn("Введите название города!");
            return;
        }

        setLoading(true);

        if (editingId) { // ✅ Исправлено название переменной
            const {error} = await dataBase
                .from("cities")
                .update({name: newCityName})
                .eq("id", editingId);

            if (error) {
                console.error("Ошибка обновления города:", error);
            }
        } else {
            const {error} = await dataBase
                .from("cities")
                .insert([{name: newCityName}]);

            if (error) {
                console.error("Ошибка добавления города: ", error);
            }
        }

        setLoading(false);
        setNewCityName("");
        setEditingId(null);
        fetchCities(); // Обновляем список городов
    };


    const deleteCity = async (city) => {
        if (!city || !city.id) {
            console.error("Ошибка: некорректный объект города", city)
            return
        }

        const {error} = await dataBase.from("cities").delete().eq("id", city.id)

        if (!error) {
            setCities(cities.filter((c) => c.id !== city.id))
        } else {
            console.error("Ошибка удаления города:", error)
        }
    }

    const startEdditind = (city) => {
        setEditingId(city.id)
        setNewCityName(city.name)
    }


    const saveEddit = async () => {
        if (!newCityName.trim()) {
            return
        }

        setLoading(true)
        const {error} = await dataBase.from("cities").update({name: newCityName}).eq('id', editingId)

        if (error) {
            console.error("Ошибка обновления города:", error)
        } else {
            fetchCities()
        }

        setEditingId(null)
        setNewCityName('')
        setLoading(false)
    }


    const cancelEdit = () => {
        setEditingId(null)
        setNewCityName("")
    }


    return (
        <div className={styles.AdminCities}>
            <h1>Даунские города, где у этого ебаного магазина филлиалы</h1>

            <div className={styles.AddCities}>
                <input type="text" placeholder='Введи название города' value={newCityName}
                       onChange={(e) => setNewCityName(e.target.value)} className={styles.AdminCitiesInput}/>
                <div onClick={addOrUpdateCities}>
                    <PinkButton text={loading ? "Загрузка.." : editingId ? "Обновить город" : "Добавить город"}/>
                </div>
            </div>

            <ul className={styles.AdminCitiesList}>
                {cities.map((city) => (
                    <li key={city.id} className={styles.AdminCitiesListItem}>
                        {editingId === city.id ? (
                            <div>
                                <input className={styles.AdminCitiesInput} type="text" value={newCityName}
                                       onChange={(e) => setNewCityName(e.target.value)}/>
                            </div>
                        ) : (
                            <span>{city.name}</span>
                        )}

                        <div className={styles.AdminCitiesButtons}>
                            {editingId === city.id ? (
                                <div>
                                    <div onClick={saveEddit}>
                                        <PinkButton text="Сохранить ублюдка"/>
                                    </div>

                                    <div onClick={cancelEdit}>
                                        <PinkButton text="Атменить редактиравание"/>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div onClick={() => startEdditind(city)}>
                                        <PinkButton text="Редактиравать"/>
                                    </div>

                                    <div onClick={() => deleteCity(city)}>
                                        <PinkButton text="Удалить мразь"/>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AdminCities;