require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20", // Ensure Solidity version matches your contracts
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com", // ✅ New Mumbai RPC URL
      accounts: [`0x${process.env.PRIVATE_KEY}`] // Ensure .env file has PRIVATE_KEY
    }
  }
};





