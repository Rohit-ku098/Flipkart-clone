import { useState } from "react";
import LoginCard from "../LoginCard/LoginCard";
import "./Navigation.css";
import NavDropdown from "./NavDropdown";

function Navigation2({ className }) {
  const [hovered, setHovered] = useState(false);
  const [dropdownHover, setDropdownhover] = useState(false);

  return (
    <header>
      <nav className={`${className} fixed top-0 z-50 shadow-md`}>
        <div className="right">
          <div className="w-20">
            <img src="images/logo-white.png" className="w-full h-full" alt="" />
          </div>
          <div className="flex items-center">
            <span className="text-white font-medium font-Roboto text-xs italic">
              Explore
            </span>
            <span className="text-[#FFE500] font-bold font-Roboto text-xs italic">
              Plus
            </span>
            <span>
              <img src="/Flipkart-clone/images/plus.png" alt="" width={11} />
            </span>
          </div>
        </div>
        <div className="w-1/3 search rounded-none flex justify-between">
          <input
            type="text"
            className=""
            placeholder="Search Products, Brands and More"
          />
          <i
            className="fa fa-search text-xl text-[#2874F0] "
            aria-hidden="true"
          ></i>
        </div>

        <div className="left flex items-center justify-between">
          <div
            className="login group bg-white px-5 py-1 flex items-center "
            onMouseOver={() => {
              setHovered(true);
            }}
            onMouseOut={() => {
              setHovered(false);
            }}
          >
            <div>
              <LoginCard hovered={hovered} />
            </div>
            <p className="font-medium text-[#2874F0]">Login</p>
          </div>

          <div className="seller hover:cursor-pointer flex items-center">
            <p className="font-medium  text-white font-Roboto">
              Become a Seller
            </p>
          </div>

          <div
            className="3dot  py-4 hover:cursor-pointer group/more "
            onMouseOver={() => {
              setDropdownhover(true);
            }}
            onMouseOut={() => {
              setDropdownhover(false);
            }}
          >
            <div className="text-white">More</div>
            <img src="/Flipkart-clone/images/dropdown.svg" alt="" className="group-hover/more:rotate-180 ease-in-out duration-200 invert translate-y-[2px]"/>
            <div className="relative">
              <NavDropdown hovered={dropdownHover} className={`w-60 top-10 right-[-6rem]`}/>
            </div>
          </div>

          <div className="cart hover:cursor-pointer flex items-center invert font-medium ">
            <img src="./images/header_cart.svg" className="" alt="" />
            <p>Cart</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation2;
