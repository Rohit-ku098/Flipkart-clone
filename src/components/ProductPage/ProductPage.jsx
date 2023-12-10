import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import products from "../../Json/DummyProducts/dummyProduct.json";
import { useLoaderData, useParams } from 'react-router-dom';
import useSortProducts from '../../hooks/useSortProducts';


function ProductPage() {
  //data from api
  // const products = useLoaderData()
  console.log( products);

  const {category} = useParams()
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
  const [filteredProduct, setFilteredProduct] = useState(products);
  const [priceFilteredProduct, setPriceFilteredProduct] = useState(products);
  const [ratingFilteredProduct, setRatingFilteredProduct] = useState(products);
  const [isPriceFilter, setIsPriceFilter] = useState(false)
  const [isFilterApplied, setIsFilterApplied] = useState(false)
  const [sortType, setSortType] = useState('')
  const [isSorted, setIsSorted] = useState(false)
  const toNum = (str) => str.replace(/[^0-9]/g, "");
  

  // SORTING
  const sortProducts = () => {
    useSortProducts(products, sortType)
    setIsSorted((prev) => !prev)
    console.log(sortType)
  }

  useEffect(()=>{
    sortProducts()
  },[sortType])
  
  const minOption = (e) => {
    setMin(e.target.value)
    if(Number.parseInt(toNum(e.target.value)) > 0)
      setIsPriceFilter(true);
  }
  const maxOption = (e) => {
    setMax(e.target.value)
    if (
      Number.parseInt(toNum(e.target.value)) <
      Number.parseInt(toNum(priceRange[priceRange.length-1]))
    )
      setIsPriceFilter(true);
  }

  // filter on basis of price
  useEffect(()=>{
    let minVal = Number.parseInt(toNum(min));
    let maxVal = Number.parseInt(toNum(max));

    if (min === priceRange[0]) minVal = 0;
    if (max === priceRange[priceRange.length - 1]) maxVal = Number.MAX_VALUE;

    setPriceFilteredProduct(
      products.filter((prod) =>
        prod.price > minVal &&
        prod.price <= maxVal
          ? prod
          : ""
      )
    );
  }, [min, max, isSorted])
  
  //filter on basis of rating
  useEffect(()=>{
    console.log(rating);
    setRatingFilteredProduct(
      products.filter((prod) => (prod.rating >= rating ? prod : ""))
    );
  },[rating, isSorted])

  // Final filtered products
  useEffect(()=>{
    setFilteredProduct(
      products.filter((prod) =>
        priceFilteredProduct.includes(prod) && ratingFilteredProduct.includes(prod)  ? prod : ''
      )
    );

    if(isPriceFilter || rating)
      setIsFilterApplied(true)
    else
      setIsFilterApplied(false)

  }, [priceFilteredProduct, ratingFilteredProduct, isSorted])

  const clearPriceFilter = ()=> {
    setMin(priceRange[0])
    setMax(priceRange[priceRange.length-1])
    setPriceFilteredProduct(products)
    setIsPriceFilter(false)
    console.log(isPriceFilter)
  }

  const clearRatingFilter = () => {
    setRatingFilteredProduct(products)
    setRating(0)

  }
  const clearAllFilter = () => {
    clearPriceFilter()
    clearRatingFilter()
    setIsFilterApplied(false)
  }

  return (
    <div className="flex flex-col m-4">
      {/* <div className="">showing results for : {category}</div> */}
      <div className="flex">
        <div className=" w-[15rem] bg-white me-">
          {/* filter */}
          <div className="p-3 border-b-2">
            <div className="flex justify-between items-center">
              <h3 className=" font-medium text-xl ">Filters</h3>
              <h3
                className={`text-[#2874F0] text-xs font-medium cursor-pointer ${
                  isFilterApplied ? "visible" : "invisible"
                }`}
                onClick={clearAllFilter}
              >
                CLEAR ALL
              </h3>
            </div>
            <div>{/* filters */}</div>
          </div>
          <div className="p-3 border-b-2 text-xs font-semibold ">
            <div className="flex justify-between p-1">
              <h3>PRICE</h3>
              <h3
                className={`text-[#2874F0] cursor-pointer ${
                  isPriceFilter ? "visible" : "invisible"
                } `}
                onClick={clearPriceFilter}
              >
                CLEAR
              </h3>
            </div>
            {/* <div className="relative h-6">
              <input
                type="range"
                value={minVal}
                min={0}
                max={60000}
                onChange={(e) => setMin(e.target.value)}
                className="absolute  w-40 backdrop-blur-2xl"
              />
              <input
                type="range"
                value={maxVal}
                min={0}
                max={60000}
                onChange={(e) => setMax(e.target.value)}
                className="absolute top-3 w-40 "
                step={6}
              />
            </div> */}
            <div className="flex justify-between">
              <select
                className="text-sm border p-1 w-24"
                value={min}
                onChange={minOption}
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
                onChange={maxOption}
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
                  4 <img src="./images/star.svg" className="w-4 invert " alt="" />&
                  above
                </label>
                <label htmlFor="3star" className="flex gap-1 items-center">
                  <input
                    type="checkbox"
                    id="3star"
                    onChange={() => setRating(3)}
                    checked={rating === 3}
                  />
                  3 <img src="./images/star.svg" className="w-4 invert " alt="" />&
                  above
                </label>
                <label htmlFor="2star" className="flex gap-1 items-center">
                  <input
                    type="checkbox"
                    id="2star"
                    onChange={() => setRating(2)}
                    checked={rating === 2}
                  />
                  2 <img src="./images/star.svg" className="w-4 invert " alt="" />&
                  above
                </label>
                <label htmlFor="1star" className="flex gap-1 items-center">
                  <input
                    type="checkbox"
                    id="1star"
                    onChange={() => setRating(1)}
                    checked={rating === 1}
                    className=''
                  />
                  1 <img src="./images/star.svg" className="w-4 invert " alt="" />&
                  above
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full ms-3">
          <div className="  bg-white">
            <h2 className=" p-3 pb-0 text-lg font-medium">{category}</h2>
            <div className="flex gap-2 text-sm border-b-2">
              <div className=" p-3 font-medium ">Sort By</div>
              <div className={`p-3 cursor-pointer ${sortType === 0 ? 'border-b-2 font-medium text-blue-600': ''} border-blue-600 `} onClick={() => setSortType(0)} >Popularity</div>
              <div className={`p-3 cursor-pointer ${sortType === 1 ? 'border-b-2 font-medium text-blue-600': ''} border-blue-600 `} onClick={() => setSortType(1)} >Price -- High to Low</div>
              <div className={`p-3 cursor-pointer ${sortType === 2 ? 'border-b-2 font-medium text-blue-600': ''} border-blue-600 `} onClick={() => setSortType(2)} >Price -- Low to High</div>
              <div className={`p-3 cursor-pointer ${sortType === 3 ? 'border-b-2 font-medium text-blue-600': ''} border-blue-600 `} onClick={() => setSortType(3)} >Newest First</div>
            </div>
          </div>
          <div className="  grid grid-cols-4 self-stretch w-full ">
            {filteredProduct.map((prod) => (
              <Product product={prod} key={prod.id} />
            ))}
          </div>
          {filteredProduct.length == 0 ? (
            <div className="col-span-4 self-center w-full text-center text-3xl font-medium ">
              No Result Found
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductPage

export const DummyProducts = async ()=>{
  const products = await fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res)=> res.products)
  .catch(res => "ERROR: Network error")

  return products
}