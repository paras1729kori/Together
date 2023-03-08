import React from "react";
import { Link } from "react-router-dom";

import CampaignCard from "./CampaignCard";

const CampaignSection = () => {
  let campaigns = [
    {
      unique_id: 1,
      campaignTitle: "Title 1",
      campaignDesc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptatum quae culpa exercitationem illum, placeat ullam facere, iure quo ipsam deleniti vero nihil similique eius?",
      campaignToAddress: "0xJHSAD989asdaSADAx7",
      campaignRaisedAmt: 3.12,
      campaignTarget: 11.99,
    },
    {
      unique_id: 2,
      campaignTitle: "Title 2",
      campaignDesc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptatum quae culpa exercitationem illum, placeat ullam facere, iure quo ipsam deleniti vero nihil similique eius?",
      campaignToAddress: "0xJHSAD989asdaSADAx7",
      campaignRaisedAmt: 3.12,
      campaignTarget: 11.99,
    },
    {
      unique_id: 3,
      campaignTitle: "Title 3",
      campaignDesc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptatum quae culpa exercitationem illum, placeat ullam facere, iure quo ipsam deleniti vero nihil similique eius?",
      campaignToAddress: "0xJHSAD989asdaSADAx7",
      campaignRaisedAmt: 3.12,
      campaignTarget: 11.99,
    },
    {
      unique_id: 4,
      campaignTitle: "Title 3",
      campaignDesc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptatum quae culpa exercitationem illum, placeat ullam facere, iure quo ipsam deleniti vero nihil similique eius?",
      campaignToAddress: "0xJHSAD989asdaSADAx7",
      campaignRaisedAmt: 3.12,
      campaignTarget: 11.99,
    },
  ];

  return (
    <div className="mb-20">
      <h1 className="text-xl text-center md:text-left md:text-2xl font-bold mb-3">
        Open Campaigns
      </h1>
      <div className="flex flex-col md:grid grid-cols-3 gap-4 mb-20">
        {campaigns.map((item) => {
          return <CampaignCard key={item.unique_id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CampaignSection;
