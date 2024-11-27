import React, { useState } from "react";
import logo from "../assets/logo2.png";
import insta from "../assets/instagram.png";
import x from "../assets/x.png";
import whatsapp from "../assets/whatsapp.png";
import arrow from "../assets/downarrow.png"; // Use your arrow image path here

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-gebeya-purple w-full text-white mx-auto container">
      {/* Main Footer Content */}
      <div className="flex flex-col items-center py-6 px-4">
        {/* Sections */}
        <div className="w-full space-y-4">
          {/* About Section */}
          <div className="border-b border-white pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("about")}
            >
              <p className="text-lg font-medium">About</p>
              <img
                src={arrow}
                alt="arrow"
                className={`w-4 h-4 transform ${
                  openSection === "about" ? "rotate-180" : ""
                }`}
              />
            </div>
            {openSection === "about" && (
              <div className="mt-2 space-y-2">
                <p>About Us</p>
                <p>News & Blog</p>
                <p>Location</p>
              </div>
            )}
          </div>

          {/* Products Section */}
          <div className="border-b border-white pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("products")}
            >
              <p className="text-lg font-medium">Products</p>
              <img
                src={arrow}
                alt="arrow"
                className={`w-4 h-4 transform ${
                  openSection === "products" ? "rotate-180" : ""
                }`}
              />
            </div>
            {openSection === "products" && (
              <div className="mt-2 space-y-2">
                <p>Pricing</p>
                <p>Store</p>
                <p>Features</p>
              </div>
            )}
          </div>

          {/* Discover Section */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("discover")}
            >
              <p className="text-lg font-medium">Discover</p>
              <img
                src={arrow}
                alt="arrow"
                className={`w-4 h-4 transform ${
                  openSection === "discover" ? "rotate-180" : ""
                }`}
              />
            </div>
            {openSection === "discover" && (
              <div className="mt-2 space-y-2">
                <p>Contact Us</p>
                <p>Customers</p>
                <p>Affiliates</p>
              </div>
            )}
          </div>
        </div>

        {/* Logo and Social Media Icons */}
        <div className="flex flex-col items-center space-y-6 mt-6">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-10 h-10" />

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <img src={insta} alt="instagram" className="w-5 h-5" />
            <img src={whatsapp} alt="whatsapp" className="w-5 h-5" />
            <img src={x} alt="x" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
