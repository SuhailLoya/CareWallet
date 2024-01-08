// import dotenv from 'dotenv';
// dotenv.config();
import { Web3 } from "web3";
import { contractABI, contractBytecode } from "./contracts/artefacts";

// import { readFileSync } from "fs";
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;
// Connect to the EVM-compatible blockchain
const web3 = new Web3("https://rpc-evm-sidechain.xrpl.org/");

// Replace these with your contract's ABI and bytecode
// const abiFilePath = "./contracts/output_directory/CareWalletFactory.abi";
// const contractABI = readFileSync(abiFilePath);

// const binFilePath = "./contracts/output_directory/CareWalletFactory.bin";
const contractBytecode = "0x" + contractBytecode;

const deploy = async () => {
  const myAccount = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
  web3.eth.accounts.wallet.add(myAccount);
  const deployerAccount = myAccount.address;

  console.log("Deploying contract from account:", deployerAccount);

  const Contract = new web3.eth.Contract(contractABI);
  const deployTx = Contract.deploy({
    data: contractBytecode,
    arguments: [], // Any constructor arguments go here
  });

  const gas = await deployTx.estimateGas();
  const gasPrice = await web3.eth.getGasPrice();

  const createTransaction = await web3.eth.accounts.signTransaction(
    {
      from: deployerAccount,
      data: deployTx.encodeABI(),
      gas,
      gasPrice,
    },
    PRIVATE_KEY
  );

  console.log("Sending transaction...");
  const createReceipt = await web3.eth.sendSignedTransaction(
    createTransaction.rawTransaction
  );
  console.log("Contract deployed at address:", createReceipt.contractAddress);
};

deploy().catch(console.error);
