import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <FaFacebookF className="social-icon" />
        <FaTwitter className="social-icon" />
        <FaInstagram className="social-icon" />
      </div>
      <div className="footer-content">
        <p className="footer-description">
          Restaurant Food and Takeaway Delivered. Find restaurants or foods
          delivering right now, near you.
        </p>
        <small className="copyright-text">
          Copyright &copy; 2017 All Rights Reserved by <br/>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://sakib-developer.netlify.app/"
          >
            Md Sakibul Islam
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
