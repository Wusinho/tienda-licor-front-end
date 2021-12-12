import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ cartItems }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link position-relative">
                Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItems.length > 0 && cartItems.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
