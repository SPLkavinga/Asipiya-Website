import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NabBar";
import backgroundImg from "../assets/Vacancy.png";
import BackToTop from "./../Components/BackToTop";
import axiosClient from "../API/axios";
import { FaSpinner } from "react-icons/fa";
import logo from "../assets/logo.png";

function CareerDetails() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    position: "",
    linkedin: "",
    nic: "",
    cv: null,
  });

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for button

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const response = await axiosClient.post("/submit-application", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setShowPopup(true);
      } else {
        alert("Failed to submit the application.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the application.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const { title } = useParams();
  const [careerDetails, setCareerDetails] = useState(null);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const fetchCareerDetails = async () => {
      if (!title) {
        console.error("Career name is missing!");
        return;
      }
      try {
        const response = await axiosClient.get(`/career/${title}`);
        setCareerDetails(response.data);

        // Automatically update the position field in formData
        setFormData((prevFormData) => ({
          ...prevFormData,
          position: response.data.title,
        }));

        setLoadingData(false);
      } catch (error) {
        console.error("Error fetching career details:", error);
        setLoadingData(false);
      }
    };

    fetchCareerDetails();
  }, [title]);

  if (loadingData) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-white">
              <img
                src={logo}
                alt="Loading..."
                className="w-[200px] h-auto animate-bounce"
              />
            </div>
    );
  }

  if (!careerDetails) {
    return <div className="text-center text-red-500">Career not found!</div>;
  }

  return (
    <>
      <NavBar />
      <BackToTop />

      <div
        className="relative flex items-center justify-center w-full h-[650px] md:h-screen bg-center bg-cover "
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 z-0 bg-black bg-opacity-70"></div>

        <div className="z-10 w-full px-6 py-8 text-center md:w-1/2 md:px-20">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            {careerDetails.title}
          </h2>
          <div className="flex justify-center mt-4">
            <p className="px-5 py-2 text-sm font-bold border-2 md:w-[200px] border-[#D9D9D9] text-gray-600 bg-white rounded-full">
              {careerDetails.job_type}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen px-8 py-10 md:p-20">
        <div className="w-full max-w-[1200px]">
          <div className="w-full mb-4">
            <span className="block mt-4 text-lg text-black md:text-[28px] font-semibold break-words whitespace-pre-wrap">
              {careerDetails.shortTitle}
            </span>
            <span className="block mt-2 text-sm text-black md:text-[16px] font-semibold break-words whitespace-pre-wrap">
              {careerDetails.shortdis}
            </span>
            <span className="block text-sm text-black md:text-[16px] break-words whitespace-pre-wrap mb-10">
              {careerDetails.description}
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-[#333333]">
            Responsibilities
          </h3>

          {careerDetails.bullet_points && (
            <ul className="pl-6 mb-6 text-gray-700 list-disc">
              {careerDetails.bullet_points.split(",").map((point, index) => (
                <li key={index} className="text-sm">
                  {point.trim()}
                </li>
              ))}
            </ul>
          )}

          <div className="p-6 border-2 border-[#D9D9D9] rounded-[15px] bg-[#F9F5FF] mt-10">
            <h1 className="mb-4 text-3xl font-semibold text-center text-gray-800">
              Apply for this Position
            </h1>
            <p className="pb-4 mb-8 text-center text-gray-600 border-b">
              Submit your application, and we’ll get back to you!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="contactNumber"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your contact number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="position"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Position Applied For
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm bg-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  value={formData.position}
                  readOnly
                />
              </div>

              <div>
                <label
                  htmlFor="linkedin"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  LinkedIn Profile Link
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your LinkedIn profile URL"
                  value={formData.linkedin}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="nic"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  National Identity Card (NIC) Number
                </label>
                <input
                  type="text"
                  id="nic"
                  name="nic"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your NIC number"
                  value={formData.nic}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="cv"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Upload CV
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-semibold text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center">
                      <FaSpinner className="mr-2 animate-spin" /> Submitting...
                    </div>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="mb-4 text-xl font-semibold text-center text-gray-800">
              Application Submitted Successfully!
            </h2>
            <p className="mb-6 text-sm text-center text-gray-600">
              Thank you for your application. We will review it and get back to
              you shortly.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setShowPopup(false)}
                className="px-6 py-3 text-sm font-semibold text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default CareerDetails;
