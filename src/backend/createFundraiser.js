// import dotenv from "dotenv";
// dotenv.config();

import { Web3 } from "web3";
// import { readFileSync } from "fs";
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;

import { contractABI, contractBytecode } from "./contracts/artefacts";

// Connect to the EVM-compatible blockchain
const web3 = new Web3("https://rpc-evm-sidechain.xrpl.org/");

// Replace these with your contract's ABI and contract address
// const abiFilePath = "./contracts/output_directory/CareWalletFactory.abi";

// const contractABI = JSON.parse(readFileSync(abiFilePath).toString());

const contractAddress = "0x2a72cc1eac50d48d6d36dcb44627358e2a8bd4f1"; // Replace with your actual contract address

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
    _amountNeeded,
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
