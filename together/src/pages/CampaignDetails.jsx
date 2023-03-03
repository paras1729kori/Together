import React from "react";
import { Link } from "react-router-dom";

const CampaignDetails = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h1 className="text-xl text-center md:text-left md:text-2xl font-bold mb-3">
          {{ id }}
        </h1>
        <p className="mb-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia vero
          sit laborum? Corporis, voluptatum ad? Veritatis voluptatum numquam
          provident qui sapiente laboriosam quia dolore odit!
        </p>
        <Link to="#">View on Test Network</Link>
        <div></div>
      </div>
      <div>asdjlaskdj</div>
    </div>
  );
};

export default CampaignDetails;
