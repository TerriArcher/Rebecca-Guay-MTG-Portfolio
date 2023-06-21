/* eslint-disable react/react-in-jsx-scope */
import Header from './components_NEW/header/header';
import Home from './components_NEW/homepage/homepage';
import CardsLanding from './components_NEW/cards/cardsLanding';
import { Route, Routes } from 'react-router-dom'
import './App.css';
// import HomeBS from './components/HomeBS';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<CardsLanding />}/>
      </Routes>
    </div>
  );
}

export default App;
