import NavigationProduct from "./NavigatonProductCard/NavigationProduct"

function NavigationProductSection(){
    return (
      <div className=" bg-white m-4 mt-20 py-6 px-10 flex justify-center items-center gap-10">
        <NavigationProduct
          productName={"Grocery"}
          imageUrl={"/images/NavigationProductSection/grocery.webp"}
        />
        <NavigationProduct
          productName={"Mobiles"}
          imageUrl={"/images/NavigationProductSection/mobile.webp"}
        />
        <NavigationProduct
          productName={"Fashion"}
          imageUrl={"/images/NavigationProductSection/fashion.webp"}
          isDropdown={true}
        />
        <NavigationProduct
          productName={"Electronics"}
          imageUrl={"/images/NavigationProductSection/electronics.webp"}
          isDropdown={true}
        />
        <NavigationProduct
          productName={"Home & Furniture"}
          imageUrl={"/images/NavigationProductSection/homeAndFurniture.webp"}
          isDropdown={true}
        />
        <NavigationProduct
          productName={"Apliances"}
          imageUrl={"/images/NavigationProductSection/appliances.webp"}
        />
        <NavigationProduct
          productName={"Travel"}
          imageUrl={"/images/NavigationProductSection/travel.webp"}
        />
        <NavigationProduct
          productName={"Beauty, Toy & More"}
          imageUrl={"/images/NavigationProductSection/beautyToy.webp"}
          isDropdown={true}
        />
        <NavigationProduct
          productName={"Two Wheelers"}
          imageUrl={"/images/NavigationProductSection/TwoWheelers.webp"}
          isDropdown={true}
        />
      </div>
    );
}
export default NavigationProductSection