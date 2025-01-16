import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/AsipiyawhiteLogo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MdCallToAction, MdOutlineAttachEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="py-3 text-white bg-purple-900 mt-[120px]">
      <div className="container mx-auto text-center md:text-left ">
        {/* Top Section - Logo, Tagline, Email, and Phone in one line */}
        <div className="flex flex-col items-center px-[20px] xl:px-8  mb-4  md:flex-col ">
          {/* Logo */}
          <img className="w-[150px] h-[140px] " src={logo} alt="Asipiya Logo" />

          {/* Tagline */}
          <p className="mb-2 text-sm md:text-[16px] text-center font-medium md:ml-2 md:mb-4">
            Your trusted partner for cutting-edge software solutions.
            Streamlining business operations at Asipiya
          </p>

          {/* Contact Info - Email and Phone */}
          <div className="flex flex-col items-center md:text-[13.33px] font-medium">
            <div className="flex flex-row">
              <p className="flex items-center mr-8">
                <MdOutlineAttachEmail className="mr-2 text-lg" />
                <a href="mailto:info@asipiya.lk" className="underline">
                  info@asipiya.lk
                </a>
              </p>
              <p className="flex items-center">
                <IoCallOutline className="mr-2 text-lg" />
                <a href="tel:+94741870003" className="underline">
                  + 94 74 187 0003
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center justify-center mb-6 md:mb-8 xl:flex-row">
          {/* Row for Home, Services, and Contact Us */}
          <div className="flex flex-col xl:flex-row xl:space-x-8 space-y-4 md:space-y-0 md:text-[13.33px] font-medium text-center xl:text-start">
            <div>
              <Link to="/" className="text-[16px] font-bold hover:underline">
                Home
              </Link>
            </div>
            <div>
              <Link
                to="/services"
                className="text-[16px] font-semibold hover:underline"
              >
                Services
              </Link>
            </div>
            <div>
              <Link
                to="/contact"
                className="text-[16px] font-semibold hover:underline"
              >
                Contact Us
              </Link>
            </div>
            <div>
              <Link
                to="/about"
                className="text-[16px] font-semibold hover:underline"
              >
                About Us
              </Link>
            </div>
            <div>
              <Link
                to="/blog"
                className="text-[16px] font-semibold hover:underline"
              >
                Blogs
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center mt-2 space-y-4">
          <div className="flex space-x-4">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B94741870003&text&type=phone_number&app_absent=0"
              className="flex items-center justify-center text-white bg-[#7D00C5] hover:bg-[#5C0091] h-12 w-12 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-3xl fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/asipiyasoftsolutions/"
              className="flex items-center justify-center text-white bg-[#7D00C5] hover:bg-[#5C0091] h-12 w-12 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-3xl fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/AsipiyaSoftSolutions?mibextid=ZbWKwL"
              className="flex items-center justify-center text-white bg-[#7D00C5] hover:bg-[#5C0091] h-12 w-12 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-3xl fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/asipiya/"
              className="flex items-center justify-center text-white bg-[#7D00C5] hover:bg-[#5C0091] h-12 w-12 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-3xl fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-[32px] text-center md:text-[13.33px] font-medium">
          <p className="pt-4 border-t border-white">
            &copy; All rights reserved © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
