import Titletext from "../../Titletext/Titletext";

function NavigationProduct({
    productName,
    imageUrl,
    isDropdown
}){
    return(
        <div>
            <div className="flex flex-col items-center cursor-pointer group">
                <img src={imageUrl} alt=""  width={'70px'}/>
                <Titletext 
                    title={productName}
                    isDropdown={isDropdown}
                />
            </div>
            <div></div>
        </div>
    )
}

export default NavigationProduct;