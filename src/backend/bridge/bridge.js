import { Client, Wallet, xrpToDrops } from "xrpl";
import { decodeAccountID, encodeAccountID } from "ripple-address-codec";
import { Wallet as _Wallet } from "@ethersproject/wallet";
import { JsonRpcProvider } from "@ethersproject/providers";
import { BridgeDoorNative__factory } from "@peersyst/xrp-evm-contracts";
import ethers from "ethers";

const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;

async function main() {
  // Use your EVM wallet from Metamask
  // Copy the private key and paste here
  // Or you can get a private key by uncommenting the next line
  // const pk = ethersWallet.Wallet.createRandom();
  const ethersClient = new JsonRpcProvider(
    "https://rpc-evm-sidechain.xrpl.org"
  );
  const evmWallet = new _Wallet("0x" + PRIVATE_KEY, ethersClient);

  // Verify you have the right EVM wallet address
  console.log("EVM Address:");
  console.log(evmWallet.address);

  // -----------

  // Retreive the bridge data
  const lockingClient = new Client("wss://s.devnet.rippletest.net:51233");

  await lockingClient.connect();
  const lockingChainDoor = "rayv9pKSvSuWaEU5gJiQRqsLXP5XBV1n5Y";

  const accountObjectsRequest = {
    command: "account_objects",
    account: lockingChainDoor,
    type: "bridge",
  };

  const bridgeData = await lockingClient.request(accountObjectsRequest);
  const bridge = bridgeData.result.account_objects[0].XChainBridge;
  const bridgeDataSignatureReward =
    bridgeData.result.account_objects[0].SignatureReward;
  const bridgeDataMin =
    bridgeData.result.account_objects[0].MinAccountCreateAmount;
  console.log("Bridge signature reweard:");
  console.log(bridgeDataSignatureReward);
  console.log("Bridge account min:");
  console.log(bridgeDataMin);
  console.log("Bridge data:");
  console.log(bridge);

  // lockingClient.disconnect()

  // -----------

  // Get an XRPL devnet wallet
  // const wallet1 = await lockingClient.fundWallet()
  const wallet1 = Wallet.fromSeed("sEdVwvpyYYiTa2o8qZnNKNUARWRUbXJ");
  const wallet2 = Wallet.fromSeed("sEd7s94yojHiCX7S1AovdPQuUNihi6i");
  // // wallet1 address: rPY6kVyy9x1M4cxzV2bbQwQP1bPvH51kqh
  // // View it on the explorer:
  // // https://devnet.xrpl.org/accounts/rPY6kVyy9x1M4cxzV2bbQwQP1bPvH51kqh
  // const wallet1 = xrpl.Wallet.fromSeed("snk7pMfHPZoUpwMQuFApo3XTLRJhn")
  // // wallet2 address: r41mGaFCWUrFWErZHVP8REfATywumLvW1g
  // // View it on the explorer:
  // // https://devnet.xrpl.org/accounts/r41mGaFCWUrFWErZHVP8REfATywumLvW1g

  console.log("Wallet1:");
  console.log(wallet1.classicAddress);
  // console.log("Wallet2:")
  // console.log(wallet2)

  // -----------

  // Convert XRPL address to EVM address
  const xrplAccountToEvmAddress = account => {
    const accountId = decodeAccountID(account);
    return `0x${accountId.toString("hex")}`;
  };

  // Convert EVM address to XRPL address
  const evmAddressToXrplAccount = address => {
    const accountId = Buffer.from(address.slice(2), "hex");
    return encodeAccountID(accountId);
  };

  console.log(
    "XRPL address representation: " + evmAddressToXrplAccount(evmWallet.address)
  );
  // console.log("EVM address representation: " + xrplAccountToEvmAddress('wallet2.classicAddress'))

  // // -----------

  // Create Wallet2 on the issuing chain
  // const fundTx = {
  //   TransactionType: 'XChainAccountCreateCommit',
  //   Account: wallet1.classicAddress,
  //   XChainBridge: bridge,
  //   SignatureReward: bridgeDataSignatureReward,
  //   Destination: evmAddressToXrplAccount(evmWallet.address),
  //   Amount: (
  //     parseInt(bridgeDataMin, 10) * 2
  //   ).toString(),
  // }

  // const fundResponse = await lockingClient.submitAndWait(fundTx, {
  //   wallet: wallet1,
  // })
  // console.log("Tx XChainAccountCreateCommit:")
  // console.log(fundResponse)

  // ---------

  // Interacting with the EVM for the claimID
  // const bridgeAddress = "0xa082D1316160b7fEded090935710787C7CF3579F"; // created by me
  const bridgeAddress = "0x0FCCFB556B4aA1B44F31220AcDC8007D46514f31"; // from workshop
  const bridgeContract = BridgeDoorNative__factory.connect(
    bridgeAddress,
    ethersClient
  );
  const witnessServers = await bridgeContract.getWitnesses();
  console.log(witnessServers);

  // const contractTransaction = await bridgeContract.connect(evmWallet).createClaimId(xrplAccountToEvmAddress(wallet1.address), {
  //     value: ethers.utils.parseEther(xrpl.dropsToXrp(bridgeDataSignatureReward)),
  //     gasLimit: 140_000
  // });
  // const transaction = await contractTransaction.wait();
  // // console.log(transaction)
  // const event = transaction.events?.find((event) => event.event === "CreateClaim");
  // const [claimID] = event?.args || [];
  // // console.log(event?.args)
  // let claimIDNumber = claimID.toNumber().toString();

  // console.log(`Claim ID for the transfer: ${claimIDNumber}`)

  // // ---------

  // const CreateClaimTx = {
  //   TransactionType: 'XChainCreateClaimID',
  //   Account: wallet1.classicAddress,
  //   SignatureReward: bridgeDataSignatureReward,
  //   XChainBridge: bridge,
  //   OtherChainSource: evmAddressToXrplAccount(evmWallet.address),
  // }

  // const createClaimIdResult = await lockingClient.submitAndWait(CreateClaimTx, {
  //   wallet: wallet1,
  // })

  // console.log("createClaim result")
  // console.log(createClaimIdResult)

  // console.log()

  // let claimIDNumber = createClaimIdResult.id.toString();
  const claimIDNumber = "51";

  // XChainCommit
  // console.log('Step 2: Locking the funds on the locking chain...')

  // const commitTx = {
  //   TransactionType: 'XChainCommit',
  //   Account: wallet1.classicAddress,
  //   Amount: xrpl.xrpToDrops(2),
  //   XChainBridge: bridge,
  //   XChainClaimID: claimIDNumber,
  //   OtherChainDestination: evmAddressToXrplAccount(evmWallet.address),
  // }

  // const commitResult = await lockingClient.submitAndWait(commitTx, {
  //   wallet: wallet1,
  // })

  // console.log("Commit result")
  // console.log(commitResult)

  // claimIDNumber = commitResult.result.XChainClaimID
  console.log(`Claim ID for the transfer: ${claimIDNumber}`);

  const claimTx = {
    TransactionType: "XChainClaim",
    Account: wallet1.classicAddress,
    Amount: xrpToDrops(2),
    XChainBridge: bridge,
    XChainClaimID: claimIDNumber,
    Destination: evmAddressToXrplAccount(evmWallet.address),
  };

  const claimResult = await lockingClient.submitAndWait(claimTx, {
    wallet: wallet1,
  });

  console.log("Claim result");
  console.log(claimResult);

  lockingClient.disconnect();
}

main();
