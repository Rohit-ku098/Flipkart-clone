import React from 'react'
import Product from '../Product/Product'
import products from "../../Json/DummyProducts/dummyProduct.json";
import { useParams } from 'react-router-dom';

function ProductPage() {

  const {product} = useParams()
  return (
    <div className=''>
      showin results for : {product} 
      
      {products.map((product)=>(<Product product={product}/>))}

    </div>
  )
}

export default ProductPage
