import React from "react";
import Layout from "../Components/Layout";
import { useSelector } from "react-redux";
import { BsArrowReturnLeft } from "react-icons/bs";
import { Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import DetailsComponent from "../Components/DetailsComponent";
import { useNavigate } from "react-router-dom";

const ProductDetailsPage = () => {
  const [modifiedCocktails, setModifiedCocktails] = useState([]);
  const { cocktail } = useSelector((state) => state.cocktailState);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(cocktail, "@@");
    if (cocktail) {
      const modifiedCocktails = {
        id: cocktail.idDrink,
        image: cocktail.strDrinkThumb,
        name: cocktail.strDrink,
        description: cocktail.strInstructions,
      };
      setModifiedCocktails(modifiedCocktails);
    }
  }, [cocktail]);

  return (
    <>
      <Layout>
        {!modifiedCocktails.id && (
          <div className="detail-parent-div">
            <h3>No Product found</h3>
          </div>
        )}
        {modifiedCocktails.id && (
          <div className="detail-parent-div">
            <DetailsComponent modifiedCocktails={modifiedCocktails} />
          </div>
        )}
        <div className="return-button">
          <Button variant="contained" onClick={(e) => navigate("/")}>
            <BsArrowReturnLeft style={{ marginRight: "10" }} />
            <Typography style={{ display: "inline-block" }}>return</Typography>
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetailsPage;
