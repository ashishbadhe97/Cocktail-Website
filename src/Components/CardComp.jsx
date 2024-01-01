import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cocktailAction } from "../Redux/Slices/cockailSlice";

const CardComp = ({ id, name, image, description }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDetailsPageClick = (e) => {
    dispatch(cocktailAction.productDetails(id));
    navigate(`/products/${id}`);
  }

  return (
    <Card className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-button">
        <Button size="small" color="primary" variant="contained" onClick={handleDetailsPageClick}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComp;
