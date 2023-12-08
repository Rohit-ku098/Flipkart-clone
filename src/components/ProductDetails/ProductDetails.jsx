import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function ProductDetails() {
  const [imgIndex, setImgIndex] = useState(0)
  const [isPincodeEntered, setIsPincodeEntered] = useState(false)
  let date = new Date()
  date = new Date(date.setDate(date.getDate() + 3));
  
 

  const product = useSelector( state => state.product)
  console.log(product)
  return (
    <div className=" mx-20 p-3 flex justify-start relative  gap-3 bg-white">
      <div className="w-[35rem]  h-screen sticky top-14 flex ">
        <div className="flex flex-col  gap-2">
          {product.images.map((img, index) => (
            <div
              className=" w-16 h-14 p-1 hover:border-2 border-[#2874F0] flex justify-center items-center"
              onMouseOver={() => setImgIndex(index)}
            >
              <img src={img} alt="" className=" max-w-full max-h-full" />
            </div>
          ))}
        </div>
        <div>
          <div className="w-[25rem] h-[25rem] border p-3 flex justify-center items-center  bg-white">
            <img
              src={`${product.images[imgIndex]}`}
              alt=""
              className="max-w-full max-h-full"
            />
          </div>
          <div className="flex justify-between ">
            <button className="border w-48 h-14 my-2 font-medium text-white bg-[#FF9F00]">
              ADD TO CART
            </button>
            <button className="border w-48 h-14 my-2 font-medium text-white bg-[#FB641B]">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full p-3">
        <h2 className="my-2 font-Roboto text-lg">{product.title}</h2>
        <div>
          <div className=" my-2 flex gap-2 ">
            <div className="bg-[#388E3C] rounded-md p-[3px] font-[600] text-xs text-white flex items-center gap-1">
              <span className="">{product.rating}</span>
              <span className="">
                <img
                  src="/Flipkart-clone/images/star.svg"
                  alt=""
                  className="w-full h-full"
                />
              </span>
            </div>
            <div className="text-sm text-gray-500 font-medium">{`(9,999)`}</div>
          </div>
          <div className="my-2 flex items-center gap-2 flex-wrap ">
            <div className="font-semibold text-3xl">
              {product.price.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 0,
              })}
            </div>
            <div className="line-through  text-gray-500 ">₹28,000</div>
            <div className=" font-[500]  text-[#388E3C] ">71% Off</div>
          </div>
        </div>
        <div>
          <ul className="">
            <li className="font-medium text-lg m-2"> Available offers</li>
            <li className="my-2 flex items-center justify-start">
              <span className="w-5 mx-2 inline-block">
                <img
                  src="/Flipkart-clone/images/ProductDetails/offer.webp"
                  alt=""
                  className="h-full w-full"
                />
              </span>{" "}
              <span className="inline-block">
                <span className="font-medium">Bank Offer</span> 10% off on HDFC
                Bank Credit Card EMI Transactions, up to ₹1,500 on orders of
                ₹7,500 and above T&C
              </span>
            </li>
            <li className="my-2 flex items-center justify-start">
              <span className="w-5 mx-2 inline-block">
                <img
                  src="/Flipkart-clone/images/ProductDetails/offer.webp"
                  alt=""
                  className="h-full w-full"
                />
              </span>{" "}
              <span className="inline-block">
                <span className="font-medium">Bank Offer</span> 5% Cashback on
                Flipkart Axis Bank Card T&C
              </span>
            </li>
            <li className=" my-2 flex items-center justify-start">
              <span className="w-5 mx-2 inline-block">
                <img
                  src="/Flipkart-clone/images/ProductDetails/offer.webp"
                  alt=""
                  className="h-full w-full"
                />
              </span>{" "}
              <span className="inline-block">
                <span className="font-medium">Special Price</span> Get extra 29%
                off (price inclusive of cashback/coupon)T&C
              </span>
            </li>
            <li className=" my-2 flex items-center justify-start">
              <span className="w-5 mx-2 inline-block">
                <img
                  src="/Flipkart-clone/images/ProductDetails/offer.webp"
                  alt=""
                  className="h-full w-full"
                />
              </span>{" "}
              <span className="inline-block">
                Buy for 150 get ₹100 off your Next BuyT&C
              </span>
            </li>
          </ul>
        </div>

        <div>
          <div className=" mb-5 flex gap-10 font-Roboto">
            <h3 className="w-32 text-gray-500 ">Delivery</h3>
            <div>
              <div className="w-fit border-b-2 border-[#2874F0] flex gap-2 items-center">
                <i className="fa-solid fa-location-dot text-[#2874F0] text-xs"></i>
                <input
                  type="number"
                  className="outline-none "
                  placeholder="Enter Delivery Pincode"
                />
                <button type="submit" className="text-[#2874F0] cursor-pointer" onClick={()=>setIsPincodeEntered(true)}>
                  check
                </button>
              </div>
              <div>
                {isPincodeEntered ? (
                  <p className="text-sm ">Delivery by {date.toDateString()} </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className=" mb-5  flex gap-10 font-Roboto">
            <h3 className="w-32 text-gray-500 ">Features</h3>
            <ul className="ms-4 list-disc marker:text-gray-400">
              <li className="">Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </div>
          <div className=" mb-5  flex gap-10 font-Roboto">
            <h3 className="w-32 text-gray-500 ">Easy Payment Options</h3>

            <ul className="ms-4 list-disc marker:text-gray-400">
              <li className="">No cost EMI starting from ₹1,050/month</li>
              <li>Cash on Delivery</li>
              <li>Net banking & Credit/ Debit/ ATM card</li>
              <p className="text-[#0062ff] text-sm cursor-pointer">
                View Details
              </p>
            </ul>
          </div>
          <div className=" mb-5  flex gap-10 font-Roboto">
            <h3 className="w-32 text-gray-500 ">Selller</h3>
            <div className="flex flex-col">
              <p className="text-[#0062ff] cursor-pointer">XYZ retails</p>
              <ul className="ms-4 list-disc marker:text-gray-400 ">
                <li className="">7 Days Service Center Replacement/Repair</li>
                <li>GST invoice available</li>
                <p className="text-[#0062ff] text-sm cursor-pointer">
                  See Other Options
                </p>
              </ul>
            </div>
          </div>
          <div className="w-96 m-6">
            <img
              src="/Flipkart-clone/images/ProductDetails/superCoin.png"
              className="h-full w-full"
              alt=""
            />
          </div>
          <div className=" mb-5  flex  gap-10 font-Roboto">
            <h3 className="w-32 text-gray-500  ">Description</h3>
            <p className="w-full ms-4 ">{product.description}</p>
          </div>
        </div>
        <div className="">
          <h2 className="border p-7 text-2xl font-bold font-Roboto">
            Specifications
          </h2>
          <div className="border p-7">
            <h3 className="font-medium">General</h3>
            <table className="font-Roboto">
              <tbody>
                <tr className="flex gap-16 my-3">
                  <td className="w-32 text-gray-500">In The Box</td>
                  <td>
                    Phone,SIM Tray Ejector, Adapter, Phone Case, USB Cable
                  </td>
                </tr>
                <tr className="flex gap-16 my-3">
                  <td className="w-32 text-gray-500">Model Number</td>
                  <td>CPH2381</td>
                </tr>
                <tr className="flex gap-16 my-3">
                  <td className="w-32 text-gray-500">Colour</td>
                  <td>Blue Tide</td>
                </tr>
                <tr className="flex gap-16 my-3">
                  <td className="w-32 text-gray-500">Brouse Type</td>
                  <td>Smartphone</td>
                </tr>
                <tr className="flex gap-16 my-3">
                  <td className="w-32 text-gray-500">Sim Type</td>
                  <td>Dual Sim</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails
