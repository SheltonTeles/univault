import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logoo-removebg-preview.png";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="UniVault Logo" />
      </div>


      {/* Desktop Navigation */}
      <div className="nav-links">

        <NavLink to="/">Home</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/upload">Upload</NavLink>
        <NavLink to="/about">About</NavLink>

      </div>


      {/* Desktop Auth */}
      <div className="nav-auth">

        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>

        <NavLink to="/register" className="register-btn">
          Register
        </NavLink>

      </div>


      {/* Mobile Button */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </button>


      {/* Mobile Drawer */}

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <button
          className="close-button"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>


        <NavLink 
          to="/" 
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>


        <NavLink 
          to="/resources"
          onClick={() => setMenuOpen(false)}
        >
          Resources
        </NavLink>


        <NavLink 
          to="/upload"
          onClick={() => setMenuOpen(false)}
        >
          Upload
        </NavLink>


        <NavLink 
          to="/about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>


        <div className="mobile-divider"></div>


        <NavLink 
          to="/login"
          className="login-btn"
          onClick={() => setMenuOpen(false)}
        >
          Login
        </NavLink>


        <NavLink 
          to="/register"
          className="register-btn"
          onClick={() => setMenuOpen(false)}
        >
          Register
        </NavLink>

      </div>


      {/* Background overlay */}

      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

    </nav>
  );
}

export default Navbar;