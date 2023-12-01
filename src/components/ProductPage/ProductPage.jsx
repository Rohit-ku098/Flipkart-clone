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

  const toNum = (str) => str.replace(/[^0-9]/g, "");
  
  const [filteredProduct, setFilteredProduct] = useState(products);
  useEffect(()=>{
    
    // filter on basis of price
    let minVal = Number.parseInt(toNum(min));
    let maxVal = Number.parseInt(toNum(max));

    if(min === priceRange[0]) minVal = 0;
    if(max === priceRange[priceRange.length-1]) maxVal = Number.MAX_VALUE

    setFilteredProduct(products.filter(
      (prod) =>  
        Number.parseInt(toNum(prod.price)) > minVal &&
        Number.parseInt(toNum(prod.price)) <= maxVal ? prod : '' 
    ))

    //filter on basis of rating
    
    // console.log(Number.parseInt(toNum(min)), Number.parseInt(toNum(max)));
    // console.log(
    //   typeof Number.parseInt(toNum(min)),
    //   typeof Number.parseInt(toNum(max))
    // );

  }, [min, max])

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
            <div>
              <select
                className="text-sm"
                value={min}
                onChange={(e) => setMin(e.target.value)}
              >
                {priceRange.map((price) => (
                  <option>{price}</option>
                ))}
              </select>
              <select
                className="text-sm"
                value={max}
                onChange={(e) => setMax(e.target.value)}
              >
                {priceRange.map((price) => (
                  <option>{price}</option>
                ))}
              </select>
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
