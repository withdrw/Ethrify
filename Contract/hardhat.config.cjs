// https://eth-sepolia.g.alchemy.com/v2/5jQKdmlOUOLEAjz7QgqHaPmQ487HZzRM

require("dotenv").config();
require('@nomiclabs/hardhat-waffle')


module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.INFURA_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
