import PatientCard from "./PatientCard/PatientCard"
import classes from "./DonationList.module.css"
import { NavLink } from "react-router-dom"
import dummyData from "./dummydata.json"
import userPhoto from '../../assets/anonymous.jpg'


const DonationPage = () => {
    return (
        <div className={classes.CardsContainer}>
            {dummyData.map((data, index) => (
                <NavLink to="/donation/user1" style={{width: "20%"}} key={index}><PatientCard FundsNeeded={data.FundsNeeded} imgUrl={userPhoto} title={data.Title} CrowdfundingDetails={data.CrowdfundingDetails} date={data.date} /></NavLink>
            ))}

        </div>
    )
}

export default DonationPage