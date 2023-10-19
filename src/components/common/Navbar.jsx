import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import Gdsclogo from "../../assets/Gdsclogo.png"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Gdsclogo} alt="" />
      </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;