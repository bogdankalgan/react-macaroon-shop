import styles from "./Contacts.module.css";
import Header from "../Home/Header/Header"
import Breadcrumbs from "../BreadCrumbs"
import Hero from "./Hero/Hero"

function Contacts() {
    return (
        <div className={styles.Contacts}>
            <Header />
            <Breadcrumbs />
            <Hero />
        </div>
    )
}

export default Contacts;