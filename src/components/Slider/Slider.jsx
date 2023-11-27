
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import './slider.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderBtn from "./sliderbtn";


// import required modules


function Slider({sliderImages=[]}) {
  // const sliderImages = ['1.webp', '2.webp', '3.webp', '4.webp']

  return (
    <div className="h-56 m-4 bg-white relative z-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderImages.map((image) => (
          <SwiperSlide>
            <img src={`${image}`} alt="" />
          </SwiperSlide>
        ))}

        <SliderBtn />
      </Swiper>
    </div>
  );
}

export default Slider;