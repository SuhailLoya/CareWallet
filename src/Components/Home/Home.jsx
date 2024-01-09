import classes from "./Home.module.css";
import HomeImage from "../../assets/HomeImage.png";
import flashLogo from "../../assets/flash.png";
import lossLogo from "../../assets/loss.png";
import securityLogo from "../../assets/security.png";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div className={classes.HomeContainer}>
      <Helmet>
        <title>CareWallet</title>
      </Helmet>
      <div className={classes.imgContainer}>
        <img src={HomeImage}></img>
      </div>
      <div className={classes.description}>
        <div className={classes.textdescription}>
          <h1>Empowering Healthcare, Powered by Blockchain Integrity</h1>
          <p style={{ textAlign: "center" }}>
            {" "}
            By harnessing the power of blockchain technology and the efficiency
            of the XRPL, we are revolutionizing healthcare funding. CareWallet
            is not just a platform but a commitment to ensuring transparent,
            secure, and direct medical assistance to those in need. Our
            blockchain-driven approach guarantees that every donation reaches
            its intended recipient, bringing a new level of trust and efficiency
            to medical crowdfunding. Using XRPL, we are able to make
            transactions cheaper and fast than normal transaction methods used
            by other crowdfunding platforms.
          </p>
        </div>
        <div className={classes.IconsContainer}>
          <div className={classes.fastContainer}>
            <img src={lossLogo}></img>
            <p>CareWallet has significantly lower transaction fees</p>
          </div>
          <div className={classes.fastContainer}>
            <img src={flashLogo}></img>
            <p>CareWallet only takes 3-5 seconds to settle transactions</p>
          </div>
          <div className={classes.fastContainer}>
            <img src={securityLogo}></img>
            <p>CareWallet has high levels of tranparency and security</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
