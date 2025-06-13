import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  
  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} alt="Logo" className="logo" /></Link>

      <ul className='navbar-menu'>
        
       <Link to="/"><li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</li></Link> 
       <Link to="/menu"><li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</li></Link> 
        <Link to="/mobile-app"><li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</li></Link>
        <Link to="/contact-us"><li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</li></Link>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />

        <div className='navbar-search-icon'>
          <Link to="/cart"><img src={assets.basket_icon} alt="Basket" /></Link>
          <div className='dot'></div>
        </div>

        <div className="navbar-button">
        <button onClick={() => setShowLogin(true)} className='btn1'>Sign In</button>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
