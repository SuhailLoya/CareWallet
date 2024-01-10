import { Web3 } from "web3";
import { ethers } from "ethers";

const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;

// Connect to the EVM-compatible blockchain
const web3 = new Web3("https://rpc-evm-sidechain.xrpl.org/");

const contractABI = JSON.parse(`[{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"string","name":"_title","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"uint256","name":"_amountNeeded","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"create_CareWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"fundraiserAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberofCareWallets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_CareWallet","outputs":[{"components":[{"internalType":"address","name":"id","type":"address"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountCollected","type":"uint256"},{"internalType":"uint256","name":"amountNeeded","type":"uint256"}],"internalType":"struct CareWalletFactory.Fundraiser[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"listOf_CareWallets","outputs":[{"internalType":"contract Test","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"setNumberofCareWallets","outputs":[],"stateMutability":"nonpayable","type":"function"}]`);

const contractAddress = "0x3af49D8C77B252Ea9C3FA42e0D5A17ed67b8Bbf6"; // Replace with your actual contract address

const retrieveFundraisers = async () => {
  const myAccount = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
  web3.eth.accounts.wallet.add(myAccount);
  const fromAddress = myAccount.address;

  // console.log("Fetching contracts from:", fromAddress);

  const contract = new web3.eth.Contract(contractABI, contractAddress);

  const result = await contract.methods
    .get_CareWallet()
    .call({ from: fromAddress });
  return result.map(r => {return {...r, amountNeeded: ethers.formatEther(r.amountNeeded), amountCollected: ethers.formatEther(r.amountCollected)}});
};

export default retrieveFundraisers;
