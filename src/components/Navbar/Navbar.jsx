import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <Link to={"/"} className="logo">
          <img src={Logo} alt="" />
        </Link>
        <div className="menu-items">
          <ul className="nav-links">
            <NavLink to={"/home"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/menu"}>
              <li>Menu</li>
            </NavLink>
            <NavLink to={"/orders"}>
              <li>My Orders</li>
            </NavLink>
          </ul>
          <button className="login">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
