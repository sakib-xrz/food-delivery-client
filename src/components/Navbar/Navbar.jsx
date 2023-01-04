import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="nav">
        <Link to={"/"} className="logo">
          <img src={Logo} alt="" />
        </Link>
        <div className="menu-items">
          <ul className={isOpen ? "nav-links-mobile" : "nav-links"}>
            <NavLink to={"/home"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/menu"}>
              <li>Menu</li>
            </NavLink>
            <NavLink to={"/orders"}>
              <li>My Orders</li>
            </NavLink>
            <button className="login">Log In</button>
          </ul>
        </div>
        <button className="mobile-menu">
          {isOpen ? (
            <VscChromeClose
              onClick={() => setIsOpen(false)}
              className="bar-close"
            />
          ) : (
            <VscThreeBars
              onClick={() => setIsOpen(true)}
              className="bar-open"
            />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
