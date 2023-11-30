import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import ProductPage from './components/ProductPage/ProductPage.jsx'
import Product from './components/Product/Product.jsx'

// const id='rohit'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  >
      <Route path='' element={<Home/>} />
      <Route path={`/:product`} element={<Layout />} >
        <Route path={``} element={<ProductPage/>}/>
        <Route path={`/:product/:productDetails`} element={<ProductPage/>}/>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
