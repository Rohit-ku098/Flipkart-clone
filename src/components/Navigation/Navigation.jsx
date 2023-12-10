import { useState } from 'react';
import LoginCard from '../LoginCard/LoginCard';
// import './Navigation.css'
import NavDropdown from './NavDropdown';
import { NavLink } from 'react-router-dom';
function Navigation({className}){

   const [hovered, setHovered] = useState(false)
   const [dropdownHover, setDropdownhover] = useState(false)

    return (
      <header>
        <nav
          className={`${className} w-full h-16 flex justify-around items-center fixed top-0 z-50 bg-white `}
        >
          <div className="right">
            <div className="logo ">
              <img src="images/logo.svg" alt=""  className='h-10'/>
            </div>
          </div>
          <div className="search  w-[45vw] py-1.5 px-4 flex items-center rounded-md text-lg bg-[#F0F5FF] ">
            <i
              className="fa fa-search text-xl text-[#717478] "
              aria-hidden="true"
            ></i>
            <input
              type="text"
              className="w-[90%] ms-3 bg-[#F0F5FF] outline-none placeholder:text-[#717478]"
              placeholder="Search Products, Brands and More"
            />
          </div>

          <div className="left w-1/3 flex items-center justify-around ">
            <div
              className="login group hover:bg-blue-700 px-1 py-2 rounded flex items-center gap-1"
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

              <img
                src="./images/profile.svg"
                alt=""
                className="w-6 hover:cursor-pointer group-hover:invert "
              />
              <p className="group-hover:invert group-hover:font-medium">
                Login
              </p>
              <img
                src="./images/dropdown.svg"
                alt=""
                className="w-3 group-hover:invert group-hover:rotate-180 ease-in-out duration-200 translate-y-1 "
              />
            </div>

            <NavLink to={"/Flipkart-clone/cart"}>
              <div className="cart hover:cursor-pointer flex items-center">
                <img src="./images/header_cart.svg" alt="" className='w-6'/>
                <p>Cart</p>
              </div>
            </NavLink>

            <div className="seller w-44 hover:cursor-pointer flex items-center">
              <img
                src="./images/Store.svg"
                alt="store"
                // width="24px"
                // height={"24px"}
                className='w-6'
              />
              <p>Become a Seller</p>
            </div>

            <div
              className="3dot hover:cursor-pointer hover:border-gray-200 hover:border rounded-lg p-1 hover:bg-gray-50 hover:shadow-sm"
              onMouseOver={() => {
                setDropdownhover(true);
              }}
              onMouseOut={() => {
                setDropdownhover(false);
              }}
            >
              <img src="./images/3dot.svg" alt=""  className='w-5'/>
              <div>
                <NavDropdown hovered={dropdownHover} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
}

export default Navigation;