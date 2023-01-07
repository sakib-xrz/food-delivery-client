import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <div className="error-main">
      <div className="error-container">
        <div className="error-div">
          <h2>404</h2>
          <p className="not-found">Sorry, we couldn't find this page.</p>
          <p className="message">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link to={"/"}>
            <button className="back-homepage">Back to Homepage</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
