import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/nav-logo.svg";

import kkk from "../../assets/kkk.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" className="nav-logo" />
      <img src={kkk} alt="" className="nav-profile" />
    </div>
  );
};

export default Navbar;
