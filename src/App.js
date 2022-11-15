import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import BeerList from './components/Beer/BeerList/BeerList';
import BeerDetails from './components/Beer/BeerDetails/BeerDetails';

function App() {
  const apiURL = "https://ih-beers-api2.herokuapp.com/beers"

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/beers" element={ <BeerList apiURL={ apiURL } /> } />
        <Route path="/beers/:id" element={ <BeerDetails apiURL={ apiURL } /> } />
      </Routes>
    </div>
  );
}

export default App;
