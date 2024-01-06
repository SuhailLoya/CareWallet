import { useState } from "react";
import classes from "./DonationDetails.module.css";
import DonationHistory from "./DonationHistory/DonationHistory";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
const dummyDetail = {
  title: "Bring Abbas Back Home",
  imageURL:
    "https://th.bing.com/th/id/R.b7b329d535dfb28ec56e54b9d080eeb3?rik=pQGrW27P%2baxQWg&riu=http%3a%2f%2fvirginiazoo.org%2fwp-content%2fuploads%2f2013%2f03%2fred-panda-1-e1480367081955.jpg&ehk=TxExe8MRYO6F5%2bz5yWNBVuEogyq2%2fepjeMEO8TVP2QM%3d&risl=&pid=ImgRaw&r=0",
};

const DonationDetails = () => {
  const [popUp, setPopUp] = useState(false);
  const [donDet, setDonDet] = useState(dummyDetail);

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
      <Typography
        variant="h3"
        // fontWeight="medium"
        component="div"
        align="center"
        fontWeight="bold"
      >
        {donDet.title}
      </Typography>
      <Grid container spacing={2}>
        {/* First Grid Item (60%) */}
        <Grid item xs={7}>
          {/* Image filling the entire width */}
          <img
            src={donDet.imageURL}
            alt="Image Details"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>

        {/* Second Grid Item (40%) */}
        <Grid item xs={5}>
          {/* Content for the second grid item */}
          {/* Replace this with your content */}
          <div style={{ backgroundColor: "lightgreen", height: "100px" }}>
            Grid Item 2 (40%)
          </div>
        </Grid>
      </Grid>
      {popUp && <DonationHistory closeModal={closeModal} />}
    </div>
  );
};

export default DonationDetails;
