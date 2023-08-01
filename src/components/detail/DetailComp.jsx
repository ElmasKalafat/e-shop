import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/cardSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };
  const addBasket = () => {
    dispatch(
      addToCard({
        id: productDetail.id,
        title: productDetail.title,
        image: productDetail.image,
        price: productDetail.price,
        quantity: quantity,
      })
    );
  };
  return (
    <div className="flex gap-10 my-10  rounded-lg">
      <img
        className="w-[700px] h-[550px] object-cover"
        src={productDetail?.image}
        alt=""
      />

      <div>
        <div className="text-4xl font-semibold">{productDetail?.title}</div>
        <div className="my-2 text-2xl">{productDetail?.description}</div>
        <div className="my-2 text-xl text-pink-500">
          Rating : {productDetail?.rating?.rate}
        </div>
        <div className="my-2 text-xl text-pink-500">
          Count : {productDetail?.rating?.count}
        </div>
        <div className="text-3xl font-bold">
          {productDetail?.price} <span>TL</span>
        </div>
        <div className="flex  items-center gap-5 my-6">
          <div
            onClick={decrement}
            className="text-xl cursor-pointer hover:scale-105"
          >
            ➖
          </div>
          <input
            type="text"
            value={quantity}
            className="bg-transparent w-14 text-center text-4xl font-medium"
          ></input>
          <div
            onClick={increment}
            className="text-xl cursor-pointer hover:scale-105 "
          >
            ➕
          </div>
        </div>
        <div
          onClick={addBasket}
          className="border w-[200px] text-2xl rounded-lg cursor-pointer h-16 flex items-center justify-center bg-gray-100 text-pink-400 hover:shadow-lg my-4 hover:scale-105 border-pink-400"
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
