import React from 'react'
import CartProduct from './CartProduct'
import { useSelector } from 'react-redux';
import Navigation2 from '../Navigation/Navigation2';


function Cart() {
     const cartProducts = useSelector((state) => state.cartProducts.cartProducts);
     console.log(cartProducts);

     const price = cartProducts.reduce(
       (prev, curr) => prev + curr.originalPrice,
       0
     );

     const discountPrice = cartProducts.reduce(
       (prev, curr) => prev + curr.originalPrice - curr.price,
       0
     );

     const totalPrice = price - discountPrice;

  return (
    <div className="mt-20">
      <Navigation2 />
      <div className=" w-full flex justify-center ">
        <div className=" flex gap-7 justify-between">
          <div className=" border bg-white">
            {cartProducts.map((product) => (
              <CartProduct product={product} key={product.id} />
            ))}
          </div>

          <div className="w-96 h-80 bg-white border sticky top-20">
            <h2 className="py-4 px-4 font-medium border-b text-gray-500">
              PRICE DETAILS
            </h2>

            <div className="p-4 px-8">
              <div className="my-2 flex justify-between font-Roboto ">
                <div className="">Price {`(${cartProducts.length} items)`}</div>
                <div>
                  {price.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 0,
                  })}
                </div>
              </div>

              <div className="my-4 flex justify-between font-Roboto">
                <div className="">Discount</div>
                <div className="text-[#388E3C]">
                  -
                  {discountPrice.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 0,
                  })}
                </div>
              </div>

              <div className="my-4 flex justify-between font-Roboto">
                <div className="">Delivery Charge</div>
                <div className="">
                  <span className={`${totalPrice >= 500 ? 'line-through text-gray-500' : ''}`}>
                    {(cartProducts.length * 40).toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                    })}
                  </span>
                  {
                    totalPrice >= 500 ? (<span className="text-[#388E3C]"> Free</span>) : ''
                  }
                </div>
              </div>

              <div className="my-4 py-4 flex justify-between text-xl font-medium border-t border-b ">
                <div className="">Total Amount</div>
                <div className="">
                  {totalPrice.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 0,
                  })}
                </div>
              </div>
              <div className="font-medium text-[#388E3C] ">
                You will Save{" "}
                {discountPrice.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                  minimumFractionDigits: 0,
                })}{" "}
                on this order
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default Cart
