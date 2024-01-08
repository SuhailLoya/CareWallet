import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography, Paper, TextField, TextareaAutosize } from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import createFundraiser from "../../backend/createFundraiser";

export default function CreateDonation() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    target: "",
    description: "",
    deadline: null,
    hospitalName: "",
  });
  async function runCreateFundraiser() {
    try {
      // Replace these parameters with the actual values you want to pass
      const owner = "0xa494b7Bb6332a70Fc6574431131ed08ADaD1F38a";
      const title = formData.title;
      const description = formData.description;
      const amountNeeded = formData.target; // example value
      const deadline = formData.deadline.unix(); // example value
      console.log(deadline);
      await createFundraiser(owner, title, description, amountNeeded, deadline);
      console.log("Fundraiser created successfully");
    } catch (error) {
      console.error("Error in creating fundraiser:", error);
    }
  }
  
  const handleDateChange = (date) => {
    setFormData({ ...formData, deadline: date });
  };
  

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(`${name}: ${value}`);
  };

  const handleSubmit = event => {
    //TODO: Call appropriate API
    event.preventDefault();
    runCreateFundraiser();
    // Perform actions with form data (e.g., send to backend)
    console.log(formData);
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
                label="Image URL"
                name="image"
                value={formData.image}
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
                inputProps={{ min: 0, step: "1"}} // Set minimum value to 0
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
