import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  cocktailsList: [],
  cocktails: [],
  cocktail: [],
  error: null,
};

export const fetchCocktails = createAsyncThunk("getCocktails", () => {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  ).then((res) =>res.json());
});

const cocktailSlice = createSlice({
  name: "cocktailSlice",
  initialState,
  extraReducers: {
    [fetchCocktails.pending]: (state) => {
        state.loading = true
    },
    [fetchCocktails.fulfilled]: (state,action) => {
        state.loading = false;
        state.cocktails = action.payload.drinks
        state.cocktailsList = action.payload.drinks
    },
    [fetchCocktails.rejected]: (state,action) => {
        state.loading = false;
        state.error = "Something went wrong!"
    }
  },
  reducers: {
    productDetails: (state,action) => {
      if(state.cocktails.length){
        state.cocktail = state.cocktails.find(item => item.idDrink === action.payload);
      }
    },
    searchCocktails: (state,action) => {
      if(!action.payload){
        state.cocktails = state.cocktailsList;
      }else{
        const searchedProds = state.cocktailsList.filter((item) => {
          return item.strDrink.toLowerCase().includes(action.payload.toLowerCase());
        });
        if(!searchedProds.length){
          state.error = "No products found";
          return;
        }
        state.cocktails = searchedProds;
        state.error = null;

      }
    }
  }
});

export const cocktailAction =  cocktailSlice.actions;
export default cocktailSlice.reducer;
