//deploy smart contract to Ethereum network

//get access to hardhat functionalities
const hre = require("hardhat");

async function main() {

    // get contract factory (used to deploy new instances of a smart contract) of Payments 
    const ethPayment = await hre.ethers.getContractFactory("Payments");

    // deploys smart contract to network. sends transaction to network and creats new 
    // instance of Payments
    const paymentContract = await ethPayment.deploy();

    // waits for deployment transaction to be mined (validate a transaction and added to the blockchain)
    // and deployed to network
    await paymentContract.deployed();

    // return address of deployed smart contract 
    console.log('Payment deployed to :',paymentContract.address);
};

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
})