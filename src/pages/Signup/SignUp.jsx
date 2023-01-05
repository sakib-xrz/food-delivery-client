import React from "react";
import "./SignUp.css";
import { AiOutlineUser } from "react-icons/ai";
import { SlEnvolope } from "react-icons/sl";
import { SlLock } from "react-icons/sl";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  };

  const handlePassword = (e) => {
    if (!/(?=.*[A-Z])/.test(e.target.value)) {
      setError("Password should contain at least one upper case");
      return;
    } else {
      setError("");
    }
    if (!/(?=.*[a-z])/.test(e.target.value)) {
      setError("Password should contain at least one lower case");
      return;
    } else {
      setError("");
    }
    if (!/(?=.*?[0-9])/.test(e.target.value)) {
      setError("Password should contain at least one digit");
      return;
    } else {
      setError("");
    }
    if (!/(?=.*?[!@#$&*~])/.test(e.target.value)) {
      setError("Password should contain at least one Special character");
      return;
    } else {
      setError("");
    }
    if (!/.{8,}/.test(e.target.value)) {
      setError("Password Must be at least 8 characters in length");
      return;
    } else {
      setError("");
    }
    setError("");
  };

  return (
    <div className="box">
      <div className="form-container log-in-container">
        <form onSubmit={handleSubmit}>
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
              <input type="text" name="name" placeholder="Your name" required />
            </div>
            <div className="single-input">
              <span>
                <SlEnvolope className="icon" />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
              />
            </div>
            <div className="single-input">
              <span>
                <SlLock className="icon" />
              </span>
              {isVisible ? (
                <input
                  onChange={handlePassword}
                  type="text"
                  name="password"
                  placeholder="Password"
                  required
                />
              ) : (
                <input
                  onChange={handlePassword}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
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
          <small className="error">{error}</small>
          {error ? (
            <button type="submit" className="login-btn-disabled" disabled>
              Sign Up
            </button>
          ) : (
            <button type="submit" className="login-btn">
              Sign Up
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
