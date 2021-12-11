import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Casa</li>
        </Link>
      </ul>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
