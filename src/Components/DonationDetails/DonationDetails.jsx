import { useState } from "react";
// import classes from "./DonationDetails.module.css";
import DonationHistory from "./DonationHistory/DonationHistory";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ShareIcon from "@mui/icons-material/Share";
import HistoryIcon from "@mui/icons-material/History";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

const dummyDetail = {
  title: "Bring Abbas Back Home",
  image:
    "https://th.bing.com/th/id/R.b7b329d535dfb28ec56e54b9d080eeb3?rik=pQGrW27P%2baxQWg&riu=http%3a%2f%2fvirginiazoo.org%2fwp-content%2fuploads%2f2013%2f03%2fred-panda-1-e1480367081955.jpg&ehk=TxExe8MRYO6F5%2bz5yWNBVuEogyq2%2fepjeMEO8TVP2QM%3d&risl=&pid=ImgRaw&r=0",
  target: 10000,
  amountCollected: 4000,
  description:
    "John, a resilient individual in his mid-fifties, is currently facing a critical health challenge—a deteriorating heart condition that necessitates immediate medical intervention. His doctors have diagnosed him with a severe cardiac ailment, compelling the need for an urgent heart bypass surgery. Over the past few months, John has struggled with escalating health complications, impeding his daily activities and profoundly impacting his quality of life. The upcoming surgery is a beacon of hope, a pivotal opportunity to restore his health and vitality, allowing him to resume a fulfilling life with his loved ones. However, the substantial expenses associated with this complex medical procedure, coupled with subsequent medication and post-operative care, have placed an overwhelming financial burden on John and his family.",
  deadline: "", //supposedly they will send us as a string and we just display
  hospitalName: "Kumaraguru s/o Sreenivasan",
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
      <Stack spacing={4}>
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
            <Stack spacing={2}>
              {/* Image filling the entire width */}
              <img
                src={donDet.image}
                alt="Image Details"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "2em",
                  aspectRatio: "2/1",
                  boxShadow: 5,
                }}
              />
              <Divider />

              <Typography
                variant="body1"
                component="div"
                style={{ fontWeight: "bold" }}
              >
                {donDet.hospitalName}
                <Box sx={{ fontWeight: 700, m: 1 }} display="inline">
                  is organising this Campaign
                </Box>
              </Typography>

              <Divider />
              <Typography variant="body1" style={{ textAlign: "justify" }}>
                {donDet.description}
              </Typography>
            </Stack>
          </Grid>
          {/* Second Grid Item (40%) */}
          <Grid
            item
            xs={5}
            container
            direction="column"
            alignItems="flex-start"
            // style={{
            //   flex: 1,
            // }}
          >
            <Paper
              elevation={10}
              square={false}
              style={{
                width: "100%",
                // flex: 1,
                padding: "1.5em",
                boxSizing: "border-box",
                borderRadius: "2em",
              }}
            >
              {/* Left-aligned "Raised" text */}
              <Typography variant="h5" gutterBottom>
                Raised: {donDet.amountCollected} / {donDet.target}{" "}
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
                  value={(donDet.amountCollected / donDet.target) * 100}
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
                  style={{
                    flex: "1 0 auto",
                    borderRadius: 20,
                    margin: 10,
                    fontSize: "1rem",
                  }}
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
            </Paper>
          </Grid>
        </Grid>
      </Stack>
      {popUp && <DonationHistory closeModal={closeModal} />}
    </div>
  );
};

export default DonationDetails;
