import {Routes, Route, BrowserRouter} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Cart from "./Cart";
import Catalog from "./components/Catalog/Catalog";
import ReadyNabery from "./components/ReadyNabery/ReadyNabery";
import {CartProvider} from "./components/CartContext";
import Corporatives from "./components/Corporatives/Corporatives";

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
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
