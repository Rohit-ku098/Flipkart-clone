import React from "react";
import { useSwiper } from "swiper/react";


function SliderBtn({}){
    const swiper = useSwiper()
    return (
      <>
       
        <button
          className="w-10 rounded-e-lg h-24 absolute top-1/2 -translate-y-1/2 bg-white flex justify-center items-center z-10"
          onClick={() => swiper.slidePrev()}
        >
          <img
            src="/images/dropdown.svg"
            className="rotate-90"
            width={"20px"}
          />
        </button>

        <button
          className="w-10 rounded-s-lg h-24 absolute top-1/2 right-0 -translate-y-1/2 bg-white flex justify-center items-center z-10"
          onClick={() => swiper.slideNext()}
        >
          <img
            src="/images/dropdown.svg"
            className="-rotate-90"
            width={"20px"}
          />
        </button>
      </>
    );
}

export default SliderBtn;