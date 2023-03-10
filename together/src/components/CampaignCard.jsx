import React from "react";
import { Link } from "react-router-dom";

import campaignImg from "../assets/campaign.jpg";
import { ethToRupeeGen } from "../helpers";

const CampaignCard = (props) => {
  const { item } = props;

  return (
    <div>
      <Link to={"/campaign-details/" + item.id}>
        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={campaignImg}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-md">
              Campaign {item.campaignname}
            </div>
            <div className="font-bold mb-2">
              by <small>{item.campaignToAddress}</small>
            </div>
            <div className="">
              <p className="text-gray-700 text-xs font-bold">
                {item.campaignRaisedAmt} ETH are raised (Rs.{" "}
                {ethToRupeeGen(item.campaignRaisedAmt)})
              </p>
              <p className="text-gray-700 text-xs font-bold">
                target of {item.targetamt} ETH (Rs.
                {ethToRupeeGen(item.targetamt)})
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CampaignCard;
