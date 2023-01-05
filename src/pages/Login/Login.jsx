import React from "react";
import "./Login.css";
import { SlEnvolope } from "react-icons/sl";
import { SlLock } from "react-icons/sl";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import SmallSpinner from "../../components/Spinner/SmallSpinner/SmallSpinner";

const Login = () => {
  const { signIn, loading, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        authToken(res.user);
        setLoading(false);
        form.reset();
        toast.success("Log In Successful", {
          duration: 3000,
        });
      })
      .catch((err) => {
        toast.error(err.message, {
          duration: 3000,
        });
        console.error(err);
      });
  };

  const authToken = (user) => {
    fetch(`http://localhost:5000/jwt`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("user-token", data.accessToken);
          navigate(from, { replace: true });
        }
      });
  };

  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="box">
      <div className="form-container log-in-container">
        <form onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <small className="toggle-page">
            New in Food Delivery?
            <Link to={"/signup"} className="toggle-button">
              {" "}
              Sigh Up
            </Link>
          </small>
          <div className="form-div">
            <div className="single-input">
              <span>
                <SlEnvolope className="icon" />
              </span>
              <input type="email" name="email" placeholder="Email address" />
            </div>
            <div className="single-input">
              <span>
                <SlLock className="icon" />
              </span>
              {isVisible ? (
                <input type="text" name="password" placeholder="Password" />
              ) : (
                <input type="password" name="password" placeholder="Password" />
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
              <Link>Forgotten password?</Link>
            </small>
          </div>
          <button type="submit" className="login-btn">
            {loading ? <SmallSpinner /> : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
