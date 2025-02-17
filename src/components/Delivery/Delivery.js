import Header from "../Home/Header/Header";
import Breadcrumbs from "../BreadCrumbs";
import Hero from './Hero/Hero'
import Payment from "./Payment/Payment";
import Map from './Map/Map'

function Delivery() {
    return (
        <div>
            <Header/>
            <Breadcrumbs/>
            <Hero/>
            <Payment/>
            <Map/>
        </div>
    )
}

export default Delivery