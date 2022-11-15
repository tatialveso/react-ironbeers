import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import BeerList from './components/Beer/BeerList/BeerList';
import BeerDetails from './components/Beer/BeerDetails/BeerDetails';
import BeerRandom from './components/Beer/BeerRandom/BeerRandom';
import NewBeer from './components/Beer/NewBeer/NewBeer';

function App() {
  const [beer, setBeer] = useState({})
  const apiURL = "https://ih-beers-api2.herokuapp.com/beers"

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/beers" element={ <BeerList apiURL={ apiURL } /> } />
        <Route path="/beers/:id" element={ <BeerDetails apiURL={ apiURL } beer={ beer } setBeer={ setBeer } /> } />
        <Route path="/random-beer" element={ <BeerRandom apiURL={ apiURL } beer={ beer } setBeer={ setBeer } /> } />
        <Route path="/new-beer" element={ <NewBeer apiURL={ apiURL } />} />
      </Routes>
    </div>
  );
}

export default App;
