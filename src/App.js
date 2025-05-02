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
import BuildYourSet from "./components/BuildYourSet/BuildYourSet";
import StripeProvider from ".//StripeProvider";
import NotFound from "./components/NotFound/NotFound";
import CreateDesign from "./components/CreateDesing/CreateDesign";
import ChooseQuantity from "./components/CreateDesignQuantity/ChooseQuantity";
import {CreateDesignProvider} from "./components/DesignContext";
import ChooseImg from "./components/ChooseImg/ChooseImg";
import ChooseMore from "./components/ChooseMore/ChooseMore";

// Admin imports
import {AuthProvider} from "./admin/AuthContext";
import ProtectedRoute from "./admin/ProtectedRoute";
import AdminHome from "./admin/AdminHome/AdminHome";
import Users from "./admin/Users/Users";
import Login from "./admin/Login/Login";
import AdminNews from "./admin/AdminNews/AdminNews";
import AdminNabery from "./admin/AdminNabery/AdminNabery";
import AdminCities from "./admin/AdminCities/AdminCities";

function App() {
    return (
        <StripeProvider>
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

                                {/* 🔹 Объединённый маршрут для сборки набора */}
                                <Route path="create-your-set/*" element={<BuildYourSet/>}/>
                            </Route>


                            <Route path="create-design" element={
                                <CreateDesignProvider>
                                    <CreateDesign/>
                                </CreateDesignProvider>
                            }>
                                <Route path="choose-quantity" element={<ChooseQuantity/>}/>
                                <Route path="choose-img" element={<ChooseImg/>}/>
                                <Route path="choose-more" element={<ChooseMore/>}/>
                            </Route>

                            <Route path="/login" element={<Login/>}/>

                            {/* Админка */}
                            <Route path="/admin" element={<ProtectedRoute><AdminHome/></ProtectedRoute>}/>
                            <Route path="/admin/users" element={<ProtectedRoute><Users/></ProtectedRoute>}/>
                            <Route path="/admin/news" element={<ProtectedRoute><AdminNews/></ProtectedRoute>}/>
                            <Route path="/admin/nabery" element={<ProtectedRoute><AdminNabery/></ProtectedRoute>}/>
                            <Route path="/admin/cities" element={<ProtectedRoute><AdminCities/></ProtectedRoute>}/>

                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </AuthProvider>
                </BrowserRouter>
            </CartProvider>
        </StripeProvider>
    );
}

export default App;