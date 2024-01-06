import { useState } from "react";
import classes from "./DonationDetails.module.css";
import DonationHistory from "./DonationHistory/DonationHistory";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const DonationDetails = () => {
  const [popUp, setPopUp] = useState(false);

  const openModal = () => {
    setPopUp(true);
  };

  const closeModal = () => {
    setPopUp(false);
  };

  const onDonateClicked = () => {
    console.log("Redirecting to donatin page");
  };
  //#TODO: Centralised all the components
  return (
    <div>
      <Stack
        direction="row"
        // divider={<Divider orientation="vertical" flexItem />}
        justifyContent="space-around"
        alignItems="center"
        spacing={4}
      >
        <Button variant="contained" onClick={openModal}>
          Donation History
        </Button>
        <Button size="large" variant="contained" onClick={onDonateClicked}>
          Donate Now!!!
        </Button>
      </Stack>
      <h1>hey</h1>
      {popUp && <DonationHistory closeModal={closeModal} />}
    </div>
  );
};

export default DonationDetails;
