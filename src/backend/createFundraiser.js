// import dotenv from "dotenv";
// dotenv.config();

import { Web3 } from "web3";
import { ethers } from "ethers";
// import { readFileSync } from "fs";
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;

// import { contractABI } from "./contracts/artefacts";

// Connect to the EVM-compatible blockchain
const web3 = new Web3("https://rpc-evm-sidechain.xrpl.org/");

// Replace these with your contract's ABI and contract address
// const abiFilePath = "./contracts/output_directory/CareWalletFactory.abi";

const contractABI = JSON.parse(`[{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"string","name":"_title","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"uint256","name":"_amountNeeded","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"create_CareWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"fundraiserAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberofCareWallets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_CareWallet","outputs":[{"components":[{"internalType":"address","name":"id","type":"address"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountCollected","type":"uint256"},{"internalType":"uint256","name":"amountNeeded","type":"uint256"}],"internalType":"struct CareWalletFactory.Fundraiser[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"listOf_CareWallets","outputs":[{"internalType":"contract Test","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"setNumberofCareWallets","outputs":[],"stateMutability":"nonpayable","type":"function"}]`);

const contractAddress = "0x3af49D8C77B252Ea9C3FA42e0D5A17ed67b8Bbf6"; // Replace with your actual contract address

const createFundraiser = async (
  _owner,
  _title,
  _description,
  _amountNeeded,
  _deadline
) => {
  const myAccount = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
  web3.eth.accounts.wallet.add(myAccount);
  const fromAddress = myAccount.address;

  console.log("Calling contract.create() from account:", fromAddress);

  const contract = new web3.eth.Contract(contractABI, contractAddress);

  // Assuming 'create' is a function in your smart contract
  const createTx = contract.methods.create_CareWallet(
    _owner,
    _title,
    _description,
    ethers.parseEther(_amountNeeded.toString()),
    _deadline
  );

  const gas = await createTx.estimateGas({ from: fromAddress });
  const gasPrice = await web3.eth.getGasPrice();

  const createTransaction = await web3.eth.accounts.signTransaction(
    {
      from: fromAddress,
      to: contractAddress,
      data: createTx.encodeABI(),
      gas,
      gasPrice,
    },
    PRIVATE_KEY
  );

  console.log("Sending transaction...");
  const createReceipt = await web3.eth.sendSignedTransaction(
    createTransaction.rawTransaction
  );
  console.log("Transaction hash:", createReceipt.transactionHash);
};

//createFundraiser().catch(console.error);
export default createFundraiser;
