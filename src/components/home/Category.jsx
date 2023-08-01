import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/CategorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  console.log("categories", categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="w-1/5 bg-gray-100 p-4 h-[298px] mt-2 rounded-md">
      <div className="border-b pb-1 text-xl font-bold">KATEGORİ</div>
      {categories?.map((category, i) => (
        <div
          onClick={() => setCategory(category)}
          key={i}
          className="text-lg cursor-pointer hover:bg-gray-200 p-1"
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
