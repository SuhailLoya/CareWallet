import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography, Paper, TextField, Modal } from "@mui/material";
import { ethers } from 'ethers';
import Web3 from 'web3';



export default function DonationForm(props) {

  const handleSubmit = async event => {
      event.preventDefault();
      
      if (window.ethereum) {
        try {
          console.log(props.address);
          console.log(formData.target);
          // Request account access
          await window.ethereum.enable();
          const web3 = new Web3(window.ethereum);
  
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0];
  
          // Define transaction parameters
          const transactionParameters = {
              to: props.address, // Sending to self for testing
              value: web3.utils.toWei(formData.target, 'ether'), // Test amount
              from: account,
          };
  
          // Send the transaction
          web3.eth.sendTransaction(transactionParameters)
          .on('transactionHash', (hash) => {
            console.log('Transaction Hash:', hash);
            // Handle transaction hash
          })
          .on('confirmation', (confirmationNumber, receipt) => {
                  //24 confimrations
                  console.log('First Transaction Confirmation:', receipt);
                  // Handle first confirmation
                  // Optionally, stop listening for further confirmations
              
          })
          .on('error', (error) => {
            console.error('Transaction error:', error);
            // Handle errors
            // Notify user of failure
          });
          props.closeDonationForm();
    } catch (error) {
      console.error('Error:', error);
      // Handle errors, such as MetaMask not being installed
    }
      } else {
        console.log('MetaMask is not installed!');
      }
    };

    const [formData, setFormData] = useState({
        title: "",
        image: "",
        target: "",
        description: "",
        deadline: "",
        hospitalName: "",
    });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  return (
    <>
      <Modal
        open={props.isDonationForm}
        onClose={props.closeDonationForm}
        aria-labelledby="donation-form-title"
      >
        <Paper sx={modalStyle}>
          <Typography id="donation-form-title" variant="h6" component="h2">
            Create Donation Request
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} sx={{ mt: 2 }}>
              {/* Form fields here */}
              <TextField
                label="Target Amount"
                name="target"
                value={formData.target}
                onChange={handleChange}
                variant="outlined"
                type="number"
                helperText="in XRP"
                inputProps={{ min: 0, step: "0.000001"}} // Set minimum value to 0
              />
              <Button type="submit" variant="contained" color="primary" onSubmit={handleSubmit}>
                Submit
              </Button>
            </Stack>
          </form>
        </Paper>
      </Modal>
    </>
  );
}

