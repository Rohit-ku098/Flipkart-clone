import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from './productSlice';
import cartProductReducer from './cartProductSlice';
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version : 1,
  storage
}

const reducer = combineReducers({
  product: productReducer,
  cartProducts: cartProductReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer
});