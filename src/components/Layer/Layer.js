import Header from "../Home/Header/Header";
import Breadcrumbs from "../BreadCrumbs";
import Hero from "./Hero/Hero";
import Offer from "./Offer/Offer";
import Calculation from "./Calculation/Calculation";
import Recomended from "./Recomended/Recomended";
import LayerSponsors from "../Layer/Sponsors/Sponsors";

function Layer() {
    return (
        <>
            <Header/>
            <Breadcrumbs/>
            <Hero/>
            <Offer/>
            <Calculation/>
            <Recomended/>
            <LayerSponsors/>
        </>
    )
}

export default Layer;