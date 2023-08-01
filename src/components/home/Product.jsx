import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`products/${product?.id}`)}
      className="w-[450px] p-2 m-2 border hover:scale-105 hover:shadow-md rounded-md relative cursor-pointer bg-white"
    >
      <div className="text-2xl font-bold absolute rounded-md top-0 right-0 bg-pink-800 text-white p-2 m-1">
        {product?.price} <span className="text-sm">TL</span>
      </div>
      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={product?.image}
      />
      <div className="text-center px-3 m-3 text-xl font-semibold">
        {product?.title}
      </div>
    </div>
  );
};

export default Product;
