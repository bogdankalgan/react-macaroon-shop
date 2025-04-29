import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import {Link} from "react-router-dom";
import styles from "./NotFound.module.css"

function NotFound() {
    return (
        <div className={styles.NotFound}>
            <Header/>

            <div className={styles.NotFoundContainer}>
            <h1>Извините, страница не найдена</h1>


            <p className={styles.NotFoundNumber}>404</p>

            <img src='../img/404/404.png' alt='404'/>

            <button className={styles.NotFoundButton}>
                <Link to='/'>Назад</Link>
            </button>
            </div>

            <Footer/>
        </div>
    );
}

export default NotFound;