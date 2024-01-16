import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography, Paper, TextField, TextareaAutosize } from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import createFundraiser from "../../backend/createFundraiser";
import CircularIndeterminate from "../DonationList/loadingCircle";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useSharedState } from "../../hooks/MyProvider";

export default function CreateDonation() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFail, setisFail] = useState(false);
  const { sharedState, setSharedState } = useSharedState();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    target: "",
    description: "",
    deadline: null,
    hospitalName: "",
    hospitalWalletAddress: "",
  });

  async function runCreateFundraiser() {
    try {
      // Replace these parameters with the actual values you want to pass
      // const owner = "0x0A1be59620527b6e660D54dFe1Be664258c1DbD7";
      const owner = formData.hospitalWalletAddress;
      const title = formData.title;
      const description = formData.description;
      const amountNeeded = formData.target; // example value
      const deadline = formData.deadline.unix(); // example value
      await createFundraiser(owner, title, description, amountNeeded, deadline);
      // console.log("Fundraiser created successfully");
      // setIsLoading(false);
      setIsSuccess(true);
      setSharedState({ ...sharedState, initialised: false });
      setTimeout(() => {
        navigate(`/donate`);
      }, 3000);
    } catch (error) {
      console.error("Error in creating fundraiser:", error);
      setIsLoading(false);
      setisFail(true);
    }
  }

  const handleDateChange = date => {
    // console.log(date.unix());
    // console.log(Math.round(date.unix() / 1000));
    setFormData({ ...formData, deadline: date });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // console.log(`${name}: ${value}`);
  };

  const handleSubmit = event => {
    //TODO: Call appropriate API
    event.preventDefault();
    runCreateFundraiser();
    setIsLoading(true);
    // Perform actions with form data (e.g., send to backend)
    // console.log(formData);
  };

  return (
    <div
      style={{
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingTop: "20px",
        flex: "1",
      }}
    >
      <Helmet>
        <title>CareWallet - Create Donation</title>
      </Helmet>

      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularIndeterminate />
        </div>
      )}
      {isSuccess && (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert —{" "}
          <strong>
            Crowdfunding successfully created! Navigating back to Donation
          </strong>
        </Alert>
      )}
      {isFail && (
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert —{" "}
          <strong>Failed to create crowdfunding!</strong>
        </Alert>
      )}
      <Stack spacing={4}>
        <Typography
          variant="h3"
          component="div"
          align="center"
          fontWeight="bold"
          fontFamily="'Montserrat', sans-serif"
          paddingBottom="1rem"
        >
          Create Donation Request
        </Typography>

        <Paper
          elevation={10}
          square={false}
          style={{
            padding: "1.5em",
            borderRadius: "2em",
            margin: "auto",
            width: "60%",
            // overflow: "scroll"
          }}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                variant="outlined"
                sx={{ borderRadius: "0.5em" }} // Rounded corners
              />
              <TextField
                label="Target Amount"
                name="target"
                value={formData.target}
                onChange={handleChange}
                variant="outlined"
                type="number"
                sx={{ borderRadius: "0.5em" }} // Rounded corners
                helperText="in XRP"
                inputProps={{ min: 0, step: "1" }} // Set minimum value to 0
              />

              <TextareaAutosize
                minRows={5}
                placeholder="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={{ width: "100%", borderRadius: "0.5em" }} // Rounded corners
                required
              />
              <DatePicker
                label="Deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleDateChange}
                variant="outlined"
                type="date"
                sx={{ borderRadius: "0.5em" }} // Rounded corners
              />
              <TextField
                label="Hospital Name"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleChange}
                variant="outlined"
                sx={{ borderRadius: "0.5em" }} // Rounded corners
              />
              <TextField
                label="Hospital Wallet Address"
                name="hospitalWalletAddress"
                value={formData.hospitalWalletAddress}
                onChange={handleChange}
                variant="outlined"
                sx={{ borderRadius: "0.5em" }}
              />

              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Stack>
          </form>
        </Paper>
      </Stack>
    </div>
  );
}
