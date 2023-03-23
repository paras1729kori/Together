import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Button from "../components/Button";

const WithdrawalRequest = () => {
  const [campaign, setCampaign] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/campaign-details/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCampaign(data);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center my-16">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">
          Withdrawal requests for {campaign.campaignname}
        </div>
        <div>
          <Link to={"/create-withdrawal-request/" + campaign.unique_id}>
            <Button name="Create Withdrawal Request" />
          </Link>
        </div>
      </div>
      <div className="mt-12">
        <table className="w-full text-md text-left">
          <thead>
            <tr>
              <th>ID</th>
              <th>DESCRIPTION</th>
              <th>AMOUNT</th>
              <th>RECIPIENT WALLET ADDRESS</th>
              <th>APPROVE</th>
              <th>FINALIZE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Need it for Oxygen Clinders in Raipur</td>
              <td>0.11 ETH ($ ...)</td>
              <td>1/5</td>
              <td>tick</td>
              <td>tick</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Need it for Oxygen Clinders in Raipur</td>
              <td>0.11 ETH ($ ...)</td>
              <td>1/5</td>
              <td>tick</td>
              <td>tick</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Need it for Oxygen Clinders in Raipur</td>
              <td>0.11 ETH ($ ...)</td>
              <td>1/5</td>
              <td>tick</td>
              <td>tick</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Need it for Oxygen Clinders in Raipur</td>
              <td>0.11 ETH ($ ...)</td>
              <td>1/5</td>
              <td>tick</td>
              <td>tick</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-5">
        <p>Total requests: 5</p>
      </div>
    </div>
  );
};

export default WithdrawalRequest;
