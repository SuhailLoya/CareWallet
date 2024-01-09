import { useState } from "react";
import nft1 from "../../assets/nft1.png";
import nft2 from "../../assets/nft2.png";
import Chatbox from "./Chatbox/Chatbox";
import { Helmet } from "react-helmet";

const NFT = () => {
  const [openChat, setOpenChat] = useState(false);

  const closeChat = () => {
    setOpenChat(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <Helmet>
        <title>CareWallet - My NFTs</title>
      </Helmet>

      {openChat && <Chatbox closeChat={closeChat} />}
      <img
        src={nft2}
        style={{ width: "50%" }}
        onClick={() => setOpenChat(true)}
      ></img>
      <img
        src={nft1}
        style={{ width: "50%" }}
        onClick={() => setOpenChat(true)}
      ></img>
    </div>
  );
};

export default NFT;
