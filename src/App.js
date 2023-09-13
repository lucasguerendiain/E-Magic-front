import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import AddCards from './components/AddCards/AddCards';
import CardDisplay from './components/Display/CardDisplay';
import AdvSearch from './components/AdvancedSearch/AdvSearch';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

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
          <Route path="/advSearch" element={<AdvSearch/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
