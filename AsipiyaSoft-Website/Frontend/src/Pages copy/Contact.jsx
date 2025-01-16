import { useState, useEffect } from "react";
import axiosClient from "../API/axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AiOutlineMessage,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineHome,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import backgroundImg from "../assets/Contact.png";
import NavBar from "./../Components/NabBar";
import Footer from "./../Components/Footer";
import logo from "../assets/logo.png";
import BackToTop from "./../Components/BackToTop";

function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1-second delay
    return () => clearTimeout(timer);
  }, []);

  const toggleSelection = (interest) => {
    setSelectedInterests((prevInterests) => {
      if (prevInterests.includes(interest)) {
        return prevInterests.filter((item) => item !== interest);
      } else {
        return [...prevInterests, interest];
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const firstName = event.target.firstName.value.trim();
    const lastName = event.target.lastName.value.trim();
    const email = event.target.email.value.trim();
    const phoneNumber = event.target.phoneNumber.value.trim();
    const message = event.target.message.value.trim();
  
    // Form validation
    if (!firstName || !lastName || !email || !phoneNumber || !message || selectedInterests.length === 0) {
      alert("Please fill out all the fields and select at least one interest.");
      return;
    }
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Validate phone number format (example: +94 70 2882 222)
    const phoneRegex = /^\+?[0-9\s\-]+$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert("Please enter a valid phone number.");
      return;
    }
  
    setLoadingButton(true);
  
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
      interests: selectedInterests,
    };
  
    try {
      await axiosClient.post("/send-email", formData);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setLoadingButton(false);
    }
  };
  
  // Loading screen
  if (loading) {
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

  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <BackToTop />
      <div
        className="relative flex flex-col items-center justify-center w-full h-[650px] xl:h-screen bg-center bg-cover xl:flex-row px-[20px] xl:px-[120px]"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 z-0 bg-black bg-opacity-70"></div>
        <motion.div
          className="z-10 mt-[500px] xl:mt-0 w-full px-6 py-8 text-center text-white xl:w-1/2 xl:px-12 xl:text-left"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center md:text-left xl:text-start max-w-[487px] w-full mx-auto">
            <h2 className="text-3xl font-bold md:text-[20px] xl:text-5xl">
              Let’s Level Up Your
            </h2>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Business Together
            </h2>
            <p className="mt-4 text-sm md:mt-6 xl:text-lg">
              Welcome to Asipiya! For inquiries, reach out to us at{" "}
              <strong>info@asipiya.lk</strong>.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="z-10 w-full px-6 py-8 mt-8 bg-white shadow-lg md:mt-3 rounded-xl md:w-[700px] xl:w-[692px]"
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="block mb-2 text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full text-[14px] p-3 text-gray-600 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full text-[14px] p-3 text-gray-600 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="+94 70 2882 222"
                  className="w-full text-[14px] p-3 text-gray-600 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className="w-full text-[14px] p-3 text-gray-600 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Message</label>
              <textarea
                name="message"
                placeholder="Leave a Message here ....."
                className="w-full text-[14px] p-3 text-gray-600 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-700">
                I'm interested in...
              </label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  "UI/UX Design",
                  "Web Design",
                  "Design System",
                  "Software Solutions",
                  "Other",
                ].map((interest) => (
                  <button
                    type="button"
                    key={interest}
                    onClick={() => toggleSelection(interest)}
                    className={`p-2 border rounded-xl focus:outline-none ${
                      selectedInterests.includes(interest)
                        ? "bg-purple-500 text-white border-purple-500"
                        : "text-gray-600 border-gray-300 hover:bg-purple-500 hover:text-white"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="agree"
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <label htmlFor="agree" className="ml-2 text-sm text-gray-600">
                You agree to our friendly{" "}
                <a href="#" className="text-purple-500 underline">
                  privacy policy.
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 text-lg text-white bg-purple-600 rounded-full hover:bg-purple-700"
              disabled={loadingButton}
            >
              {loadingButton ? (
                <div className="flex items-center justify-center space-x-2">
                  <span className="spinner-border"></span> Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>
      </div>
      <br />
      <br />
      <div className="container px-[40px] xl:px-[120px] xxl:px-[180px] xl:mt-[0px] mt-[500px] ">
        <motion.div
          className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:mt-0"
          initial={{ x: 100 }} // Start position off-screen to the right
          whileInView={{ x: 0 }} // Move to its final position
          transition={{ duration: 0.7, ease: "easeOut" }} // Smooth movement animation
          viewport={{ once: true }} // Trigger animation only once
        >
          {/* Section 1 */}
          <div className="mb-2">
            <p className="mb-3 text-sm font-semibold text-[#333333] text-opacity-80">
              Chat with Us
            </p>
            <p className="text-sm text-gray-500 w-[284px]">
              Reach out to us for inquiries, support, or collaborations. We’re
              here to assist you!
            </p>
            <p className="flex items-center mt-3 space-x-2 text-sm font-semibold">
              <AiOutlineMessage className="w-5 h-5 text-purple-600" />
              <span>Start Live Chat</span>
            </p>
            <Link
              to="/contact"
              className="flex items-center mt-3 space-x-2 text-sm text-purple-600"
            >
              <AiOutlineMail className="w-5 h-5" />
              <span className="font-semibold text-black">Email Us</span>
            </Link>
          </div>

          {/* Section 2 */}
          <div className="mb-2">
            <p className="mb-3 text-sm font-semibold text-[#333333] text-opacity-80">
              Call Us
            </p>
            <p className="text-sm text-gray-500 w-[284px]">
              Call us for personalized assistance, inquiries, or support. We're
              just a phone call away!
            </p>
            <p className="flex items-center mt-3 space-x-2 text-sm font-semibold">
              <AiOutlinePhone className="w-5 h-5 text-purple-600" />
              <span>+ 94 74 187 0003</span>
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-2">
            <p className="mb-3 text-sm font-semibold text-[#333333] text-opacity-80">
              Visit Us
            </p>
            <p className="text-sm text-gray-500 w-[284px]">
              Visit us at our office for in-person consultations, services, or
              inquiries. We’d love to meet you!
            </p>
            <p className="flex items-center mt-3 space-x-2 text-sm font-semibold">
              <AiOutlineHome className="w-5 h-5 text-purple-600" />
              <span>Visit Us</span>
            </p>
            <p className="text-sm text-gray-500">
              NO.716, Kohalwila Road, Dalugama,  Kelaniya
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-2">
            <p className="mb-3 text-sm font-semibold text-[#333333] text-opacity-80">
              Follow our social
            </p>
            <p className="mb-3 text-sm text-gray-500 w-[284px]">
              Follow us on social media for updates, news, and insights. Stay
              connected with our latest!
            </p>

            <div className="flex flex-col space-y-2">
              <a
                href="https://www.facebook.com/AsipiyaSoftSolutions?mibextid=ZbWKwL"
                className="flex items-center space-x-2 text-sm text-purple-600"
              >
                <AiOutlineFacebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/asipiyasoftsolutions/"
                className="flex items-center space-x-2 text-sm text-purple-600"
              >
                <AiOutlineInstagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>

              <a
                href="https://www.linkedin.com/company/asipiya/"
                className="flex items-center space-x-2 text-sm text-purple-600"
              >
                <AiOutlineLinkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <br />
      <br />

      <Footer />

      {/* Popup for success message */}
      {showPopup && (
        <div className="fixed inset-0 z-[1050] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="mb-4 text-xl font-semibold text-center text-gray-800">
              Conatct form Submitted Successfully!
            </h2>
            <p className="mb-6 text-sm text-center text-gray-600">
            Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.
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
    </div>
  );
}

export default Contact;
