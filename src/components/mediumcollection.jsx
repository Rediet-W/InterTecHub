import React from "react";

const MediumCollection = ({ name, image, description }) => {
  return (
    <div className="flex flex-col  rounded-md p-3 w-fit m-3 items-center">
      <img src={image} alt="product" className="object-contain  mt-0" />
      <p className="font-bold">{name}</p>
      <p className="text-gray-500 font-thin">{description}</p>
    </div>
  );
};

export default MediumCollection;
