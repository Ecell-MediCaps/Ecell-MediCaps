import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/e_summit.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={logo} alt="logo" className="navbar-img" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/esummit" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                  E-summit'23
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/archives" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                  Archives
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/ourteam" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                  Our Team
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
