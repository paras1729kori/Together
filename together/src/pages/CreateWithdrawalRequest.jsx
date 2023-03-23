import React, { useState } from "react";

import Button from "../components/Button";

const CreateWithdrawalRequest = () => {
  const [requestDesc, setRequestDesc] = useState("");
  const [amtEther, setAmtEther] = useState(0);
  const [recipientAdd, setRecipientAdd] = useState("");

  const handleSubmit = () => {
    console.log("done");
  };

  return (
    <div className="max-w-2xl mx-auto mb-20">
      <h1 className="text-xl text-center md:text-left md:text-2xl font-bold mb-3">
        Create a Withdrawal Request 💵
      </h1>
      <div className="rounded overflow-hidden shadow-lg mt-3">
        <form className="w-full p-3 my-2" onSubmit={handleSubmit}>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Request Description
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
          focus:outline-none focus:bg-white focus:border-gray-500"
              id="request-desc"
              rows="4"
              type="textarea"
              onChange={(e) => {
                setRequestDesc(e.target.value);
              }}
              placeholder="Reason for withdrawal......"
              required
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Amount in Ether
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
          focus:outline-none focus:bg-white focus:border-gray-500"
              id="campaign-name"
              type="number"
              step="0.01"
              onChange={(e) => {
                setAmtEther(e.target.value);
              }}
              placeholder="11.99 ETH"
              required
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Recipient Ethereum Wallet Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
          focus:outline-none focus:bg-white focus:border-gray-500"
              id="campaign-name"
              type="text"
              onChange={(e) => {
                setRecipientAdd(e.target.value);
              }}
              placeholder="0x...."
              required
            />
          </div>
          {/* <div className="w-full px-3 mb-6">
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
          </div> */}
          <div className="flex justify-center">
            <Button name="Request" color="green" className="w-3/4 py-3" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateWithdrawalRequest;
