import {Routes, Route, BrowserRouter} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Cart from "./Cart";
import Catalog from "./components/Catalog/Catalog";
import ReadyNabery from "./components/Home/ReadyNabery/ReadyNabery";
import {CartProvider} from "./components/CartContext";
import Corporatives from "./components/Corporatives/Corporatives";
import Layer from "./components/Layer/Layer";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="cart" element={<Cart/>}/>
                        <Route path="readyNabery" element={<ReadyNabery/>}/>
                        <Route path="catalog" element={<Catalog/>}/>
                        <Route path="corporatives" element={<Corporatives/>}/>
                        <Route path="layer" element={<Layer/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
