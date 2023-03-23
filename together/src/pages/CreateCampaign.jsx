import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import Web3 from "web3";
import Button from "../components/Button";
import { ABI } from "../../../contract/ABI.js";
import { BYTECODE } from "../../../contract/bytecode.js";
// import { AuthContext } from "../context/AuthContext";

const Campaigns = () => {
  const [deadline, setDeadline] = useState(0);
  const [campaignName, setcampaignName] = useState("");
  const [campaignDesc, setCampaignDesc] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [targetAmt, setTargetAmt] = useState(0);
  const [creatorAddress, setCreatorAdd] = useState("");
  let contractAdd = "";
  // const { address } = useContext(AuthContext);
  // console.log(address, "Create Campaign");
  // console.log(typeof address);

  // contract code
  const abi = ABI;
  const bytecode = BYTECODE;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:7545")
    );
    let contract = new web3.eth.Contract(abi);
    let allAccounts = await web3.eth.getAccounts();
    let creatorAddress = allAccounts[0];
    setCreatorAdd(creatorAddress);
    let deployArgs = [creatorAddress, targetAmt, deadline]; // account, goal, timestamp
    await contract
      .deploy({ data: bytecode, arguments: deployArgs })
      .send({ from: creatorAddress, gas: 3000000 })
      .on("receipt", (receipt) => {
        contractAdd = receipt.contractAddress;
        console.log("Contract Address: ", receipt.contractAddress);
      });

    const unique_id = uuidv4();
    const data = {
      unique_id,
      deadline,
      campaignName,
      campaignDesc,
      imgUrl,
      targetAmt,
      contractAdd,
      creatorAddress,
    };
    console.log(data);
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
  };

  return (
    <div className="max-w-2xl mx-auto mb-20">
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
              required
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
              required
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
              required
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
              required
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
              required
            />
          </div>
          <div className="w-full px-3 mb-6">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
              focus:outline-none focus:bg-white focus:border-gray-500"
              id="contractAdd"
              type="hidden"
              step="0.01"
              value={contractAdd}
              required
            />
          </div>
          <div className="w-full px-3 mb-6">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
              focus:outline-none focus:bg-white focus:border-gray-500"
              id="creatorAddress"
              type="hidden"
              step="0.01"
              value={creatorAddress}
              required
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
