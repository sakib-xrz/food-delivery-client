import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { SlEnvolope } from "react-icons/sl";
import { SlLock } from "react-icons/sl";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
      const [isVisible, setIsVisible] = useState(false);

    return (
      <div className="box">
        <div className="form-container log-in-container">
          <form>
            <h1>Sign Up</h1>
            <small className="toggle-page">
              Already have an account?
              <Link to={"/login"} className="toggle-button">
                {" "}
                Log In
              </Link>
            </small>
            <div className="form-div">
              <div className="single-input">
                <span>
                  <AiOutlineUser className="icon" />
                </span>
                <input type="text" placeholder="Your name" />
              </div>
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
            </div>
            <button className="login-btn">Sign Up</button>
          </form>
        </div>
      </div>
    );
};

export default SignUp;