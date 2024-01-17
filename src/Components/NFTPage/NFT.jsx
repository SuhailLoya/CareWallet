import { useState } from "react";
import nft1 from "../../assets/nft1.png";
import nft2 from "../../assets/nft2.png";
import Chatbox from "./Chatbox/Chatbox";
import { Helmet } from "react-helmet";
import NFTList from "./NFTList/NFTList";

const NFT = () => {
  const [openNFT, setOpenNFT] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  const UseOpenChat = () => {
    setOpenChat(true);
  }

  const closeNFT = () => {
    setOpenNFT(false);
  };



  return (
    <div style={{ display: "flex" }}>
      <Helmet>
        <title>CareWallet - My NFTs</title>
      </Helmet>
      {}
      {openChat && <Chatbox closeChat={() => setOpenChat(false)}/>}
      {openNFT && <NFTList closeNFT={closeNFT} PropsOpenChat={UseOpenChat}/>}
      <img
        src={nft2}
        style={{ width: "50%" }}
        onClick={() => setOpenNFT(true)}
      ></img>
      <img
        src={nft1}
        style={{ width: "50%" }}
        onClick={() => setOpenNFT(true)}
      ></img>
    </div>
  );
};

export default NFT;
