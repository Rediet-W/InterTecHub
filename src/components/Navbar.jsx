import React, { useState } from "react";
import p from "../assets/logo.png";
import uparrow from "../assets/uparrow.png";
import downarrow from "../assets/downarrow.png";
import cart from "../assets/cart.png";
import menuIcon from "../assets/menu.png";
import closeIcon from "../assets/close.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-white shadow-md mx-auto container max-w-full">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <img src={p} alt="Logo" className="w-20 h-10" />

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {/* Register/Sign In Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-purple-600"
              onClick={() => toggleDropdown("register")}
            >
              <span className="text-sm">Register/Sign In</span>
              <img
                src={openDropdown === "register" ? uparrow : downarrow}
                alt="arrow"
                className="w-4 h-4"
              />
            </button>
            {openDropdown === "register" && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                <a
                  href="/register"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Register
                </a>
                <hr className="border-gray-300" />
                <a
                  href="/signin"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign In
                </a>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <a href="/" className="text-gray-700 hover:text-purple-600">
            Home
          </a>
          <a href="/men" className="text-gray-700 hover:text-purple-600">
            Men
          </a>
          <a href="/women" className="text-gray-700 hover:text-purple-600">
            Women
          </a>
          <a href="/kids" className="text-gray-700 hover:text-purple-600">
            Kids
          </a>
          <a
            href="/accessories"
            className="text-gray-700 hover:text-purple-600"
          >
            Accessories
          </a>

          {/* More Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-purple-600"
              onClick={() => toggleDropdown("more")}
            >
              <span className="text-sm">More</span>
              <img
                src={openDropdown === "more" ? uparrow : downarrow}
                alt="arrow"
                className="w-4 h-4"
              />
            </button>
            {openDropdown === "more" && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                <a
                  href="/perfumes"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Perfumes
                </a>
                <a
                  href="/jewelries"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Jewelries
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-l px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Language/Currency and Cart */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-purple-600">
            EN/Currency
          </button>
          <button className="bg-purple-600 px-2 py-1 rounded-full relative hover:bg-purple-700">
            <span className="bg-red-500 text-white text-xs rounded-full px-2 absolute -top-2 -right-2">
              2
            </span>
            <img src={cart} alt="cart" className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex items-center justify-between px-4 py-2">
        {/* Menu Button */}
        <button
          className="text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <img
            src={isMobileMenuOpen ? closeIcon : menuIcon}
            alt="menu"
            className="w-6 h-6"
          />
        </button>

        {/* Logo */}
        <img src={p} alt="Logo" className="w-20 h-10" />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white shadow-md px-4 py-4 space-y-4">
          {/* Search Bar */}
          <div>
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Dropdown Lists */}
          <div>
            <button
              className="flex justify-between w-full text-gray-700"
              onClick={() => toggleDropdown("register")}
            >
              Register/Sign In
              <img
                src={openDropdown === "register" ? uparrow : downarrow}
                alt="arrow"
                className="w-4 h-4"
              />
            </button>
            {openDropdown === "register" && (
              <div className="pl-4 mt-2 space-y-2">
                <a href="/register" className="block text-gray-700">
                  Register
                </a>
                <a href="/signin" className="block text-gray-700">
                  Sign In
                </a>
              </div>
            )}
          </div>
          <a href="/" className="block text-gray-700">
            Home
          </a>
          <a href="/men" className="block text-gray-700">
            Men
          </a>
          <a href="/women" className="block text-gray-700">
            Women
          </a>
          <a href="/kids" className="block text-gray-700">
            Kids
          </a>
          <a href="/accessories" className="block text-gray-700">
            Accessories
          </a>
          <div>
            <button
              className="flex justify-between w-full text-gray-700"
              onClick={() => toggleDropdown("more")}
            >
              More
              <img
                src={openDropdown === "more" ? uparrow : downarrow}
                alt="arrow"
                className="w-4 h-4"
              />
            </button>
            {openDropdown === "more" && (
              <div className="pl-4 mt-2 space-y-2">
                <a href="/perfumes" className="block text-gray-700">
                  Perfumes
                </a>
                <a href="/jewelries" className="block text-gray-700">
                  Jewelries
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
