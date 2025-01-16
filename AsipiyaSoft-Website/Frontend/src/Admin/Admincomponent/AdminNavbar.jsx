import  { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#CFB1D4] shadow-lg z-50">
      <div className="px-4 py-4 mx-auto max-w-7xl sm:px-2 lg:px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">Admin Panel</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex -mr-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-white bg-purple-400 rounded-md hover:bg-purple-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden space-x-8 md:flex md:items-center">
            
            <Link
              to="/ContactFormdetails"
              className={` py-2  text-white relative group ${
                isActive("/ContactFormdetails") ? "text-purple-500" : ""
              }`}
            >
              View Form Details
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100 ${
                  isActive("/ContactFormdetails") ? "scale-x-100" : ""
                }`}
              ></span>
            </Link>
            <Link
              to="/AddCareers"
              className={`py-2  text-white relative group ${
                isActive("/AddCareers") ? "text-purple-500" : ""
              }`}
            >
              Add careers
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100 ${
                  isActive("/AddCareers") ? "scale-x-100" : ""
                }`}
              ></span>
            </Link>
            <Link
              to="/CareerForm"
              className={` py-2  text-white relative group ${
                isActive("/CareerForm") ? "text-purple-500" : ""
              }`}
            >
              View Careers
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100 ${
                  isActive("/CareerForm") ? "scale-x-100" : ""
                }`}
              ></span>
            </Link>

            <Link
              to="/JobFormDetails"
              className={` py-2  text-white relative group ${
                isActive("/JobFormDetails") ? "text-purple-500" : ""
              }`}
            >
              Job Vacancies Applications
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100 ${
                  isActive("/JobFormDetails") ? "scale-x-100" : ""
                }`}
              ></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/ApplicationsPage"
              className={`block px-3 py-2 text-base font-medium text-white relative group ${
                isActive("/ApplicationsPage") ? "text-purple-500" : ""
              }`}
            >
              View Applications
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100 ${
                  isActive("/ApplicationsPage") ? "scale-x-100" : ""
                }`}
              ></span>
            </Link>
            <Link
              to="/ContactFormdetails"
              className={`block px-3 py-2 text-base font-medium text-white relative group ${
                isActive("/ContactFormdetails") ? "text-purple-500" : ""
              }`}
            >
              View Form Details
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100 ${
                  isActive("/ContactFormdetails") ? "scale-x-100" : ""
                }`}
              ></span>
            </Link>
            <Link
              to="/AddCareers"
              className={`block px-3 py-2 text-base font-medium text-white relative group ${
                isActive("/AddCareers") ? "text-purple-500" : ""
              }`}
            >
              Add careers
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100 ${
                  isActive("/AddCareers") ? "scale-x-100" : ""
                }`}
              ></span>
            </Link>
            <Link
              to="/CareerForm"
              className={`block px-3 py-2 text-base font-medium text-white relative group ${
                isActive("/CareerForm") ? "text-purple-500" : ""
              }`}
            >
              View Careers
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100 ${
                  isActive("/CareerForm") ? "scale-x-100" : ""
                }`}
              ></span>
            </Link>

            <Link
              to="/JobFormDetails"
              className={`block px-3 py-2 text-base font-medium text-white relative group ${
                isActive("/JobFormDetails") ? "text-purple-500" : ""
              }`}
            >
              Job Vacancies Applications
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100 ${
                  isActive("/JobFormDetails") ? "scale-x-100" : ""
                }`}
              ></span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default AdminNavbar;
