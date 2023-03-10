import React, { useState } from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";

import logo from "../assets/together.png";
import metamask from "../assets/metamask.png";
import wallet from "../assets/wallet.png";
import Button from "../components/Button";

const Navbar = () => {
  const [web3Provider, setWeb3Provider] = useState(null);

  const checkMetaMaskInstalled = async () => {
    alert("Install Metamask...");
    const provider = window.ethereum;
    if (typeof provider !== "undefined" && provider.isMetaMask) {
      return true;
    }
    return false;
  };

  const connectWallet = async () => {
    const isMetaMaskInstalled = await checkMetaMaskInstalled();
    if (isMetaMaskInstalled) {
      return new Promise(async (resolve, reject) => {
        const web3 = new Web3(window.ethereum);

        try {
          const provider = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setWeb3Provider(provider);
          resolve(web3);
        } catch (err) {
          reject(err);
        }
      });
    } else {
      window.location.href = "https://metamask.io/download.html";
    }
  };

  return (
    <div className="flex justify-between rounded-xl mb-20">
      <Link to="/">
        <div className="flex items-center gap-1">
          <div className="w-10">
            <img src={logo} alt="logo.svg" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">Together</h1>
        </div>
      </Link>
      {web3Provider == null ? (
        <div>
          <div className="hidden md:flex gap-2" onClick={connectWallet}>
            <Button name="Connect Wallet" color="amber" />
          </div>
          <div className="md:hidden">
            <img
              src={metamask}
              alt="metamask.png"
              onClick={connectWallet}
              className="w-5/12 float-right"
            />
          </div>
        </div>
      ) : (
        <div className="w-10">
          <img src={wallet} alt="logo.svg" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
