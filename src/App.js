import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import AddCards from './components/AddCards/AddCards';
import CardDisplay from './components/Display/CardDisplay';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="App">
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/addCards" element={<AddCards/>}/>
          <Route path="/showcards" element={<CardDisplay/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
