import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';



const PatientCard = (props) => {

  return (
    <Card sx={{ maxWidth: "100%", margin: 1}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.imgUrl}
          alt="green iguana"
        />
        <CardContent sx={{height: '150px'}}>
          <Typography gutterBottom variant="h6" component="div" textOverflow="ellipsis">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" c sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%',
              height: '100px'
          }}>
            {props.CrowdfundingDetails}
          </Typography>
        </CardContent>
        <Box sx={{padding: "1rem"}}>
          ${props.FundsNeeded}
          <LinearProgress variant="determinate" value={25} sx={{ padding: '0 1rem' }}/>
        </Box>
      </CardActionArea>
    </Card>
    );
}

export default PatientCard