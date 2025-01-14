import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Nabery from './components/Nabery/Nabery';

function App() {
    return (
        <div className="App">
            <Banner/>
            <Header/>
            <Hero/>
            <Nabery/>
        </div>
    );
}

export default App;
