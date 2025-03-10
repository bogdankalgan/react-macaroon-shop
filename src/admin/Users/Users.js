import {useState, useEffect} from "react";
import {dataBase} from "../../components/dataBase";
import bcryptjs from 'bcryptjs'
import styles from './Users.module.css';
import PinkButton from "../../components/Corporatives/PinkButton";

function Users() {
    const [users, setUsers] = useState([])
    const [newUserName, setNewUsername] = useState("")
    const [newUserPass, setNewUserPass] = useState("")
    const [edditingUserId, setEddinigUserId] = useState(null)
    const [edditedName, setEdditedName] = useState("")
    const [edditedPass, setEdditedPass] = useState("")


    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const {data, error} = await dataBase.from('users').select("*")
        if (!error) {
            setUsers(data)
        } else if (error) {
            console.log('Никаво нет, все сьебались')
        }
    }

    const addUser = async () => {

        if (!newUserName.trim() || !newUserPass.trim()) {
            return;
        }

        try {
            const hashedPassword = await bcryptjs.hash(newUserPass, 10);
            const {error} = await dataBase.from("users").insert([
                {name: newUserName, pass: hashedPassword, role: "user"}
            ]);

            if (error) {
                console.error("❌ Ошибка при добавлении пользователя:", error);
                return;
            }
            ;
            await fetchUsers();
            setNewUsername("");
            setNewUserPass("");

        } catch (err) {
            console.error("❌ Ошибка сервера:", err);
        }
    };


    const deleteUser = async (id) => {
        const {error} = await dataBase.from('users').delete().eq("id", id)
        if (!error) fetchUsers()
    }

    const startEddinig = (id, name) => {
        setEddinigUserId(id)
        setEdditedName(name)
        setNewUserPass("")
    }

    const saveEddit = async () => {
        if (!edditedName.trim()) return

        let updatedData = {name: edditedName}

        if (edditedPass.trim()) {
            updatedData.pass = await bcryptjs.hash(edditedPass, 10)
        }

        const {error} = await dataBase.from('users').update(updatedData).eq("id", edditingUserId)
        if (!error) {
            setEddinigUserId(null)
            fetchUsers()
        }
    }

    return (
        <div className={styles.Users}>
            <h2 className={styles.UsersTitle}>Список долбоебов, у кторых есть доступ к админке</h2>

            <div className={styles.AddUsers}>
                <input type='text' placeholder="Имя нового долбоеба" value={newUserName}
                       onChange={(e) => setNewUsername(e.target.value)} className={styles.UsersInput}/>

                <input type="password" value={newUserPass} placeholder="Пароль для нового ебаната"
                       onChange={(e) => setNewUserPass(e.target.value)} className={styles.UsersInput}/>
                <div onClick={addUser}>
                    <PinkButton text={"Добавить нового ебаната"}/>
                </div>
            </div>

            <ul className={styles.UsersList}>
                {users.map((user) => (
                    <li key={user.id}>
                        {edditingUserId === user.id ? (
                            <div>
                                <input type='text' value={edditedName}
                                       onChange={(e) => setEdditedName(e.target.value)} className={styles.UsersInput}/>

                                <input type='password' placeholder="Новый блядский пароль (хош делай хош нет)"
                                       value={edditedPass} onChange={(e) => setEdditedPass(e.target.value)}
                                       className={styles.UsersInput}/>

                                <div onClick={saveEddit} className={styles.UserButton}>
                                    <PinkButton text="Сахранить"/>
                                </div>

                                <div onClick={() => setEddinigUserId(null)} className={styles.UserButton}>
                                    <PinkButton text="Атмена"/>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className={styles.UsersName}>
                                    <p className={styles.User}>
                                        {user.name}
                                    </p>

                                    <p className={styles.User}>({user.role})</p>
                                </div>

                                <div className={styles.UserButtons}>
                                    <div onClick={() => startEddinig(user.id, user.name)} className={styles.UserButton}>
                                        <PinkButton text="Исправить этого долбаеба"/>
                                    </div>

                                    <div onClick={() => deleteUser(user.id)} className={styles.UserButton}>
                                        <PinkButton text="Удалить долбоеба"/>
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

export default Users;

