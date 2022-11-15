import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import BeerList from './components/BeerList/BeerList';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/beers" element={ <BeerList /> } />
        <Route path="/beers/:beerId" element={ } />
      </Routes>
    </div>
  );
}

export default App;
