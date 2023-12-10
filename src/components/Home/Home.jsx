import { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import NavigationProductSection from '../NavigationProduct/NavigationProductSection'
import Slider from '../Slider/Slider'
import ProductSection from '../ProductSection/ProductSection'
import ProductSectionVertical from '../ProductSection/ProductSectionVertical'
import AdvImg from '../AdvImg/AdvImg'
import Footer from '../Footer/footer'
import homeKitchenData from '../../Json/HomeKitchen.json'
import sliderData from '../../Json/Slider.json'
import electronics from '../../Json/Electronics.json'
import winterData from '../../Json/winter.json'
import toyandbeauty from '../../Json/ToyandBeauty.json'

import TopStory from '../TopStories/TopStory'
import MostsearchedData from '../../Json/TopStory/MostSearched.json'
import mobilesData from '../../Json/TopStory/mobiles.json'
import cameradata from '../../Json/TopStory/camera.json'
import laptopData from '../../Json/TopStory/laptop.json'
import TVdata from '../../Json/TopStory/TV.json'
import largeAplliancesData from '../../Json/TopStory/largeAppliances.json'
import clothingData from '../../Json/TopStory/clothing.json'
import footwareData from "../../Json/TopStory/footware.json";
import groceryData from "../../Json/TopStory/grocery.json";
import bestSellingData from "../../Json/TopStory/bestSelling.json";
import furnitureData from "../../Json/TopStory/furniture.json";
import BGMHdata from "../../Json/TopStory/BGMH.json";
import TopStorySection from '../TopStories/TopStorySection'

function Home() {
  const [count, setCount] = useState(0)
  console.log(sliderData)
  return (
    <>
      <Navigation />

      <NavigationProductSection />
      <Slider sliderImages={sliderData} />
      <ProductSection category="Best of Electronics" products={electronics} />
      <ProductSection
        category="Beauty, Food, Toys & more"
        products={toyandbeauty}
      />
      <ProductSection
        category="Home & Kitchen Essentials"
        products={homeKitchenData}
      />

      <div className="flex">
        <ProductSectionVertical
          category="Winter Essentials"
          products={winterData}
        />

        <AdvImg imageUrl={"./images/AdvImg/smartphone.png"} />
      </div>

      <ProductSectionVertical
        category="Winter Essentials"
        products={winterData}
      />
      <ProductSectionVertical
        category="Winter Essentials"
        products={winterData}
      />

      <ProductSectionVertical
        category="Winter Essentials"
        products={winterData}
      />
      <ProductSection
        category="Sports, Healthcare & more"
        products={toyandbeauty}
      />
      <ProductSection
        category="Grooming, Books, Auto & more"
        products={toyandbeauty}
      />
      <ProductSection category="Fashion Top Deals" products={toyandbeauty} />
      <ProductSection category="Top Deals" products={toyandbeauty} />

      <ProductSection
        category="Top Deals on TVs and Appliances"
        products={toyandbeauty}
      />
      <ProductSection category="Fashion Best Seller" products={toyandbeauty} />

      <TopStorySection>
        <TopStory
          title={"Most searched  for on flipkart"}
          data={MostsearchedData}
        />
        <TopStory title={"Mobiles"} data={mobilesData} />
        <TopStory title={"Cameras"} data={cameradata} />
        <TopStory title={"Laptop"} data={laptopData} />
        <TopStory title={"TVs"} data={TVdata} />
        <TopStory title={"Large Appliances"} data={largeAplliancesData} />
        <TopStory title={"Clothing"} data={clothingData} />
        <TopStory title={"footware"} data={footwareData} />
        <TopStory title={"grocery"} data={groceryData} />
        <TopStory title={"Best Selling on flipkart"} data={bestSellingData} />
        <TopStory title={"Furniture"} data={furnitureData} />
        <TopStory title={"BGMH"} data={BGMHdata} />
      </TopStorySection>
      <Footer />
    </>
  );
}

export default Home
