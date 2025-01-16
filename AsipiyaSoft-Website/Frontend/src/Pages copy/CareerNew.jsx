import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import backgroundImg from "../assets/Vacancy.png";
import Footer from "../Components/Footer";
import NavBar from "../Components/NabBar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import ApplyForm from "../Components/ApplyForm";
import BackToTop from "../Components/BackToTop";
import axiosClient from "../API/axios"; 

function CareerNew() {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await axiosClient.get("/data");
        console.log("API Response:", response.data); 
        setVacancies(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching vacancies:", error.response || error.message);
        setLoading(false);
      }
    };
    fetchVacancies();
  }, []);
  
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
        <div className="z-10 w-full px-6 py-8 text-center md:w-2/3 md:px-20">
          <motion.h2
            className="text-4xl font-bold text-white md:text-5xl"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={textVariants}
          >
            Come and Innovate
          </motion.h2>
          <motion.h2
            className="text-4xl font-bold text-white md:text-5xl"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={textVariants}
          >
            with Us
          </motion.h2>
          <motion.p
            className="mt-4 text-sm text-white md:text-lg"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={textVariants}
          >
            Be a part of our mission to revolutionize the future through the
            implementation of innovative and intelligent technological
            solutions.
          </motion.p>
        </div>
      </div>

      <div className="flex items-center justify-center px-4 py-10 md:p-20">
        <div className="w-full max-w-[1200px]">
          <h1 className="mb-[8px] text-3xl font-bold text-center text-[#333333]">
            Open <span className="text-[#7D00C5]"> Vacancies</span>
          </h1>
          <div className="h-1 max-w-screen-xl mt-1 bg-gray-600"></div>
          <div className="p-6">
            {vacancies.map((vacancy, index) => (
              <Link
                to={`/career/${vacancy.title}`}
                key={index}
                className="block mb-4"
              >
                <div className="flex flex-col items-start p-6 h-full xl:h-[84px] transition-colors border-2 border-[#D9D9D9] rounded-[15px] bg-[#F9F5FF] hover:border-purple-600 md:flex-row md:justify-between md:items-center">
                  <span className="text-[15px] xl:text-[16px] font-semibold text-[#333333]">
                    {vacancy.title}
                  </span>
                  <div className="flex flex-wrap justify-start gap-2 mt-3 md:mt-0 md:justify-end">
                    <span className="px-5 py-2 text-[13.33px] font-bold border-2 border-[#D9D9D9] text-gray-600 bg-white rounded-full">
                      {vacancy.job_type} {/* Display the job type */}
                    </span>
                    <span className="flex items-center px-4 py-2 text-[13.33px] font-bold border-2 border-[#D9D9D9] text-gray-600 bg-white rounded-full">
                      <FaArrowRight className="text-gray-500" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ApplyForm />
      <Footer />
    </>
  );
}

export default CareerNew;
