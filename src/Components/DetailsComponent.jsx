import { Typography } from "@mui/material";
import React from "react";

const DetailsComponent = ({ modifiedCocktails }) => {
  
  return (
    <div className="div-inner">
      <div className="detail-img">
        <img src={modifiedCocktails.image} alt={modifiedCocktails.name}></img>
      </div>
      <div className="details-inner-div">
        <div>
          <Typography style={{ display: "inline-block" }}>id :</Typography>&nbsp;
          <Typography style={{ display: "inline-block" }}>
            {modifiedCocktails.id}
          </Typography>
        </div>
        <div>
          <Typography style={{ display: "inline-block" }}>Name :</Typography>&nbsp;
          <Typography style={{ display: "inline-block" }}>
            {modifiedCocktails.name}
          </Typography>
        </div>
        <div>
          <Typography style={{ display: "inline-block" }}>
            Description :
          </Typography>
          <Typography style={{ display: "inline-block" }}>
            {modifiedCocktails.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default DetailsComponent;
