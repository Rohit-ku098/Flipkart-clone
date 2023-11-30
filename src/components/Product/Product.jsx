import React from 'react'

function Product({product}) {
  return (
    <div className='w-72 h-[30rem] p-2 bg-white hover:shadow-xl hover:shadow-slate-600    '>
      <div>
        <img src={product.img} alt="" />
      </div>
      <div>
        <div>{product.name}</div>
      </div>
    </div>
  )
}

export default Product
