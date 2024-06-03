
import './App.css'
// import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop';
// import Product from './Components/ProductP';
import Cart from './Pages/Cart';
import ProductP from './Components/ProductP';
import LandingPage from './Components/Navbar/LandingPage';

function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/ProductP" element={<ProductP />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
    
    </div>
      
  
);
}

  


export default App
