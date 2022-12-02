import { useState } from "react";
import React from "react";
import Web3 from "web3";

const VendingMachine = () => {
  const [error, setError] = useState("");
  let web3;
  const connectWalletHandler = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        web3 = new Web3(window.ethereum);
      } catch (err) {
        setError(err.message);
      }
    } else {
      console.log("Please Install MetaMask");
    }
  };

  return (
    <div>
      <button onClick={connectWalletHandler}>Connect Wallet</button>
    </div>
  );
};

export default VendingMachine;
