import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Nabery from './components/Nabery/Nabery';
import Action from './components/Action/Action';

function App() {
    return (
        <div className="App">
            <Banner/>
            <Header/>
            <Hero/>
            <Nabery/>
            <Action/>
        </div>
    );
}

export default App;
