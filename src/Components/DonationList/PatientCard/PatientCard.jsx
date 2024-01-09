import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const PatientCard = props => {
  const navigate = useNavigate();

  const handleCardClick = event => {
    navigate(`/donation/${props.fundraiserId}`);
    // console.log("clicked");
  };

  return (
    <Card sx={{ maxWidth: "100%", margin: 1 }}>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="200"
          image={props.imgUrl}
          alt="green iguana"
        />
        <CardContent sx={{ height: "150px" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            textOverflow="ellipsis"
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            c
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%",
              height: "100px",
            }}
          >
            {props.CrowdfundingDetails}
          </Typography>
        </CardContent>
        <Box sx={{ padding: "1rem" }}>
          { props.FundsNeeded === 0 ? "Target fufilled!" : `Target: ${props.amountCollected}/${props.FundsNeeded + props.amountCollected} XRP`}
          <LinearProgress
            variant="determinate"
            value={
              props.amountCollected === 0
                ? 0
                : (props.amountCollected /
                    (props.FundsNeeded + props.amountCollected)) *
                  100
            }
            sx={{ padding: "0 1rem" }}
          />
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default PatientCard;
