import NavigationProduct from "./NavigatonProductCard/NavigationProduct"
import fashionList from '../../Json/Navlist/fashion.json'
import electronicsList from '../../Json/Navlist/electronics.json'
import HomeAndFurnitureList from '../../Json/Navlist/homeAndFurniture.json'
import beautyAndToy from '../../Json/Navlist/beautyToy.json'
import twoWheelersList from '../../Json/Navlist/twoWheelers.json'

function NavigationProductSection(){
 
    return (
      <div className=" bg-white m-4 mt-20 py-6 px-10 flex justify-center items-center gap-10">
        <NavigationProduct
          productName={"Grocery"}
          imageUrl={"./images/NavigationProductSection/grocery.webp"}
        />
        <NavigationProduct
          productName={"Mobiles"}
          imageUrl={"./images/NavigationProductSection/mobile.webp"}
        />
        <NavigationProduct
          productName={"Fashion"}
          imageUrl={"./images/NavigationProductSection/fashion.webp"}
          isDropdown={true}
          list={fashionList}
        />
        <NavigationProduct
          productName={"Electronics"}
          imageUrl={"./images/NavigationProductSection/electronics.webp"}
          isDropdown={true}
          list={electronicsList}
        />
        <NavigationProduct
          productName={"Home & Furniture"}
          imageUrl={"./images/NavigationProductSection/homeAndFurniture.webp"}
          isDropdown={true}
          list={HomeAndFurnitureList}
        />
        <NavigationProduct
          productName={"Apliances"}
          imageUrl={"./images/NavigationProductSection/appliances.webp"}
        />
        <NavigationProduct
          productName={"Travel"}
          imageUrl={"./images/NavigationProductSection/travel.webp"}
        />
        <NavigationProduct
          productName={"Beauty, Toy & More"}
          imageUrl={"./images/NavigationProductSection/beautyToy.webp"}
          isDropdown={true}
          list={beautyAndToy}
        />
        <NavigationProduct
          productName={"Two Wheelers"}
          imageUrl={"./images/NavigationProductSection/TwoWheelers.webp"}
          isDropdown={true}
          list={twoWheelersList}
        />
      </div>
    );
}
export default NavigationProductSection