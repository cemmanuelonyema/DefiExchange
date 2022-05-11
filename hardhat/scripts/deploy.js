const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the Crypto Devs TOKEN contract that you deployed in the previous module
  const cryptoDevsTokenAddress = CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
  const exchangeContract= await ethers.getContractFactory(
    "Exchange"
  );

  // deploy the contract
  const deployedExchangeContract = await exchangeContract.deploy(
    cryptoDevsTokenAddress
  );
  await deployedExchangeContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Exchange Contract Address Deployed Successfully TO:",
    deployedCryptoDevsTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
