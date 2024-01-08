import PatientCard from "./PatientCard/PatientCard";
import classes from "./DonationList.module.css";
import { NavLink } from "react-router-dom";
import dummyData from "./dummydata.json";
import userPhoto from "../../assets/anonymous.jpg";
import hospitalPhoto from "../../assets/hospital.png";
import internetPhoto from "../../assets/internet.png";
import Logo from "../../assets/CareWalletLogo.png";
import arrow from "../../assets/right-arrow.png";
import { useEffect, useState } from "react";

import createFundraiser from "../../backend/createFundraiser"
import retrieveFundraisers from "../../backend/retrieveFundraisers"

import { useSharedState } from "../../hooks/MyProvider";

const DonationPage = () => {
  const { sharedState, setSharedState } = useSharedState();

  async function getData() {
    const stuff = 
    setSharedState("initialised", true);
    setSharedState("fundraisers", {});
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className={classes.Header}>
        <div className={classes.br}></div>
        <span className={classes.TextContainer}>
          <h1>Trusted Process</h1>
          <p>
            Each crowdfunding campaign is initiated by the hospitals on behalf
            of their patients to prevent fraudulent cases. All donations are
            directed straight to the hospitals, ensuring no misuse of funds.
          </p>
        </span>
        <div className={classes.ImgContainer}>
          <img src={hospitalPhoto}></img>
          <img src={arrow} style={{ width: "5%" }}></img>
          <img src={Logo}></img>
          <img src={arrow} style={{ width: "5%" }}></img>
          <img src={internetPhoto}></img>
        </div>
        <div className={classes.br}></div>
      </div>
      <div className={classes.CardsContainer}>
        {dummyData.map((data, index) => (
          <NavLink to="/donation/user1" style={{ width: "20%" }} key={index}>
            <PatientCard
              FundsNeeded={data.FundsNeeded}
              imgUrl={userPhoto}
              title={data.Title}
              CrowdfundingDetails={data.CrowdfundingDetails}
              date={data.date}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DonationPage;
