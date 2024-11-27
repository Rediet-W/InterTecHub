import React, { useState } from "react";
import logo from "../assets/logo2.png";
import insta from "../assets/instagram.png";
import x from "../assets/x.png";
import whatsapp from "../assets/whatsapp.png";
import arrow from "../assets/downarrow.png";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-gebeya-purple w-full text-white">
      {/* Desktop View */}
      <div className="hidden lg:flex lg:flex-row-reverse justify-between items-start py-6 px-16">
        {/* Sections */}
        <div className="flex  gap-16">
          {/* About Section */}
          <div>
            <p className="text-lg font-bold mb-4">About</p>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>News & Blog</li>
              <li>Location</li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <p className="text-lg font-bold mb-4">Products</p>
            <ul className="space-y-2">
              <li>Pricing</li>
              <li>Store</li>
              <li>Features</li>
            </ul>
          </div>

          {/* Discover Section */}
          <div>
            <p className="text-lg font-bold mb-4">Discover</p>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>Customers</li>
              <li>Affiliates</li>
            </ul>
          </div>
        </div>

        {/* Logo and Social Media */}
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-16 h-16" />

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <img src={insta} alt="instagram" className="w-6 h-6" />
            <img src={whatsapp} alt="whatsapp" className="w-6 h-6" />
            <img src={x} alt="x" className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col items-center py-6 px-4">
        {/* Collapsible Sections */}
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
              <ul className="mt-2 space-y-2">
                <li>About Us</li>
                <li>News & Blog</li>
                <li>Location</li>
              </ul>
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
              <ul className="mt-2 space-y-2">
                <li>Pricing</li>
                <li>Store</li>
                <li>Features</li>
              </ul>
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
              <ul className="mt-2 space-y-2">
                <li>Contact Us</li>
                <li>Customers</li>
                <li>Affiliates</li>
              </ul>
            )}
          </div>
        </div>

        {/* Logo and Social Media Icons */}
        <div className="flex flex-col items-center space-y-6 mt-6">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-16 h-16" />

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <img src={insta} alt="instagram" className="w-6 h-6" />
            <img src={whatsapp} alt="whatsapp" className="w-6 h-6" />
            <img src={x} alt="x" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
