import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from './components';
import NavBar from './components/Navbar';
import { Homepage } from './pages/homepage';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <>      
    <NavBar/>
        <Cart/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App