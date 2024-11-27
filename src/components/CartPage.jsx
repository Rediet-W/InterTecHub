import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import shoe1 from "../assets/cartshoe.png";
import shoe2 from "../assets/cartshoe2.png";
import Collection from "./collection";
import pink from "../assets/carttopshoe.png";
import insta from "../assets/instagram.png";
import x from "../assets/x.png";
import whatsapp from "../assets/whatsapp.png";
import fav from "../assets/fav.png";
import returnn from "../assets/return.png";
import delivery from "../assets/delivery.png";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedTag, setSelectedTag] = useState(null);
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate("/checkout");
  };
  const handleback = () => {
    navigate("/");
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);
  const tags = ["Overview", "Description", "Warranty", "Reviews"];

  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto px-4 py-6 bg-gebeya-gray ">
        <nav className="text-gray-500  mb-6">
          Home &gt; Kids &gt; Shoes &gt;{" "}
          <span className="text-black">Sneakers</span>
        </nav>
        <div className="space-y-3">
          <div className="md:flex gap-2 flex-none">
            <div className=" flex border border-gray-400 bg-white rounded-md p-4">
              <div className="flex flex-wrap gap-8 ">
                {/* Left Section: Product Image */}
                <div className="flex-1 max-w-lg gap-2">
                  <img
                    src={pink}
                    alt="Product"
                    className="md:w-fit mb-4 w-3/4 h-3/4"
                  />
                  <div className="flex gap-1 md:gap-2">
                    {[...Array(4)].map((_, index) => (
                      <img
                        key={index}
                        src={pink}
                        alt={`Thumbnail ${index}`}
                        className="w-16 h-16 object-cover rounded-lg border cursor-pointer"
                      />
                    ))}
                  </div>
                  <p className="my-4">Share this product</p>
                  <div className="flex gap-4 pb-8  filter invert my-2">
                    <img src={insta} alt="instagram" className="w-5 h-5" />
                    <img src={whatsapp} alt="whatsapp" className="w-5 h-5" />
                    <img src={x} alt="x" className="w-5 h-5" />
                  </div>
                </div>

                {/* Right Section: Product Details */}
                <div className="flex-1 space-y-4">
                  {/* Product Info */}
                  <div className="flex justify-between ">
                    <div className="space-y-3">
                      <h1 className="text-2xl font-bold my-2">
                        Burberry Shine
                      </h1>
                      <p className="">
                        Brand: <span className="font-medium">FENDI</span>
                      </p>
                    </div>
                    <img src={fav} className="w-10 h-10" />
                  </div>

                  <hr className=""></hr>
                  <p className="text-2xl font-bold">
                    $150{" "}
                    <span className="line-through text-gray-400 text-md font-thin">
                      $300
                    </span>{" "}
                    <span className="text-green-900 bg-green-200 font-thin rounded-md m-2">
                      -50%{" "}
                    </span>
                  </p>
                  <p className="text-gray-500">50 units left</p>
                  <p className="text-gray-500">
                    + Shipping fee may vary on location
                  </p>

                  <p className="text-gray-500">⭐ 1k+ rating</p>
                  <hr className=""></hr>
                  {/* Quantity */}
                  <div className="flex items-center gap-4">
                    <p className="font-medium">Quantity:</p>
                    <div className="flex items-center  ">
                      <button
                        onClick={decreaseQuantity}
                        className="px-3 py-1 bg-gebeya-orange items-center border border-black"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 border border-y-black">
                        {quantity}
                      </span>
                      <button
                        onClick={increaseQuantity}
                        className="px-3 py-1 bg-gebeya-orange items-center border  border-black"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Sizes */}
                  <div className="flex items-center gap-4">
                    <p className="font-medium">Size:</p>
                    <div className="flex gap-2">
                      {[20, 25, 32, 37].map((size) => (
                        <button
                          key={size}
                          className="px-4 py-2 border rounded-lg hover:bg-gebeya-orange"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    <p className="text-sm "> See all size guides</p>
                  </div>

                  {/* Colors */}
                  <div className="flex items-center gap-4">
                    <p className="font-medium">Color:</p>
                    <div className="flex gap-2">
                      {["pink", "blue", "red", "black"].map((color) => (
                        <div
                          key={color}
                          className={`w-6 h-6  border onhover:  border-gray-300  `}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-4">
                    <button
                      className="px-3 py-1 md:px-6 md:py-2 border border-black rounded-lg text-gray-700 hover:bg-gray-100"
                      onClick={handleback}
                    >
                      Save for Later
                    </button>
                    <button
                      className="px-3 py-1 md:px-6 md:py-2 bg-gebeya-orange text-white font-bold rounded-lg hover:bg-orange-600"
                      onClick={handleBuy}
                    >
                      Buy Now
                    </button>
                  </div>

                  {/* Shipping Info */}
                  <div className="flex items-center justify-start md:justify-center">
                    <p className="text-sm text-gray-500 mt-4 ">
                      Pickup & Pay on collection available
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Delivery & Returns */}
            <div className="w-full md:w-1/3 bg-white p-4 rounded-lg border border-gray-400">
              <h2 className="flex items-center justify-center text-lg font-bold">
                Delivery & Returns
              </h2>
              <hr className="my-4"></hr>
              <div className="mt-4 space-y-2">
                <label className="block text-black font-medium">Location</label>
                <select className="w-full p-2 border rounded-lg">
                  <option> Location</option>
                </select>
              </div>
              <div className="mt-4">
                <select className="w-full p-2 border rounded-lg">
                  <option> Sub-location</option>
                </select>
              </div>
              <div className="flex gap-2 mt-3">
                <img src={delivery} alt="delivery" className="w-10 h-10" />
                <div className="space-y-2">
                  <p className="font-black text-base mt-2"> Delivery</p>

                  <p>Estimated delivery time is 1-12 business days </p>
                  <p>
                    <span className="font-medium">For Same-Day-Delivery:</span>{" "}
                    Please place your order before 12pm
                  </p>
                  <p>
                    <span className="font-medium">Next-Day-Delivery:</span>{" "}
                    Orders placed after 12pm will be delivered the next day.
                  </p>
                  <p>
                    <span className="font-medium">Note:</span> Availability may
                    vary by location
                  </p>
                </div>
              </div>
              <div className="flex gap-5 my-3">
                <img src={returnn} alt="return policy" className="w-10 h-5" />
                <div className="space-y-2">
                  <p className="font-black"> Return Policy</p>
                  <p className="font-medium">Guaranteed 7-day return policy</p>
                  <p>
                    For details about return shipping options, please visit our
                    Contact page
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-400">
            {/* Tabs */}
            <div className="flex gap-4 mt-4 w-full overflow-scroll">
              {tags.map((tag) => (
                <div
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`py-1 px-4 border border-gray-300 rounded-full w-fit text-md cursor-pointer ${
                    selectedTag === tag ? "bg-gebeya-orange text-white" : ""
                  }`}
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="mt-4 text-gray-500 space-y-2">
              <li>
                Available in a wide range of colors, patterns, and patterns and
                themes to appeal to kids.
              </li>
              <li>
                Rubber outsoles with good traction to prevent slips and falls.
              </li>
              <li>
                Built-in arch support to help maintain healthy foot development.
              </li>
              <li>
                Soft insoles and adequate padding to support growing feet.
              </li>
            </div>

            <hr className="my-4"></hr>
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">
                Similar Items You May Like
              </h2>
              <div className="flex overflow-scroll">
                <Collection
                  name="Butlin Blue"
                  description="FENDI"
                  price="$120"
                  rating="2K+rating"
                  tag="kids"
                  image={shoe1}
                />
                <Collection
                  name="Pink cherry"
                  description="FENDI"
                  price="$180"
                  rating="2K+rating"
                  tag="kids"
                  image={shoe2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
