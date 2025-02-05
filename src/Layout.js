import {Outlet} from "react-router-dom";
import Footer from "./components/Home/Footer/Footer";

function Layout() {
    return (
        <>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default Layout;
