import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import products from "../../Json/DummyProducts/dummyProduct.json";
import { useParams } from 'react-router-dom';

function ProductPage() {

  const {product} = useParams()
  const priceRange = [
    "Min",
    "₹250",
    "₹500",
    "₹1000",
    "₹2000",
    "₹5000",
    "₹10000",
    "₹20000",
    "₹30000",
    "₹40000",
    "₹50000",
    "₹60000",
    "₹60000+",
  ];
  const [min, setMin] = useState('0')
  const [max , setMax] = useState(priceRange[priceRange.length-1])
  const [rating, setRating] = useState(0)
  
  const toNum = (str) => str.replace(/[^0-9]/g, "");
  
  const [filteredProduct, setFilteredProduct] = useState(products);
  const [priceFilteredProduct, setPriceFilteredProduct] = useState(products);
  const [ratingFilteredProduct, setRatingFilteredProduct] = useState(products);
  
  // filter on basis of price
  useEffect(()=>{
    let minVal = Number.parseInt(toNum(min));
    let maxVal = Number.parseInt(toNum(max));

    if (min === priceRange[0]) minVal = 0;
    if (max === priceRange[priceRange.length - 1]) maxVal = Number.MAX_VALUE;

    setPriceFilteredProduct(
      products.filter((prod) =>
        Number.parseInt(toNum(prod.price)) > minVal &&
        Number.parseInt(toNum(prod.price)) <= maxVal
          ? prod
          : ""
      )
    );
  }, [min, max])
  
  //filter on basis of rating
  useEffect(()=>{
    console.log(rating);
    setRatingFilteredProduct(
      products.filter((prod) => (prod.rating >= rating ? prod : ""))
    );
  },[rating])

  // Final filtered products
  useEffect(()=>{
    setFilteredProduct(
      priceFilteredProduct.filter((prod) =>
        ratingFilteredProduct.includes(prod) ? prod : ''
      )
    );
  }, [priceFilteredProduct, ratingFilteredProduct])

  return (
    <div className="flex flex-col m-4">
      <div className="">showing results for : {product}</div>
      <div className="flex">
        <div className=" w-[25rem] bg-white me-2">
          {/* filter */}
          <div className="p-3 border-b-2">
            <div className="flex justify-between items-center">
              <h3 className=" font-medium text-xl ">Filters</h3>
              <h3 className="text-[#2874F0] text-xs font-medium ">CLEAR ALL</h3>
            </div>
            <div>{/* filters */}</div>
          </div>
          <div className="p-3 border-b-2 text-xs font-semibold ">
            <div className="flex justify-between">
              <h3>PRICE</h3>
              <h3 className="text-[#2874F0]">CLEAR</h3>
            </div>
            <div>
              <input type="range" name="" id="" />
            </div>
            <div className="flex justify-between">
              <select
                className="text-sm border p-1 w-24"
                value={min}
                onChange={(e) => setMin(e.target.value)}
              >
                {priceRange.map((price) =>
                  Number.parseInt(toNum(price)) < Number.parseInt(toNum(max)) ||
                  price === priceRange[0] ? (
                    <option>{price}</option>
                  ) : (
                    ""
                  )
                )}
              </select>
              <select
                className="text-sm border p-1 w-24"
                value={max}
                onChange={(e) => setMax(e.target.value)}
              >
                {priceRange.map((price) =>
                  (Number.parseInt(toNum(price)) >
                    Number.parseInt(toNum(min)) ||
                    min === priceRange[0]) &&
                  price != priceRange[0] ? (
                    <option>{price}</option>
                  ) : (
                    ""
                  )
                )}
              </select>
            </div>
          </div>
          <div>
            <div className="p-3 border-b-2">
              <h3 className="font-medium text-[0.8rem]  ">CUSTOMER RATINGS</h3>
              <div>
                <label htmlFor="4star" className="flex gap-1 items-center">
                  <input
                    type="checkbox"
                    id="4star"
                    onChange={() => setRating(4)}
                    checked={rating === 4}
                  />
                  4 <img src="./images/star.svg" className="invert " alt="" />&
                  above
                </label>
                <label htmlFor="3star" className="flex gap-1 items-center">
                  <input
                    type="checkbox"
                    id="3star"
                    onChange={() => setRating(3)}
                    checked={rating === 3}
                  />
                  3 <img src="./images/star.svg" className="invert " alt="" />&
                  above
                </label>
                <label htmlFor="2star" className="flex gap-1 items-center">
                  <input
                    type="checkbox"
                    id="2star"
                    onChange={() => setRating(2)}
                    checked={rating === 2}
                  />
                  2 <img src="./images/star.svg" className="invert " alt="" />&
                  above
                </label>
                <label htmlFor="1star" className="flex gap-1 items-center">
                  <input
                    type="checkbox"
                    id="1star"
                    onChange={() => setRating(1)}
                    checked={rating === 1}
                  />
                  1 <img src="./images/star.svg" className="invert " alt="" />&
                  above
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 self-stretch">
          {filteredProduct.map((prod) => (
            <Product product={prod} key={prod} />
          ))}
          {/* {products.map((product) => 
           Number.parseInt( product.price ) > Number.parseInt(min) && Number.parseInt(product.price) <= Number.parseInt(max) ? <Product product={product} key={product}/> : ''
          )} */}
        </div>
      </div>
    </div>
  );
}

export default ProductPage
