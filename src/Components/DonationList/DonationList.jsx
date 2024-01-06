import PatientCard from "./PatientCard/PatientCard"
import classes from "./DonationList.module.css"
import { NavLink } from "react-router-dom"

const DonationPage = () => {
    return (
        <div className={classes.CardsContainer}>
            <NavLink to="/donation/user1" style={{width: "20%"}}><PatientCard/></NavLink>
            <NavLink to="/donation/user1" style={{width: "20%"}}><PatientCard/></NavLink>
            <NavLink to="/donation/user1" style={{width: "20%"}}><PatientCard/></NavLink>
            <NavLink to="/donation/user1" style={{width: "20%"}}><PatientCard/></NavLink>
            <NavLink to="/donation/user1" style={{width: "20%"}}><PatientCard/></NavLink>
            <NavLink to="/donation/user1" style={{width: "20%"}}><PatientCard/></NavLink>
            <NavLink to="/donation/user1" style={{width: "20%"}}><PatientCard/></NavLink>

        </div>
    )
}

export default DonationPage