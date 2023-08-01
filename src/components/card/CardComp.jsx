import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCard } from "../../redux/cardSlice";

const CardComp = ({ card }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-cover "
        src={card?.image}
        alt=""
      />
      <div className="w-[385px]">
        <div className="text-xl">{card?.title}</div>
        <div className="text-xl">{card?.description}</div>
      </div>
      <div className="font-bold text-2xl">
        {card?.price} TL ({card?.quantity})
      </div>
      <div
        onClick={() => dispatch(removeFromCard(card?.id))}
        className="bg-red-500 text-white w-[200px] text-2xl cursor-pointer rounded-lg h-16 flex items-center justify-center"
      >
        Sil
      </div>
    </div>
  );
};

export default CardComp;
