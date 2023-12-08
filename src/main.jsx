import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import ProductPage from "./components/ProductPage/ProductPage.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import { DummyProducts } from "./components/ProductPage/ProductPage.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Navigation from "./components/Navigation/Navigation.jsx";
// const id='rohit'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/Flipkart-clone">
      <Route path="" element={<Home />} />
      <Route path={`/Flipkart-clone/:category`} element={<Layout />}>
        <Route path={``} loader={DummyProducts} element={<ProductPage />} />
        <Route path={`:id`} element={<ProductDetails />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
