import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCardTotal } from "../../../redux/cardSlice";
import { Navigate, useNavigate } from "react-router-dom";
const NavbarRight = () => {
  const dispatch = useDispatch();
  const { itemCount } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(getCardTotal());
  }, [dispatch]);
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border border-pink-400 p-3 rounded-full bg-gray-100">
        <input
          className="bg-gray-100  outline-none"
          type="text"
          placeholder="...search"
        />
        <BiSearch size={28} className="text-pink-900" />
      </div>
      <AiOutlineHeart size={28} className="text-pink-900" />
      <div onClick={() => navigate("card")} className="relative cursor-pointer">
        <div className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </div>
        <SlBasket size={28} className="text-pink-900" />
      </div>
    </div>
  );
};

export default NavbarRight;
