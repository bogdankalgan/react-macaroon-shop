import Header from "../Home/Header/Header";
import Hero from "./Hero/Hero";
import React from "react";
import Gifts from "./Gifts/Gifts";
import Complete from "./Complete/Complete";
import Sponsors from "./Sponsors/Sponsors";

function Corporatives() {
    return (
        <React.Fragment>
            <Header/>
            <Hero/>
            <Gifts/>
            <Complete/>
            <Sponsors/>
        </React.Fragment>
    )
}

export default Corporatives;