import React from "react";

import logo from "../assets/together.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-1 mb-4">
        <div className="w-10">
          <img src={logo} alt="logo.svg" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">Together</h1>
      </div>
      <p className="mb-1">Developed with 💖 by</p>
      <div className="flex flex-col md:flex-row md:gap-8 text-center font-bold">
        <Link to="https://www.linkedin.com/in/paras1729kori/" target="_blank">
          Paras Kori
        </Link>
        <Link
          to="https://www.linkedin.com/in/omkar-singh-chauhan-79848a180/"
          target="_blank"
        >
          Omkar Singh Chauhan
        </Link>
        <Link
          to="https://www.linkedin.com/in/dhir-parmar-925b171a4/"
          target="_blank"
        >
          Dhir Parmar
        </Link>
      </div>
    </div>
  );
};

export default Footer;
