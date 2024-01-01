import React from "react";
import { FaCocktail } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      className="header-container"
      onClick={(e) => {
        navigate("/");
      }}
    >
      <div>
        <FaCocktail style={{ margin: "0 20px" }} size={40} />
      </div>
      <div>
        <h2>Cocktail Website</h2>
      </div>
    </div>
  );
};

export default Header;


