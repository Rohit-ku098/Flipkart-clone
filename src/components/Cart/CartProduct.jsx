import React from 'react'
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../store/cartProductSlice';

function CartProduct({product}) {

   
  let deliveryDate = new Date()
  deliveryDate = new Date(deliveryDate.setDate(deliveryDate.getDate() + 3))

  const dispatch = useDispatch();


  const removeFromCart = () => {
    dispatch(removeProduct(product.id))
  

  }
  return (
    <div className="p-3 w-full  flex flex-col border-b">
      <div className="   flex ">
        <div className="w-28 h-28  flex justify-center items-center">
          <img
            src={product.images[0]}
            alt=""
            className="max-h-full max-w-full"
          />
        </div>
        <div className="p-2 flex flex-col  w-full">
          <div className="flex justify-between w-full  ">
            <h3 className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              {product.title}
            </h3>
            <p>Delivery by {deliveryDate.toDateString()} </p>
          </div>
          <div className="my-2 text-sm text-gray-500 ">
            <span>Seller:</span>
            <span>XYZ retails</span>
          </div>
          <div className="flex gap-3 items-center">
            <div className="line-through  text-gray-500 ">
              {product.originalPrice.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 0,
              })}
            </div>
            <div className="font-semibold text-xl">
              {product.price.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 0,
              })}
            </div>
            <div className=" font-[500] text-sm text-[#388E3C] ">71% Off</div>
          </div>
        </div>
      </div>
      <div className=" mt-4 flex gap-6 ">
        <div className="flex gap-2 font-medium">
          <button className="border border-gray-400 w-7 h-7 p-1 rounded-full flex items-center justify-center">
            -
          </button>
          <div className="border border-gray-400 w-12 h-7 p-1 flex items-center justify-center">
            1
          </div>
          <button className="border border-gray-400 w-7 h-7 p-1 rounded-full flex items-center justify-center">
            +
          </button>
        </div>
        <div className='flex gap-3 font-medium '>
          <span className='cursor-pointer'>SAVE FOR LATER</span>
          <span className='cursor-pointer' onClick={removeFromCart}>REMOVE</span>
        </div>
      </div>
    </div>
  );
}

export default CartProduct
