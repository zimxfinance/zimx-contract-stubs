import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";

const privateKey = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    base: {
      url: "https://mainnet.base.org",
      chainId: 8453,
      accounts: privateKey !== "" ? [privateKey] : [],
    },
  },
  etherscan: {
    apiKey: {
      base: process.env.ETHERSCAN_API_KEY || "",
    },
    customChains: [
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org",
        },
      },
    ],
  },
};

export default config;
