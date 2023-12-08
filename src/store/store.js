import { configureStore } from "@reduxjs/toolkit";
import productReducer from './product'


export const store = configureStore({
    reducer : productReducer
})