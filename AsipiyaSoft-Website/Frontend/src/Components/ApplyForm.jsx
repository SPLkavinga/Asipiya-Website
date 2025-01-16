import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa"; // Optional spinner icon
import axiosClient from "../API/axios";

// Popup Component
const Popup = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
      <h2 className="mb-4 text-xl font-semibold text-center text-gray-800">
        {message}
      </h2>
      <div className="flex justify-center">
        <button
          onClick={onClose}
          className="px-6 py-3 text-sm font-semibold text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

function ApplyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    nicNumber: "",
    linkedinProfile: "",
    position: "",
    message: "",
    image: null,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData({
      ...formData,
      [id]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formPayload = new FormData();
    Object.keys(formData).forEach((key) => {
      formPayload.append(key, formData[key]);
    });

    try {
      const response = await axiosClient.post(
        "/submit-application",
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Application submitted successfully!");
      } else {
        setSuccessMessage("Failed to submit the application.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMessage("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
      setShowPopup(true); // Show popup after submission
    }
  };
  return (
    <section className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-4xl p-8 bg-white border border-gray-200 rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-semibold text-center text-gray-800">
          Apply for job
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
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter desired position"
              value={formData.position}
              onChange={handleChange}
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
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <FaSpinner className="mr-2 animate-spin" /> Submitting...
                </div>
              ) : (
                "Submit Application"
              )}
            </button>
          </div>
        </form>
      </div>
      {showPopup && (
        <Popup
          message={successMessage}
          onClose={() => setShowPopup(false)}
        />
      )}
    </section>
  );
}

export default ApplyForm;
