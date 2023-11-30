import React from 'react'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <Link to={'productDetails'}>
      <div className="w-72 h-[30rem] p-2 bg-white hover:shadow-xl hover:shadow-slate-600    ">
        <div>
          <img src={product.img} alt="" />
        </div>
        <div>
          <div>{product.name}</div>
        </div>
      </div>
    </Link>
  );
}

export default Product
