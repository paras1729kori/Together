import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import Button from "../components/Button";
import Web3 from "web3";
import { ABI } from "../../../contract/ABI.js";
import { BYTECODE } from "../../../contract/bytecode.js";
import { ethToRupeeGen } from "../helpers";
import { AuthContext } from "../context/AuthContext";

const CampaignDetails = () => {
  let { id } = useParams();
  let percent = "45%";

  const [campaign, setCampaign] = useState([]);
  const { address } = useContext(AuthContext);
  console.log(address);

  useEffect(() => {
    fetch(`http://localhost:3001/campaign-details/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCampaign(data);
      });
  }, []);

  // contract code
  const abi = ABI;
  const bytecode = BYTECODE;
  const [contributeAmt, setContributeAmt] = useState(null);

  const handleContribute = async (e) => {
    e.preventDefault();
    const web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:7545")
    );
    const contract = new web3.eth.Contract(abi, campaign.contractadd);
    // await contract.methods.goal.call((err, res) => {
    //   console.log(`Goal: ${web3.utils.fromWei(res, "ether")} ETH`);
    // });
    console.log(contract.methods.goal.call().call());

    const accounts = await web3.eth.getAccounts();
    const mainAccount = accounts[1];
    const value = web3.utils.toWei(contributeAmt, "ether");
    const txObject = {
      from: mainAccount,
      to: campaign.contractadd,
      value: value,
    };
    try {
      const tx = await contract.methods.contribute().send(txObject);
      console.log(tx);
    } catch (error) {
      console.log(error);
    }
  };

  // Integration of refund
  const handleRefund = async (e) => {
    e.preventDefault();
    console.log("handleRefund called");
    const web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:7545")
    );
    const contract = new web3.eth.Contract(abi, campaign.contractadd);
    const accounts = await web3.eth.getAccounts();
    const mainAccount = accounts[1];
    const txObject = {
      from: campaign.contractadd,
      to: mainAccount,
    };
    try {
      const tx = await contract.methods.refund().send(txObject);
      console.log(tx);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-12 my-20">
      <div>
        <Button name="Approve Request by Investors" />
        <h1 className="text-xl text-center md:text-left md:text-4xl font-bold mb-3">
          {campaign.campaignname}
        </h1>
        <p className="mb-3 text-slate-500">{campaign.campaigndesc}</p>
        {/* <Link to="#">View on Test Network</Link> */}
        {/* donation tracker */}
        <div className="mt-5">
          <p className="text-md text-emerald-800 font-bold">Campaign Balance</p>
          <h1 className="text-xl font-bold">
            3.12 ETH <small>(Rs. {ethToRupeeGen(3.12)})</small>
          </h1>
          <p>
            target of {campaign.targetamt} ETH (Rs.{" "}
            {ethToRupeeGen(campaign.targetamt)})
          </p>
          <div className="w-full mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-slate-100">
            <div
              className="bg-teal-600 h-2.5 rounded-full"
              style={{ width: percent }}
            ></div>
            <div className="mt-5">
              {/* {address == campaign.creatoraddress ? ( */}
              <Link
                to={"/withdrawal-requests/" + campaign.unique_id}
                className="hidden md:block"
              >
                <Button name="Campaign Dashboard (for manager)" />
              </Link>
              {/* ) : ( */}
              {/* "" */}
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* contribute now */}
        <div className="rounded overflow-hidden shadow-md">
          <div className="px-6 py-4">
            <div className="font-bold text-xl">Contribute Now</div>
            <small>Amount in Ether you wish to contribute</small>
            <form onSubmit={handleContribute}>
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
              focus:outline-none focus:bg-white focus:border-gray-500"
                  id="campaign-name"
                  type="number"
                  step="0.01"
                  onChange={(e) => {
                    setContributeAmt(e.target.value);
                  }}
                  placeholder="11.99 ETH"
                />
              </div>
              <div className="mt-3">
                <Button name="Contribute" />
              </div>
            </form>
          </div>
        </div>
        {/* refund */}
        <div
          className="mt-5 rounded overflow-hidden shadow-md"
          onClick={handleRefund}
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl">Request refund</div>
            <div className="mt-2">
              <Button name="Refund" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
