// import dotenv from 'dotenv';
// dotenv.config();
import { Web3 } from "web3";
// import { readFileSync } from "fs";
import { contractABI, contractBytecode } from "./contracts/artefacts";

// const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;
// Connect to the EVM-compatible blockchain
const web3 = new Web3("https://rpc-evm-sidechain.xrpl.org/");

// Replace these with your contract's ABI and contract address
// const abiFilePath = "./contracts/output_directory/CareWalletFactory.abi";
// const contractABI = JSON.parse(readFileSync(abiFilePath));

const contractAddress = "0x2a72cc1eac50d48d6d36dcb44627358e2a8bd4f1"; // Replace with your actual contract address

const retrieveFundraisers = async () => {
  const myAccount = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
  web3.eth.accounts.wallet.add(myAccount);
  const fromAddress = myAccount.address;

  console.log("Fetching contracts from:", fromAddress);

  const contract = new web3.eth.Contract(contractABI, contractAddress);

  // Assuming 'create' is a function in your smart contract
  const result = await contract.methods
    .get_CareWallet()
    .call({ from: fromAddress });
  console.log(result);
  return result;
};

//retrieveFundraisers().catch(console.error);
//export {retrieveFundraisers}
export default retrieveFundraisers;
