import Header from './components/Header'
import Home from "./components/Home"
import { Route, Routes } from 'react-router-dom'
import './App.css';
import HomeBS from './components/HomeBS';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<HomeBS />} />
      </Routes>
    </div>
  );
}

export default App;
