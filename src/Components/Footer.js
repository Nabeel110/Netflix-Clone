import React from "react";
import "./Footer.css";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return <footer>© Copyright {getYear()} Nabeel Ahmed</footer>;
};

export default Footer;
