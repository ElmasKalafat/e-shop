import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLeft = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="text-5xl font-thin italic cursor-pointer"
    >
      E-Shop
    </div>
  );
};

export default NavbarLeft;
