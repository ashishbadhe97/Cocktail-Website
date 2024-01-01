import React, { useState } from "react";
import Layout from "../Components/Layout";
import MainComponent from "../Components/MainComponent";
import { useEffect } from "react";
import { fetchCocktails } from "../Redux/Slices/cockailSlice";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Components/Loading";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { cocktailAction } from "../Redux/Slices/cockailSlice";

const HomePage = () => {
  const { loading, cocktails, error } = useSelector(
    (state) => state.cocktailState
  );
  const [modifiedCocktails, setModifiedCocktails] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);

  useEffect(() => {
    if (cocktails.length) {
      const modifiedCocktails = cocktails.map((item) => {
        return {
          id: item.idDrink,
          image: item.strDrinkThumb,
          name: item.strDrink,
          description: item.strInstructions,
        };
      });
      setModifiedCocktails(modifiedCocktails);
    }
  }, [cocktails]);

  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Layout>
        <div class="outer">
          <div className="flexbox-div">
            {
              <div className="search-container">
                <div className="search-box">
                  <InputBase
                    sx={{ ml: 1, flex: 3 }}
                    placeholder="Search cocktail..."
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                      dispatch(cocktailAction.searchCocktails(e.target.value));
                    }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px", flex: 1 }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </div>
              </div>
            }
            {loading && <Loading />}
            {!loading && error && <h3>{error}</h3>}
            {!loading && !error && (
              <MainComponent modifiedCocktails={modifiedCocktails} />
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
