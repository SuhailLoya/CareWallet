// import { createFundraiser } from "./createFundraiser";
// import { retrieveFundraisers } from "./retrieveFundraisers";
// import { ethers } from "ethers";

// const cF = async () => {
//   await createFundraiser(
//     "0x0A1be59620527b6e660D54dFe1Be664258c1DbD7", // hospital address
//     "My seventh Fundraiser",
//     "This is my Fourth fundraiser",
//     2000,
//     1800000000
//   );
//   const ret = await retrieveFundraisers();
//   return ret;
// };
// cF().then(r => console.log(r));


const contractABI = JSON.parse(`[{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"string","name":"_title","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"uint256","name":"_amountNeeded","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"create_CareWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"fundraiserAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberofCareWallets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_CareWallet","outputs":[{"components":[{"internalType":"address","name":"id","type":"address"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountCollected","type":"uint256"},{"internalType":"uint256","name":"amountNeeded","type":"uint256"}],"internalType":"struct CareWalletFactory.Fundraiser[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"listOf_CareWallets","outputs":[{"internalType":"contract Test","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"setNumberofCareWallets","outputs":[],"stateMutability":"nonpayable","type":"function"}]`);

console.log(contractABI);
