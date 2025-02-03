/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">ADITYA</span>
        <div className="links">
          <a href="https://www.linkedin.com/in/aditya-sagar-pandey-036719224/" target={"blank"} title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/pawn_predator/" target={"blank"} title="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/aditya-sagar-pandey-036719224/" target={"blank"} title="Twitter">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Aditya
        </p>
      </div>
    </footer>
  );
}

export default Footer;
