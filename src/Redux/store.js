import { configureStore } from "@reduxjs/toolkit";
import cockailSlice from "./Slices/cockailSlice";

const store = configureStore({
    reducer:{
        cocktailState: cockailSlice
    }
});

export default store;