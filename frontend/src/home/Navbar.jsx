import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar" className="navbar">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="image-menubar">
              <Link className="image" to="/"></Link>
            </div>
          </div>
          <div className="col-8">
            {" "}
            <h1>Its a navbar</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
