import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { PRIVATE_KEY,INFURA_API_KEY,ETHERSCAN_API_KEY} from "./secret.json";

const config: HardhatUserConfig = {
  solidity: "0.8.20",

  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY]
    }
  },

  etherscan: {
    apiKey: {
      sepolia : ETHERSCAN_API_KEY
    }
  },

  sourcify: {
    enabled: false
  }
};

export default config;
