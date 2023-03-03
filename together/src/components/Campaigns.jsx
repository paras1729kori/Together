import React from "react";
import { Link } from "react-router-dom";

import CampaignCard from "./CampaignCard";

const CampaignSection = () => {
  let campaigns = [
    {
      id: 1,
      campaignTitle: "Title 1",
      campaignDesc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptatum quae culpa exercitationem illum, placeat ullam facere, iure quo ipsam deleniti vero nihil similique eius?",
      campaignToAddress: "0xJHSAD989asdaSADAx7",
      campaignRaisedAmt: 3.12,
      campaignTarget: 11.99,
    },
    {
      id: 2,
      campaignTitle: "Title 2",
      campaignDesc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptatum quae culpa exercitationem illum, placeat ullam facere, iure quo ipsam deleniti vero nihil similique eius?",
      campaignToAddress: "0xJHSAD989asdaSADAx7",
      campaignRaisedAmt: 3.12,
      campaignTarget: 11.99,
    },
    {
      id: 3,
      campaignTitle: "Title 3",
      campaignDesc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptatum quae culpa exercitationem illum, placeat ullam facere, iure quo ipsam deleniti vero nihil similique eius?",
      campaignToAddress: "0xJHSAD989asdaSADAx7",
      campaignRaisedAmt: 3.12,
      campaignTarget: 11.99,
    },
    {
      id: 4,
      campaignTitle: "Title 4",
      campaignDesc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptatum quae culpa exercitationem illum, placeat ullam facere, iure quo ipsam deleniti vero nihil similique eius?",
      campaignToAddress: "0xJHSAD989asdaSADAx7",
      campaignRaisedAmt: 3.12,
      campaignTarget: 11.99,
    },
    {
      id: 5,
      campaignTitle: "Title 5",
      campaignDesc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptatum quae culpa exercitationem illum, placeat ullam facere, iure quo ipsam deleniti vero nihil similique eius?",
      campaignToAddress: "0xJHSAD989asdaSADAx7",
      campaignRaisedAmt: 3.12,
      campaignTarget: 11.99,
    },
    {
      id: 6,
      campaignTitle: "Title 6",
      campaignDesc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptatum quae culpa exercitationem illum, placeat ullam facere, iure quo ipsam deleniti vero nihil similique eius?",
      campaignToAddress: "0xJHSAD989asdaSADAx7",
      campaignRaisedAmt: 3.12,
      campaignTarget: 11.99,
    },
    {
      id: 7,
      campaignTitle: "Title 7",
      campaignDesc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptatum quae culpa exercitationem illum, placeat ullam facere, iure quo ipsam deleniti vero nihil similique eius?",
      campaignToAddress: "0xJHSAD989asdaSADAx7",
      campaignRaisedAmt: 3.12,
      campaignTarget: 11.99,
    },
    {
      id: 8,
      campaignTitle: "Title 8",
      campaignDesc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptatum quae culpa exercitationem illum, placeat ullam facere, iure quo ipsam deleniti vero nihil similique eius?",
      campaignToAddress: "0xJHSAD989asdaSADAx7",
      campaignRaisedAmt: 3.12,
      campaignTarget: 11.99,
    },
    {
      id: 9,
      campaignTitle: "Title 9",
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
          return <CampaignCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CampaignSection;
