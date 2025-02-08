import Header from "../Home/Header/Header";
import Hero from "./Hero/Hero";
import React from "react";
import Gifts from "./Gifts/Gifts";
import Complete from "./Gifts/Complete";

function Corporatives() {
    return (
        <React.Fragment>
            <Header/>
            <Hero/>
            <Gifts/>
            <Complete/>
        </React.Fragment>
    )
}

export default Corporatives;