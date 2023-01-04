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
          <ul className="nav-links">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link-active" : "nav-link"
              }
              to={"/home"}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link-active" : "nav-link"
              }
              to={"/menu"}
            >
              <li>Menu</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link-active" : "nav-link"
              }
              to={"/orders"}
            >
              <li>My Orders</li>
            </NavLink>
            <Link className="login">Log In</Link>
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
          {isOpen && (
            <ul className="nav-links-mobile">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link-mobile-active" : "nav-link-mobile"
                }
                to={"/home"}
              >
                <li onClick={() => setIsOpen(false)}>Home</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link-mobile-active" : "nav-link-mobile"
                }
                to={"/menu"}
              >
                <li onClick={() => setIsOpen(false)}>Menu</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link-mobile-active" : "nav-link-mobile"
                }
                to={"/orders"}
              >
                <li onClick={() => setIsOpen(false)}>My Orders</li>
              </NavLink>
              <Link onClick={() => setIsOpen(false)} className="login-mobile">
                Log In
              </Link>
            </ul>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
