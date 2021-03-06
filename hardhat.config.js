require("@nomiclabs/hardhat-waffle")

const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString().trim()
const infuraId = fs.readFileSync(".infuraid").toString().trim()
//const projectId = "e51820db6295486388bea3db7964aa83"//

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    mumbai: {
      // Infura
      url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [privateKey]
    },
    matic: {
      // Infura
      url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
    
  },
  solidity: {
    version: "0.8.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
