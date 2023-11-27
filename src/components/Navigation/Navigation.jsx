import { useState } from 'react';
import LoginCard from '../LoginCard/LoginCard';
import Titletext from '../Titletext/Titletext';
import './Navigation.css'
import NavDropdown from './NavDropdown';

function Navigation(){

   const [hovered, setHovered] = useState(false)
   const [dropdownHover, setDropdownhover] = useState(false)

    return (
      <header>
        <nav className="fixed top-0 z-10">
          <div className="right">
            <div className="logo ">
              <img src="/images/logo.svg" alt="" />
            </div>
          </div>
          <div className="search ">
            <i className="fa fa-search text-xl " aria-hidden="true"></i>
            <input
              type="text"
              className=""
              placeholder="Search Products, Brands and More"
            />
          </div>

          <div className="left">
            <div
              className="login group hover:bg-blue-700 px-1 py-2 rounded flex items-center "
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
                src="/images/profile.svg"
                alt=""
                className=" hover:cursor-pointer group-hover:invert"
              />
              <p className="group-hover:invert group-hover:font-medium">
                Login
              </p>
              <img
                src="/images/dropdown.svg"
                alt=""
                className="group-hover:invert group-hover:rotate-180 ease-in-out "
              />
            </div>

            <div className="cart hover:cursor-pointer flex items-center">
              <img src="/images/header_cart.svg" alt="" />
              <p>Cart</p>
            </div>

            <div className="seller w-44 hover:cursor-pointer flex items-center">
              <img
                src="/images/Store.svg"
                alt="store"
                width="24px"
                height={"24px"}
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
              <img src="/images/3dot.svg" alt="" />
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