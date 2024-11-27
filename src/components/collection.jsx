import React from "react";
import star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
const Collection = ({ name, description, price, image, tag, rating }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/cart");
  };
  return (
    <div className="flex flex-col border border-gray-400 rounded-md p-3 w-fit m-3 ">
      <img
        src={image}
        alt="product"
        className="object-contain max-w-80 max-h-80 mt-0"
      />
      <div className="flex justify-between gap-4 my-2">
        <div className="p-1 px-2 border border-gray-300 rounded-full w-fit">
          {tag}
        </div>
        <div className="flex">
          {" "}
          <img src={star} alt="star" className="w-5 h-5" />
          {rating}
        </div>
      </div>
      <p className="font-bold text-xl">{name}</p>
      <p>{description}</p>
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl">{price}</p>
        <button
          className="bg-gebeya-orange px-4 py-2 text-white rounded-md"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Collection;
