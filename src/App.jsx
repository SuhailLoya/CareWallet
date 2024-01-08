import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import DonationList from "./Components/DonationList/DonationList";
import DonationDetails from "./Components/DonationDetails/DonationDetails";
import NFT from "./Components/NFTPage/NFT";
import Chatbox from "./Components/NFTPage/Chatbox/Chatbox";
import CreateDonation from "./Components/CreateDonation/CreateDonation";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MyProvider } from "./hooks/MyProvider";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <MyProvider>
          <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route path="*" element={<Home />}></Route>
              <Route path="/donate" element={<DonationList />}></Route>
              <Route
                path="/donation/user1"
                element={<DonationDetails />}
              ></Route>
              <Route path="/create" element={<CreateDonation />}></Route>
              <Route path="/mynft" element={<NFT />}></Route>
              <Route path="/chat" element={<Chatbox />}></Route>
            </Routes>
          </BrowserRouter>
        </MyProvider>
      </div>
    </LocalizationProvider>
  );
}

export default App;
