import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { LoginPopup } from './components/LoginPopup/LoginPopup';
import Navbar from './components/Navbar';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import ScrollToTop from './Helpers/ScrollToTop';
import FoodDetails from './components/FoodDetails/FoodDetails';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';

const App = () => {
  //display popup for login
  const [showLogin,setShowLogin]=useState(false);

  return (
    <>
    <Navbar setShowLogin={setShowLogin}/>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path ="/order" element={<PlaceOrder/>}/>
      </Routes>
      
    </div>
    <Footer/>
    </>
  )
}

export default App