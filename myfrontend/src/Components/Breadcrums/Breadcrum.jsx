// Breadcrum.js
import React from "react";
import "./Breadcrum.css"; // Corrected class name in the import statement
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum">
      {" "}
      {/* Corrected class name */}
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
