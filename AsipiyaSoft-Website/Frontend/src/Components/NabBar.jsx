import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation(); // Get the current location

  return (
    <div className="bg-white text-black px-4 py-4 h-[90px] flex items-center justify-between">
      {/* Left Section: Logo */}
      <div className="flex justify-center ml-4 mr-20">
        <Link to="/">
          <img src={logo} alt="LOGO" className="w-[131px]" />
        </Link>
      </div>

      {/* Middle Section: Desktop Navigation */}
      <ul className="hidden xl:flex space-x-8 text-[16px] font-medium">
        <li className="relative group">
          <Link
            to="/"
            className={`transition-colors duration-300 ${
              location.pathname === "/"
                ? "text-[#9733D1]"
                : "hover:text-[#9733D1] text-black"
            }`}
          >
            Home
          </Link>
          <span
            className={`absolute left-0 bottom-0 h-[3px] rounded-full w-0 bg-[#9733D1] transition-all duration-300 group-hover:w-full ${
              location.pathname === "/" ? "w-full" : ""
            }`}
          ></span>
        </li>
        <li className="relative group">
          <Link
            to="/about"
            className={`transition-colors duration-300 ${
              location.pathname === "/about"
                ? "text-[#9733D1]"
                : "hover:text-[#9733D1] text-black"
            }`}
          >
            About us
          </Link>
          <span
            className={`absolute left-0 bottom-0 h-[3px] rounded-full w-0 bg-[#9733D1] transition-all duration-300 group-hover:w-full ${
              location.pathname === "/about" ? "w-full" : ""
            }`}
          ></span>
        </li>
        <li className="relative group">
          <Link
            to="/Services"
            className={`transition-colors duration-300 ${
              location.pathname === "/Services"
                ? "text-[#9733D1]"
                : "hover:text-[#9733D1] text-black"
            }`}
          >
            Services
          </Link>
          <span
            className={`absolute left-0 bottom-0 h-[3px] rounded-full w-0 bg-[#9733D1] transition-all duration-300 group-hover:w-full ${
              location.pathname === "/Services" ? "w-full" : ""
            }`}
          ></span>
        </li>
        <li className="relative group">
          <Link
            to="/Blogs"
            className={`transition-colors duration-300 ${
              location.pathname === "/Blogs"
                ? "text-[#9733D1]"
                : "hover:text-[#9733D1] text-black"
            }`}
          >
            Blogs
          </Link>
          <span
            className={`absolute left-0 bottom-0 h-[3px] rounded-full w-0 bg-[#9733D1] transition-all duration-300 group-hover:w-full ${
              location.pathname === "/Blogs" ? "w-full" : ""
            }`}
          ></span>
        </li>
        <li className="relative group">
          <Link
            to="/CareerNew"
            className={`transition-colors duration-300 ${
              location.pathname === "/CareerNew"
                ? "text-[#9733D1]"
                : "hover:text-[#9733D1] text-black"
            }`}
          >
            Careers
          </Link>
          <span
            className={`absolute left-0 bottom-0 h-[3px] rounded-full w-0 bg-[#9733D1] transition-all duration-300 group-hover:w-full ${
              location.pathname === "/CareerNew" ? "w-full" : ""
            }`}
          ></span>
        </li>
        <li className="relative group">
          <Link
            to="/contact"
            className={`transition-colors duration-300 ${
              location.pathname === "/contact"
                ? "text-[#9733D1]"
                : "hover:text-[#9733D1] text-black"
            }`}
          >
            Contact Us
          </Link>
          <span
            className={`absolute left-0 bottom-0 h-[3px] rounded-full w-0 bg-[#9733D1] transition-all duration-300 group-hover:w-full ${
              location.pathname === "/contact" ? "w-full" : ""
            }`}
          ></span>
        </li>
      </ul>

      {/* Right Section: Buttons */}
      <div className="hidden mr-4 space-x-4 md:flex">
        <Link to="/Services">
          <button className="bg-[#7D00C5] hover:bg-[#5C0091] rounded-full w-[147px] h-[44px] text-white font-semibold">
            Our Product
          </button>
        </Link>

        <Link to="/contact">
          <button className="bg-white border-[#333333] hover:bg-[#7D00C5] hover:text-white border-opacity-70 border-2 rounded-full w-[147px] h-[44px] text-[#333333] text-opacity-70 font-semibold">
            Let's Talk
          </button>
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="xl:hidden">
        <button onClick={() => setIsDrawerOpen(true)} className="text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6h18M3 12h18m-9 6h9"
            />
          </svg>
        </button>
      </div>

      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex items-center justify-between p-4">
          <img src={logo} alt="LOGO" className="w-[100px]" />
          <button onClick={() => setIsDrawerOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="space-y-6 p-4 text-[16px] font-medium">
          <li>
            <Link
              to="/"
              className={`block transition-colors duration-300 ${
                location.pathname === "/"
                  ? "text-[#9733D1]"
                  : "hover:text-[#9733D1] text-black"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`block transition-colors duration-300 ${
                location.pathname === "/about"
                  ? "text-[#9733D1]"
                  : "hover:text-[#9733D1] text-black"
              }`}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/Services"
              className={`block transition-colors duration-300 ${
                location.pathname === "/Services"
                  ? "text-[#9733D1]"
                  : "hover:text-[#9733D1] text-black"
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/Blogs"
              className={`block transition-colors duration-300 ${
                location.pathname === "/Blogs"
                  ? "text-[#9733D1]"
                  : "hover:text-[#9733D1] text-black"
              }`}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/CareerNew"
              className={`block transition-colors duration-300 ${
                location.pathname === "/CareerNew"
                  ? "text-[#9733D1]"
                  : "hover:text-[#9733D1] text-black"
              }`}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`block transition-colors duration-300 ${
                location.pathname === "/contact"
                  ? "text-[#9733D1]"
                  : "hover:text-[#9733D1] text-black"
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
