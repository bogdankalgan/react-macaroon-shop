import {Routes, Route, BrowserRouter} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Cart from "./components/Cart/Cart";
import Catalog from "./components/Catalog/Catalog";
import ReadyNabery from "./components/Home/ReadyNabery/ReadyNabery";
import {CartProvider} from "./components/CartContext";
import Corporatives from "./components/Corporatives/Corporatives";
import Layer from "./components/Layer/Layer";
import Marriege from "./components/Marriege/Marriege";
import Guarentee from "./components/Guarantee/Guarentee";
import Delivery from "./components/Delivery/Delivery";
import Contacts from "./components/Contacts/Contacts";
import CardPage from "./components/CardPage/CardPage";
import News from "./components/News/News";
import OneNew from "./components/OneNew/OneNew";

// Admin imports
import {AuthProvider} from "./admin/AuthContext";
import ProtectedRoute from "./admin/ProtectedRoute";
import AdminHome from "./admin/AdminHome/AdminHome";
import Users from "./admin/Users/Users";
import Login from "./admin/Login/Login";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="cart" element={<Cart/>}/>
                            <Route path="readyNabery" element={<ReadyNabery/>}/>
                            <Route path="catalog" element={<Catalog/>}/>
                            <Route path="corporatives" element={<Corporatives/>}/>
                            <Route path="layer" element={<Layer/>}/>
                            <Route path="marriege" element={<Marriege/>}/>
                            <Route path="guarantee" element={<Guarentee/>}/>
                            <Route path="delivery" element={<Delivery/>}/>
                            <Route path="contacts" element={<Contacts/>}/>
                            <Route path="readyNabery/:id" element={<CardPage/>}/>
                            <Route path="news" element={<News/>}/>
                            <Route path="news/:id" element={<OneNew/>}/>
                        </Route>

                        <Route path="/login" element={<Login/>}/>


                        <Route path="/admin" element={<ProtectedRoute><AdminHome/></ProtectedRoute>}/>
                        <Route path="/admin/users" element={<ProtectedRoute><Users/></ProtectedRoute>}/>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
