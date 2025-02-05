import Banner from './components/Home/Banner/Banner';
import Header from './components/Home/Header/Header';
import Hero from './components/Home/Hero/Hero';
import Nabery from './components/Home/Nabery/Nabery';
import Action from './components/Home/Action/Action';
import Holidays from "./components/Home/Holidays/Holidays";
import Popular from './components/Home/Popular/Popular';
import News from './components/Home/News/News';
import Care from './components/Home/Care/Care';


function Home() {
    return (
        <div className="Home">
            <Banner/>
            <Header/>
            <Hero/>
            <Nabery/>
            <Action/>
            <Holidays/>
            <Popular/>
            <News/>
            <Care/>
        </div>
    );
}

export default Home;
