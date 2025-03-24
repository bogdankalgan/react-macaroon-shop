import {Outlet, useLocation} from "react-router-dom";
import Footer from "./components/Home/Footer/Footer";

function Layout() {
    const location = useLocation();
    const hideFooterRoutes = ["/create-your-set/summary"];

    const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

    return (
        <>
            <Outlet/>
            {!shouldHideFooter && <Footer/>}
        </>
    );
}

export default Layout;