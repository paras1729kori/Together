import React, { useContext } from "react";
import { Link } from "react-router-dom";

import hero from "../assets/hero.png";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse justify-center items-center md:flex-row gap-4 mb-20">
      <div className="flex flex-col justify-center items-center md:items-start">
        <p className="w-full text-md text-center md:text-2xl md:text-left lg:text-3xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
          voluptatum quae culpa exercitationem illum, placeat ullam facere, iure
          quo ipsam deleniti vero nihil similique eius?
        </p>
        <Link to="/create-campaign" className="mt-4 md:mt-6">
          <Button name="Create Campaign" />
        </Link>
      </div>
      <div className="w-72 md:w-full">
        <img src={hero} alt="hero.png" />
      </div>
    </div>
  );
};

export default Hero;
