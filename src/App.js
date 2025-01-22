import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Nabery from './components/Nabery/Nabery';
import Action from './components/Action/Action';
import Holidays from "./components/Holidays/Holidays";
import Popular from './components/Popular/Popular';

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
        </div>
    );
}

export default App;
