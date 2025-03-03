import {useState, useEffect} from "react";
import {dataBase} from "../../components/dataBase";
import bcryptjs from 'bcryptjs'
import styles from './Users.module.css';

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
            throw new Error
            console.log('Никаво нет, все сьебались')
        }
    }

    const addUser = async () => {
        if (!newUserName.trim() || !newUserPass.trim()) return

        const heshedPassword = await bcryptjs.hash(newUserPass, 10)

        const {error} = await dataBase.from('users').insert([
            {name: newUserName, pass: heshedPassword, role: "user"}
        ])

        if (!error) {
            setNewUsername("")
            setNewUserPass("")
            fetchUsers()
        }
    }

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
    }

    return (
        <div className={styles.Users}>
            <h2>Список долбоебов, у кторых есть доступ к админке</h2>
        </div>
    );
}

export default Users;

