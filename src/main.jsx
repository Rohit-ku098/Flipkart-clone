import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home.jsx";
import "./index.css";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import ProductPage from "./components/ProductPage/ProductPage.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import { DummyProducts } from "./components/ProductPage/ProductPage.jsx";
import Cart from "./components/Cart/Cart.jsx";
//redux-toolkit
import { Provider } from "react-redux";
import { store } from "./store/store.js";
//persist store
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// const id='rohit'
const persistor = persistStore(store)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/Flipkart-clone">
      <Route path="" element={<Home />} />
      <Route path="cart" element={<Cart/>}/>
      <Route path={`/Flipkart-clone/:category`} element={<Layout />}>
        <Route path={``}  loader={DummyProducts} element={<ProductPage />} />
        <Route path={`:id`} element={<ProductDetails />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
