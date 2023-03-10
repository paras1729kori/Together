import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Web3 from "web3";
import Button from "../components/Button";
import { ABI } from "../../../contract/ABI.js";
import { BYTECODE } from "../../../contract/bytecode.js";

const Campaigns = () => {
  const [deadline, setDeadline] = useState(0);
  const [campaignName, setcampaignName] = useState("");
  const [campaignDesc, setCampaignDesc] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [targetAmt, setTargetAmt] = useState(0);

  // contract code
  const abi = ABI;
  const bytecode = BYTECODE;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const unique_id = uuidv4();
    const data = {
      unique_id,
      deadline,
      campaignName,
      campaignDesc,
      imgUrl,
      targetAmt,
    };
    console.log(data);

    const web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:7545")
    );
    let contract = new web3.eth.Contract(abi);
    console.log(contract.methods, "1");
    let allAccounts = await web3.eth.getAccounts();
    let mainAccount = allAccounts[0];
    let deployArgs = [mainAccount, 10000, deadline]; // account, goal, timestamp
    contract
      .deploy({ data: bytecode.object, arguments: deployArgs })
      .send({ from: mainAccount, gas: 1000000 });

    const response = await fetch("http://localhost:3001/createCampaign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Error:", response.statusText);
      return;
    }

    // contract = new web3.eth.Contract(abi);
    // const contractInstance = contract.at(allAccounts[1]);

    // contractInstance.contribute.send(
    //   { from: allAccounts[0], value: 1.99 },
    //   (error, result) => {
    //     // do something with error checking/result here });
    //     console.log(result);
    //   }
    // );
  };

  return (
    <div className="mb-20">
      <h1 className="text-xl text-center md:text-left md:text-2xl font-bold mb-3">
        Create a new campaign 📢
      </h1>
      <div className="rounded overflow-hidden shadow-lg mt-3">
        <form className="w-full p-3 my-2" onSubmit={handleSubmit}>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Campaign Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
              focus:outline-none focus:bg-white focus:border-gray-500"
              id="campaign-name"
              type="text"
              onChange={(e) => {
                setcampaignName(e.target.value);
              }}
              placeholder="Camera Gear Reimagined"
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Campaign Description
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
              focus:outline-none focus:bg-white focus:border-gray-500"
              id="campaign-name"
              rows="4"
              type="textarea"
              onChange={(e) => {
                setCampaignDesc(e.target.value);
              }}
              placeholder="Enter details about your new idea....."
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Deadline
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="min-contribution"
              type="date"
              onChange={(e) => {
                let date = new Date(e.target.value);
                setDeadline(Math.floor(date.getTime() / 1000));
              }}
              placeholder="1.00 ETH"
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Image URL
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
              focus:outline-none focus:bg-white focus:border-gray-500"
              id="campaign-name"
              type="text"
              onChange={(e) => {
                setImgUrl(e.target.value);
              }}
              placeholder="https://...."
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Target Amount
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
              focus:outline-none focus:bg-white focus:border-gray-500"
              id="campaign-name"
              type="number"
              step="0.01"
              onChange={(e) => {
                setTargetAmt(e.target.value);
              }}
              placeholder="11.99 ETH"
            />
          </div>
          <div className="flex justify-center">
            <Button
              name="Register Campaign"
              color="green"
              className="w-3/4 py-3"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Campaigns;
