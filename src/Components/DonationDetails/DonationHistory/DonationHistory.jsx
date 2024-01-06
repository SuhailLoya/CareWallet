import { Typography } from '@mui/material';
import classes from './DonationHistory.module.css'
import { DataGrid, gridClasses } from '@mui/x-data-grid';


const DonationHistory = (props) => {
    const columns = [
        { field: 'activityName', headerName: 'Name', flex : 1, filterable: false},
        { field: 'TotalFunds', headerName: 'Amount', flex : 1},
        { field: 'date', headerName: 'Date', flex : 1},
    ];

    const rows = [
        { id: 1, activityName: 'Consultation', TotalFunds: '100', date: "12/2/2002" },
        { id: 2, activityName: 'Surgery', TotalFunds: '200', date: "13/2/2002" },
        { id: 3, activityName: 'Consultation 2', TotalFunds: '300', date: "12/2/2000" },
    ];


    return (
        <div className={classes.overlay} onClick={props.closeModal}>
            <div className={classes.popup} >
                <Typography variant='h4'>Donation History</Typography>
                <DataGrid sx={{ m: 1,[`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
                outline: 'none',},[`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]:{outline: 'none',}, 
                }} rows={rows} columns={columns}/>
            </div>
        </div>
    )
}

export default DonationHistory