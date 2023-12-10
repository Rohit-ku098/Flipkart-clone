import { useContext } from "react";
import DropdownList from "../../DropdownList/DropdownList";
import Titletext from "../../Titletext/Titletext";

function NavigationProduct({
    productName,
    imageUrl,
    isDropdown,
    list
}){
  
    return (
      <div>
        <div className="flex flex-col items-center cursor-pointer group">
          <img src={imageUrl} alt="" className="w-16" />
          <Titletext title={productName} isDropdown={isDropdown} />
          {isDropdown ? <DropdownList list={list}  /> : ""}
        </div>
        <div></div>
      </div>
    );
}

export default NavigationProduct;