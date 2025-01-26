import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Nabery from './components/Nabery/Nabery';
import Action from './components/Action/Action';
import Holidays from "./components/Holidays/Holidays";
import Popular from './components/Popular/Popular';
import News from './components/News/News';
import Care from './components/Care/Care';

function App() {
    return (
        <div className="App">
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

export default App;
