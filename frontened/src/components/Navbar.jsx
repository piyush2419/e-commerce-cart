import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className=" flex justify-between items-center  font-medium mt-2 mb-2">
      <Link to="/">
        <img src={assets.logo} className="h-10 w-30 mt-3" alt="" />
      </Link>
      <ul className="hidden sm:flex lg:gap-5 gap-4 text-sm text-gray-650 -mt-1.5">
        <NavLink to="/">
          {(props) => (
            <div>
              <p>Home</p>
              {props.isActive && <hr className="h-0.5 bg-black" />}
            </div>
          )}
        </NavLink>
        <NavLink to="/collection">
          {(props) => (
            <div>
              <p>Collection</p>
              {props.isActive && <hr className="h-0.5 bg-black" />}
            </div>
          )}
        </NavLink>
        <NavLink to="/about">
          {(props) => (
            <div>
              <p>About</p>
              {props.isActive && <hr className="h-0.5 bg-black" />}
            </div>
          )}
        </NavLink>
        <NavLink to="/contact">
          {(props) => (
            <div>
              <p>Contact</p>
              {props.isActive && <hr className="h-0.5 bg-black " />}
            </div>
          )}
        </NavLink>
      </ul>
      <div className="flex justify-between items-center  gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="h-5 w-5 -mt-1 cursor-pointer"
          alt=""
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="h-5 w-5 -mt-1 cursor-pointer"
            alt=""
          />
          <div className="group-hover:block hidden absolute right-0 top-4 bg-white shadow-md rounded-md w-32">
            <p className="p-2 hover:bg-gray-100 text-gray-400 hover:text-gray-800 cursor-pointer text-sm">
              My Profile
            </p>
            <p className="p-2 hover:bg-gray-100  text-gray-400 hover:text-gray-800 cursor-pointer text-sm">
              Orders
            </p>
            <p className="p-2 hover:bg-gray-100  text-gray-400 hover:text-gray-800 cursor-pointer text-sm">
              Logout
            </p>
          </div>
        </div>
        <NavLink to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 h-4 text-center leading-4 bg-black text-white text-xs rounded-full">
            {getCartCount()}
          </p>
        </NavLink>
        <img
          onClick={() => setVisible(!visible)}
          src={assets.menu_icon}
          className="w-5 min-w-5 sm:hidden justify-between item center mt-0.5"
          alt=""
        />
      </div>
      <div
        className={`sm:hidden absolute top-0 right-0 bg-white w-1/2 border-l border-black h-screen p-4 transition-all ${visible ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col justify-between  text-gray-500 text-xl">
          <div
            onClick={() => setVisible(false)}
            className="flex gap-1 items-center cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              className=" rotate-180 h-2 w-3 mt-1"
              alt=""
            />
            <p className="text-sm text-black ">Back</p>
          </div>
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="mt-4 py-2 text-sm pl-5 border-b -ml-2 text-black "
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            onClick={() => setVisible(false)}
            className="py-2 text-sm pl-5 border-b -ml-2 text-black"
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setVisible(false)}
            className="py-2 text-sm pl-5 border-b -ml-2 text-black"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setVisible(false)}
            className="py-2 text-sm pl-5 border-b -ml-2 text-black "
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
