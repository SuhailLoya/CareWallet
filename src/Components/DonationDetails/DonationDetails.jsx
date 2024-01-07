import { useState } from "react";
import classes from "./DonationDetails.module.css";
import DonationHistory from "./DonationHistory/DonationHistory";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ShareIcon from "@mui/icons-material/Share";
import HistoryIcon from "@mui/icons-material/History";


const dummyDetail = {
  title: "Bring Abbas Back Home",
  imageURL:
    "https://th.bing.com/th/id/R.b7b329d535dfb28ec56e54b9d080eeb3?rik=pQGrW27P%2baxQWg&riu=http%3a%2f%2fvirginiazoo.org%2fwp-content%2fuploads%2f2013%2f03%2fred-panda-1-e1480367081955.jpg&ehk=TxExe8MRYO6F5%2bz5yWNBVuEogyq2%2fepjeMEO8TVP2QM%3d&risl=&pid=ImgRaw&r=0",
  totalXRPGoal: 10000,
  donatedXRP: 4000,
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
    <div
      style={{
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingTop: "20px",
        // overflow: "scroll",
        flex: "1",
      }}
    >
      <Stack
      spacing={4}
      >
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
          {/* Second Grid Item (40%) */}
          <Grid
            item
            xs={5}
            container
            direction="column"
            alignItems="flex-start"
          >
            {/* Left-aligned "Raised" text */}
            <Typography variant="h5" gutterBottom>
              Raised: {donDet.donatedXRP} / {donDet.totalXRPGoal}{" "}
              <strong>XRP</strong>
            </Typography>

            {/* Centered content */}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Progress bar representing donated XRP */}
              <LinearProgress
                variant="determinate"
                value={(donDet.donatedXRP / donDet.totalXRPGoal) * 100}
                color="primary"
                style={{
                  marginBottom: "10px",
                  width: "100%", // Set the width to fill the entire space
                  borderRadius: "10px", // Apply rounded corners
                  height: "15px",
                }}
              />
            </div>

            {/* Material UI buttons */}
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                // backgroundColor: "red",
              }}
            >
              {/* Donate Now button */}
              <Button
                size="medium"
                variant="contained"
                color="warning"
                onClick={onDonateClicked}
                style={{ flex: "1 0 auto", borderRadius: 20, margin: 10, fontSize: "1rem"}}
              >
                Donate Now!!!
              </Button>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: 10,
                }}
              >
                {/* Donation History icon */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  {/* <HistoryIcon
                  onClick={openModal}
                  style={{ cursor: "pointer", marginRight: "10px" }}
                /> */}
                  <ShareIcon
                    onClick={() => console.log("share")}
                    style={{ cursor: "pointer", marginRight: "10px" }}
                  />
                </div>
              </div>
            </div>

            {/* Share icon to copy URL to clipboard */}
            {/* <ShareIcon onClick={copyToClipboard} style={{ cursor: "pointer" }} /> */}
          </Grid>
        </Grid>
      </Stack>
      {popUp && <DonationHistory closeModal={closeModal} />}
    </div>
  );
};

export default DonationDetails;
