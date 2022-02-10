import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BsListUl } from "react-icons/bs";

const Navbar = () => {
  return (
    <div id="navbar" className="navbar">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="image-menubar">
              <Link className="image" to="/">
                <img
                  src="http://localhost:3000/designImage/Arafat-logo.png"
                  alt="logo"
                />
              </Link>
              <label className="menu-icon" htmlFor="toggle">
                <BsListUl />
              </label>
            </div>
          </div>
          <div className="col-8">
            <ul className="link-list">
              <li className="link-item">
                <Link to="/about">About</Link>
              </li>
              <li className="link-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="link-item">
                <Link to="/policy">Policy</Link>
              </li>
              <li className="link-item">
                <Link to="/about"></Link>
              </li>
              <li className="link-item">
                <Link to="/about">
                  <span>
                    <FaFacebookSquare />
                  </span>
                </Link>
              </li>
              <li className="link-item">
                <Link to="/about">
                  <span>
                    <FaTwitterSquare />
                  </span>
                </Link>
              </li>
              <li className="link-item">
                <Link to="/about">
                  {" "}
                  <span>
                    <FaGithubSquare />
                  </span>
                </Link>
              </li>
              <li className="link-item">
                <Link to="/about">
                  {" "}
                  <span>
                    <ImLinkedin />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
