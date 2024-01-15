import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of goods and services over the internet. These
          websites provide a virtual marketplace where businesses and consumers
          can interact, browse products or services, make purchases, and conduct
          financial transactions securely. Here is a breakdown of key components
          and features commonly found on e-commerce websites
        </p>
        <p>
          An effective e-commerce website combines these features to create a
          user-friendly, secure, and efficient online shopping experience,
          encouraging customer satisfaction and loyalty.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
