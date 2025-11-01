import React, { useState, useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import "./Navbar/Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount } = useContext(StoreContext);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Orange<span>Foooods</span></span>
        </Link>
      </div>

      <div className="navbar-search">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search for dishes or restaurants..." />
      </div>


      {/* Right Section */}
      <div className="navbar-right">
        <div className={`navbar-center ${isMobileMenuOpen ? "open" : ""}`}>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About Us
          </NavLink>
          <NavLink to="/privacypolicy" className={({ isActive }) => (isActive ? "active" : "")}>
            Privacy Policy
          </NavLink>
          <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact</a>
        </div>
        <Link to="/cart" className="navbar-icon cart-icon">
          <FiShoppingCart size={22} />
          {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
        </Link>

        <button className="sign-btn" onClick={() => setShowLogin(true)}>
          <FiUser size={18} />
          <span>Sign In</span>
        </button>

        {/* Mobile Toggle */}
        <div className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
