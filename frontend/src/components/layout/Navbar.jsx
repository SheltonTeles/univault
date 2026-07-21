import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/logonobg.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-left">
        <img src={logo} alt="UniVault Logo" className="logo" />
      </div>

      <div className="nav-center">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/resources">Resources</NavLink></li>
          <li><NavLink to="/upload">Upload</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>

      <div className="nav-right">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>

    </nav>
  );
}

export default Navbar;