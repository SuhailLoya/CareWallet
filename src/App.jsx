import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from "./Components/Home/Home";
import DonationList from "./Components/DonationList/DonationList";
import DonationDetails from "./Components/DonationDetails/DonationDetails";

function App() {
  return(
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='*' element={<Home/>}></Route>
            <Route path='/Donate' element={<DonationList/>}></Route>
            <Route path='/donation/user1' element={<DonationDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
