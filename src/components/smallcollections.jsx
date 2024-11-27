import React from "react";

const SmallCollection = ({ name, image }) => {
  return (
    <div className="flex flex-col border border-gray-400 rounded-md p-3 md:w-fit m-3 items-center mx-auto container">
      <img
        src={image}
        alt="product"
        className="max-w-20 max-h-20 md:max-w-40 md:max-h-40 mt-0 "
      />
      <p className="font-bold">{name}</p>
      <p className="text-gray-500 font-thin font-sm md:font-normal">
        See all collections
      </p>
    </div>
  );
};

export default SmallCollection;
