import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import card from "../assets/card.png";
import shoe1 from "../assets/cartshoe.png";
const CheckoutPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("Card");

  const methods = [
    { id: "Card", label: "Card", icon: "path-to-card-icon" },
    { id: "Wallet", label: "Wallet", icon: "path-to-wallet-icon" },
    { id: "Bank Transfer", label: "Bank Transfer", icon: "path-to-bank-icon" },
  ];
  return (
    <div>
      <Navbar />
      <div className=" md:gap-6 bg-gray-100 flex flex-col-reverse w-full p-6 md:grid md:grid-cols-2 mx-auto container">
        <div className="md:space-y-3 flex flex-col col-span-1">
          {/* Shipping Address */}
          <div className=" bg-white rounded-lg p-6 shadow-md space-y-6 border border-black border-t-0 md:border md:border-t-1">
            <div>
              <h2 className="text-lg font-bold mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 gap-4 ">
                <div className="space-y-2">
                  <label className="block text-sm font-medium ">Name</label>
                  <input
                    type="text"
                    placeholder="First & Last Name"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium ">
                    Address 1
                  </label>
                  <input
                    type="text"
                    placeholder="412, Dubai St"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium ">
                    Address 2
                  </label>
                  <input
                    type="text"
                    placeholder="23rd, Boulevard Ave"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium ">City</label>
                    <input
                      type="text"
                      placeholder="Enter City"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">State</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Select State</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium ">Zip</label>
                    <input
                      type="text"
                      placeholder="Zip code"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Payment Method */}
          <div className="bg-white rounded-lg p-6 shadow-md space-y-6 border border-black border-t-0 md:border md:border-t-1">
            <h2 className="text-lg font-bold mb-4">Payment Method</h2>

            {/* Payment Methods */}
            <div className="flex gap-4 mb-4">
              {methods.map((method) => (
                <div
                  key={method.id}
                  className={`flex-1 flex flex-col items-center p-2 md:p-4 border rounded-md cursor-pointer ${
                    selectedMethod === method.id
                      ? "bg-orange-500 text-white"
                      : "bg-white text-gray-500"
                  }`}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <img
                    src={card}
                    alt={method.label}
                    className={`w-6 h-6 md:w-8 md:h-8 mb-2 ${
                      selectedMethod === method.id ? "" : "filter invert"
                    }`}
                  />
                  <p className="font-medium">{method.label}</p>
                </div>
              ))}
            </div>

            {/* Card Details */}
            <div className="space-y-2">
              <div className="space-y-2 ">
                <label className="block text-sm font-medium text-gray-500">
                  Name on Card
                </label>
                <input
                  type="text"
                  placeholder="First & Last Name"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="space-y-2 ">
                <label className="block text-sm font-medium text-gray-500">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="grid  gap-4 grid-cols-1 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-500">
                    Expiry
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <select className="w-full p-2 border rounded-md">
                      <option>MM</option>
                    </select>
                    <select className="w-full p-2 border rounded-md">
                      <option>YYYY</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-500">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Order Summary */}
        <div className=" bg-white rounded-lg p-6 shadow-md border border-black col-span-1 h-fit ">
          <h2 className="text-lg font-bold mb-4 flex items-center justify-center">
            Order Summary
          </h2>
          <hr className="my-4"></hr>
          <div className="flex items-center mb-4">
            <img
              src={shoe1}
              alt="Product"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="ml-4">
              <p className="font-medium">Burberry Shine</p>
              <p className="text-gray-500 text-sm">FENDI</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-gray-500">Subtotal</p>
              <p className="font-medium">$150</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500">Shipping</p>
              <p className="font-medium">$10</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500">Tax</p>
              <p className="font-medium">$5</p>
            </div>
            <div className="flex justify-between border-t pt-2">
              <p className="font-bold">Total</p>
              <p className="font-bold">$165</p>
            </div>
          </div>
          <button className="mt-6 w-full py-2 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition">
            Place Order
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
