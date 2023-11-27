import { useState } from "react";
import ProductCard2 from "../ProductCard/ProductCard2";

function ProductSectionVertical({ category = "Best of Electronics", products = [] }) {
  const [isNextClicked, setNextClick] = useState(false);
  const goToNext = () => {
    setNextClick(true);
  };
  const goToPrevious = () => {
    setNextClick(false);
  };
  return (
    <div className=" w-[calc(34%-2rem)]  ms-4 mb-4  bg-white p-3 relative inline-block">
      <div className="flex justify-between mb-8">
        <div className=" mt-3 text-xl font-medium"> {category}</div>
        <div className="mt-3 text-2xl bg-blue-700 rounded-full w-7 h-7 flex justify-center items-center ">
          <img
            src="images/dropdown.svg"
            alt=""
            className="-rotate-90 invert translate-x-0.5 "
            width={"20px"}
          />
        </div>
      </div>
      <div className={`flex gap-3 flex-wrap overflow-hidden  no-scrollbar `}>
        {products.map((data, index) =>
          index < 4 ? (
            <div
              className={` ${
                isNextClicked ? " -translate-x-52" : ""
              } ease-in-out duration-700`}
            >
              <ProductCard2
                key={data.name}
                name={data.name}
                price={data.price}
                imageUrl={data.imageUrl}
              />
            </div>
          ) : null
        )}
      </div>

      {/* {products.length > 7 ? (
        <button
          className={`w-10 rounded-s-lg h-24 absolute top-1/2 shadow-md  ${
            isNextClicked ? "left-0" : "right-0"
          } -translate-y-1/2 delay-150 bg-white flex justify-center items-center`}
          onClick={isNextClicked ? goToPrevious : goToNext}
        >
          <img
            src="/images/dropdown.svg"
            alt=""
            className={`${isNextClicked ? "rotate-90" : "-rotate-90"}`}
            width={"20px"}
          />
        </button>
      ) : null} */}
    </div>
  );
}
export default ProductSectionVertical;
