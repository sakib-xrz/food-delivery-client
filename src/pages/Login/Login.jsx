import React from "react";
import "./Login.css";
import { SlEnvolope } from "react-icons/sl";
import { SlLock } from "react-icons/sl";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="container">
      <div className="form-container log-in-container">
        <form>
          <h1>Log In</h1>
          <small className="toggle-page">
            New in Food Delivery?
            <Link to={"/signup"} className="toggle-button"> Sigh Up</Link>
          </small>
          <div className="form-div">
            <div className="single-input">
              <span>
                <SlEnvolope className="icon" />
              </span>
              <input type="email" placeholder="Email address" />
            </div>
            <div className="single-input">
              <span>
                <SlLock className="icon" />
              </span>
              {isVisible ? (
                <input type="text" placeholder="Password" />
              ) : (
                <input type="password" placeholder="Password" />
              )}
              {!isVisible ? (
                <span>
                  <AiOutlineEye
                    onClick={() => setIsVisible(true)}
                    className="show-hide"
                  />
                </span>
              ) : (
                <span>
                  <AiOutlineEyeInvisible
                    onClick={() => setIsVisible(false)}
                    className="show-hide"
                  />
                </span>
              )}
            </div>
            <small className="forgot-password">
              <a href="#">Forgotten password?</a>
            </small>
          </div>
          <button className="login-btn">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
