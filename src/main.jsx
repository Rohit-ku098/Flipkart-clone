import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import ProductPage from './components/ProductPage/ProductPage.jsx'
import Product from './components/Product/Product.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'

// const id='rohit'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/Flipkart-clone"  >
      <Route path='' element={<Home/>} />
      <Route path={`/Flipkart-clone/:product`} element={<Layout />} >
        <Route path={``} element={<ProductPage/>}/>
        <Route path={`/Flipkart-clone/:product/:productDetails`} element={<ProductDetails/>}/>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
