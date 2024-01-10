import { Typography } from '@mui/material';
import classes from './DonationHistory.module.css'
import { DataGrid, gridClasses } from '@mui/x-data-grid';


const DonationHistory = (props) => {
    const columns = [
        { field: 'activityName', headerName: 'Name', flex : 1, filterable: false},
        { field: 'TotalFunds', headerName: 'Amount(XRP)', flex : 1},
        { field: 'date', headerName: 'Date', flex : 1},
    ];

    const rows = [
        { id: 1, activityName: 'Consultation', TotalFunds: '500', date: "12/2/2002" },
        { id: 2, activityName: 'Surgery', TotalFunds: '2000', date: "18/2/2002" },
        { id: 3, activityName: 'Consultation 2', TotalFunds: '500', date: "24/2/2000" },
    ];


    return (
        <div onClick={props.closeModal}>
            <div className={classes.popup} >
                <Typography sx={{paddingLeft: "0.5rem"}} variant='h5'>Previous crowdfunds created for this person</Typography>
                <DataGrid sx={{ m: 1,[`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
                outline: 'none',},[`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]:{outline: 'none',}, 
                }} rows={rows} columns={columns}/>
            </div>
        </div>
    )
}

export default DonationHistory