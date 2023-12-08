import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { setProduct } from '../../store/product';
import { useDispatch } from 'react-redux';
function Product({product}) {

  const dispatch = useDispatch();

  const category = useParams()
  return (
    <div
      className="group p-4 bg-white hover:shadow-2xl hover:z-10   "
      onClick={() => dispatch(setProduct(product))}
    >
      <Link to={`${product.id}`}>
        <div className="  h-72 w-full flex items-center justify-center">
          <img
            src={product.images[0]}
            alt=""
            className="border max-h-full minn-w-full"
          />
        </div>
        <div>
          <div className="group-hover:text-[#2874F0]">
            {product.title.length > 60 ? product.title.slice(0, 60) + '...' : product.title}
          </div>
          <div>
            <div className=" flex flex-col  gap-2">
              <div className="flex gap-2 ">
                <div className="bg-[#388E3C] rounded-md p-[3px] font-[600] text-xs text-white flex items-center gap-1">
                  <span className="">{product.rating}</span>
                  <span className="">
                    <img
                      src="images/star.svg"
                      alt=""
                      className="w-full h-full"
                    />
                  </span>
                </div>
                <div className="text-sm text-gray-500 font-medium">{`(9,999)`}</div>
              </div>
              <div className="flex items-center gap-2 flex-wrap ">
                <div className="font-semibold">
                  {product.price.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 0,
                  })}
                </div>
                <div className="line-through text-sm text-gray-500 ">
                  ₹28,000
                </div>
                <div className="text-xs font-[500]  text-[#388E3C] ">
                  71% Off
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product
