import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/frontend_assets/assets";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="cursor-pointer text-gray-800" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img className="hover:scale-110 transition ease-in-out"
          src={image?.[0]}
          alt=""/>
        <p className="text-sm pt-2 pb-1 font-semibold mt-2">{name}</p>
        <p className="text-sm font-semibold">
          {currency} {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
