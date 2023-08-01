import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="bg-gray-100 my-5 px-5 flex items-center justify-end">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="bg-gray-100 py-3 px-1"
        name=""
        id=""
      >
        <option disabled value="seçiniz">
          Seçiniz
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
