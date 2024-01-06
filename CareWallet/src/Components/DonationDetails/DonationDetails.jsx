import { useState } from "react"
import classes from './DonationDetails.module.css'
import DonationHistory from "./DonationHistory/DonationHistory";

const DonationDetails = () => {
    const [popUp, setPopUp] = useState(false);

    const closeModal = () => {
        setPopUp(false);
    }

    return (
        <div>
            <button className={classes.button} onClick={() => {setPopUp(true)}}>Donation History</button>
            <h1>hey</h1>
            {popUp && <DonationHistory closeModal={closeModal}/>}
        </div>
    )
}

export default DonationDetails