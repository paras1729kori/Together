import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CampaignCard from "./CampaignCard";

const CampaignSection = () => {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        setCampaigns(JSON.parse(data));
      });
  }, []);

  return (
    <div className="mb-20">
      <h1 className="text-xl text-center md:text-left md:text-2xl font-bold mb-3">
        Open Campaigns
      </h1>
      <div className="flex flex-col md:grid grid-cols-3 gap-4 mb-20">
        {campaigns.map((item) => {
          return <CampaignCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CampaignSection;
