import NavBar from "./../Components/NabBar";
import Footer from "./../Components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.png";
import img2 from "../assets/bro.png";
import img3 from "../assets/rafiki.png";
import img4 from "../assets/Group 201.png";
import img5 from "../assets/amico.png";
import backgroundImg from "../assets/background.png";
import frame from "../assets/Frame 4.png";
import WhyChooseUs from "./../Components/WhyChooseUs";
import LogoRow from "../Components/LogoRow";
import ClientCarousel from "../Components/ClientCarousel";
import Cooperate from "../Components/Cooperate";
import ScrollToTopButton from "../Components/ScrollToTopButton";
// Import images for services
import erpImage from "../assets/SystemIcons/Icon5.png";
import pawningImage from "../assets/SystemIcons/Icon2.png";
import microfinanceImage from "../assets/SystemIcons/Icon1.png";
import goldLoanImage from "../assets/SystemIcons/Icon4.png";
import leasingImage from "../assets/SystemIcons/Icon3.png";
import realEstateImage from "../assets/SystemIcons/Icon7.png";
import socialMediaImage from "../assets/SystemIcons/Icon8.png";
import printingImage from "../assets/SystemIcons/Icon9.png";
import BackToTop from './../Components/BackToTop';

function Home() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen (down)
    visible: { opacity: 1, y: 0 }, // Move to its final position (up)
  };
  const features = [
    {
      title: "Microfinance System",
      description:
        "Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet.",
      image: microfinanceImage,
      path: "/microfinance",
    },
    {
      title: "Pawning System",
      description:
        "Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet.",
      image: pawningImage,
      path: "/Prawing",
    },
    {
      title: "Leasing System",
      description:
        "Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet.",
      image: leasingImage,
      path: "/Leasing",
    },
    {
      title: "ERP Solutions",
      description:
        "Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet.",
      image: erpImage,
      path: "/ERP",
    },
    {
      title: "Invoice System",
      description:
        "Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet.",
      image: goldLoanImage,
      path: "/ERP",
    },
    
  ];

  const reviews = [
    {
      name: "Sarah Thompson",
      role: "Project Manager",
      rating: "★★★★☆",
      text: "Excellent experience working with Asipiya Soft Solutions! Their team delivered a high-quality solution on time, with outstanding communication throughout the project.",
      date: "23 june 2024",
    },
    {
      name: "Michael Turner",
      role: "Product Owner",
      rating: "★★★★★",
      text: "The project was delivered efficiently, and we couldn't be happier with the final product. Great team to work with!",
      date: "10 Feb 2024",
    },
    {
      name: "Tharindu Perera",
      role: " Marketing Manager",
      rating: "★★★★☆",
      text: "Highly satisfied with the results! The team at Asipiya Soft Solutions was dedicated, professional, and delivered exactly what we wanted.",
      date: "5 Mar 2024",
    },
  ];
  
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Switch review every 5 seconds (5000ms)

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleDotClick = (index) => {
    setCurrentReviewIndex(index);
  };

  const [loading, setLoading] = useState(true);

  // Simulate a loading delay of 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

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
      <BackToTop/>

      {/* Full-screen background section */}
      <div
        className="relative flex flex-col items-center justify-center w-full h-[650px] md:h-screen bg-center bg-cover md:flex-row-reverse  "
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 z-0 bg-black bg-opacity-50"></div>

        {/* Main container with mx-[120px] */}
        <div className="mx-[120px] flex flex-col-reverse xl:flex-row items-center">
          {/* Text content on the left side */}
          <div className="z-10 w-full px-4 text-center xl:w-1/2 md:pr-8 xl:text-left">
            {/* Add Framer Motion animations to each line of text */}
            <motion.div
              className="section-container"
              initial={{ opacity: 0, y: -50 }} // Start off-screen at the top
              animate={{ opacity: 1, y: 0 }} // Move into place
              transition={{ duration: 0.5 }} // Animation timing
            >
              <h2 className="text-[30px] xl:text-[47.78px] font-semibold text-white">
                Empowering Lives
              </h2>
              <h2 className="text-[30px] xl:text-[47.78px] font-semibold text-white">
                Globally
              </h2>
              <h2 className="text-[30px] xl:text-[47.78px] font-semibold text-white">
                With Trusted Microfinance
              </h2>
              <h2 className="mb-[8px] text-[30px] xl:text-[47.78px] font-semibold text-white">
                Solutions.
              </h2>
            </motion.div>

            <motion.div
              className="section-container"
              initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
              animate={{ opacity: 1, x: 0 }} // Move into place
              transition={{ duration: 0.5 }} // Animation timing
            >
              <motion.p className="md:mb-[32px] mb-[16px] text-[14px] md:text-[19.2px] font-normal text-white">
                Empowering Businesses with Scalable and Flexible Microfinance
                Solutions.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }} // Start off-screen below
              animate={{ opacity: 1, y: 0 }} // Move into place
              transition={{ duration: 0.5 }} // Animation timing
              className="flex justify-center w-full xl:justify-start"
            >
              <Link
                className="w-[150px] h-[45px] xl:w-[250px] xl:h-[50px] py-2 mb-4 text-[16px] xl:text-[19.2px] font-semibold text-white bg-[#7D00C5] hover:bg-[#5C0091] rounded-full flex items-center justify-center"
                to="/About"
              >
                Let's get started
              </Link>
            </motion.div>
          </div>

          {/* Image on the right side */}
          <div className="w-[350px] h-[250px] md:w-[639px] md:h-[404px] flex justify-center md:justify-start mb-4 md:mb-0 z-10 mt-5">
            <motion.div
              initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
              animate={{ opacity: 1, x: 0 }} // Slide to its final position
              transition={{ duration: 0.7, ease: "easeOut" }} // Define timing and easing
            >
              <img src={img1} alt="Placeholder" />
            </motion.div>
          </div>
        </div>
      </div>
      <br />

      <div className="mx-[20px] xl:mx-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start below
          whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[30px] md:text-[39.81px] font-medium text-center mt-[30px] md:mt-[78px]">
            Our <span className="text-[#7D00C5]"> Services</span>
          </p>
          <p className="mt-[4px] text-center text-slate-500 text-[15px] md:text-[16px]">
            At Asipiya Soft Solutions, we specialize in designing scalable
            microfinance solutions that drive your business forward in the
            digital era.
          </p>
          <p className="text-center text-slate-500 text-[15px] md:text-[16px]">
            Partner with us to unlock innovation, boost efficiency, and achieve
            sustainable growth.
          </p>
          <p className="text-center text-slate-500 mb-[16px] text-[15px] md:text-[16px]">
            Let’s shape the future of your enterprise together.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="py-12 bg-[#CFB1D4] bg-opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-[20px] mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Features Grid */}
          <motion.div
            className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 50 }} // Start below
            whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1,
                  boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
                }} // Scale and shadow on hover
                transition={{ duration: 0.3 }}
                className="rounded-xl"
              >
                <Link
                  to={feature.path}
                  className="flex items-center p-2 transition rounded-xl hover:bg-purple-50 hover:shadow-sm"
                >
                  {/* Image on the left */}
                  <div className="mr-4">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[150px] object-contain"
                    />
                  </div>

                  {/* Title and Description on the right */}
                  <div>
                    <h3 className="mb-2 text-[23.04px] font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Button */}
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 8px 15px rgba(125, 0, 197, 0.3)",
              }} // Scale and shadow on hover
              whileTap={{ scale: 0.95 }} // Shrink slightly on click
              className="w-[183px] h-[48px] px-6 py-1 text-[16px] font-semibold text-white transition bg-[#7D00C5] hover:bg-[#5C0091] rounded-full"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Micro Finance section */}
      <div className="mx-[20px] md:mx-[20px] lg:mx-[120px] flex flex-col items-center justify-center  xl:flex-row-reverse mt-[40px] md:mt-[120px]">
        {/* Image Section */}
        <motion.div
          className="w-[250px] h-[150px] md:w-[400px] md:h-[250px] xl:w-[500px] xl:h-[366.59px] mb-4 xl:mb-0  flex justify-center md:justify-start "
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
          whileInView={{ opacity: 1, x: 0 }} // Slide in from right when in view
          viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% of element is in view
          transition={{ duration: 0.4, ease: "easeOut" }} // Smooth transition
        >
          <img src={img2} alt="Placeholder" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full text-center md:w-1/2 xl:text-left "
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-[30px] md:text-[39.81px] font-semibold text-[#7D00C5] md:mb-0">
            Revolutionary
          </h2>
          <h2 className="text-[30px] md:text-[39.81px] font-semibold md:mb-2">
            Microfinance Solutions
          </h2>
          <h2 className="mb-4 text-[30px] md:text-[39.81px] font-bold">
            Development
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#525252]">
            Building scalable microfinance solutions, ready-to-launch tools, and{" "}
            <br />
            applications powered by cutting-edge technologies for financial{" "}
            <br />
            empowerment.
          </p>
        </motion.div>
      </div>

      {/* Language icon section */}
      <LogoRow />

      {/*ClientCarousel */}
      <ClientCarousel />

      <div className="mx-[20px] md:mx-[20px] lg:mx-[120px] flex flex-col items-center justify-center xl:flex-row-reverse mt-[40px] md:mt-[80px]">
        <motion.div
          className="flex flex-col-reverse items-center justify-center gap-8 p-5 bg-white md:gap-12 xl:flex-row xl:items-start xl:justify-between"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
        >
          {/* Left: Review Card */}
          <motion.div
            className="flex justify-center w-full lg:w-[600px]"
            initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
            animate={{ opacity: 1, x: 0 }} // Move into place
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="p-4 md:p-6 bg-white shadow-lg rounded-lg w-[90%] sm:w-[75%] md:w-[80%] transition-transform duration-300 ease-in-out transform">
              <h3 className="text-base font-semibold sm:text-lg">
                {reviews[currentReviewIndex].name}
              </h3>
              <p className="text-sm text-gray-500">
                {reviews[currentReviewIndex].role}
              </p>
              <div className="flex items-center mb-[4px]">
                <span className="text-sm text-yellow-400 sm:text-base">
                  {reviews[currentReviewIndex].rating}
                </span>
              </div>
              <p className="text-sm text-gray-700 sm:text-base">
                {reviews[currentReviewIndex].text}
              </p>
              <p className="mt-4 text-xs text-gray-400">
                {reviews[currentReviewIndex].date}
              </p>

              {/* Dot Indicator Below the Review Card */}
              <div className="flex justify-center gap-2 mt-4">
                {reviews.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2.5 h-2.5 rounded-full cursor-pointer hover:bg-gray-500 ${
                      currentReviewIndex === index
                        ? "bg-[#7D00C5]"
                        : "bg-gray-400"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Title and Description */}
          <motion.div
            className="w-full text-center md:w-full lg:w-[575px] xl:text-left"
            initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }} // Move into place
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <h2 className="text-[30px] md:text-[39.81px] font-medium">
              <span className="text-[#7D00C5]">Client’s</span> Reviews
            </h2>
            <p className="mt-2 text-[15px] md:text-[16px] text-[#525252]">
              Our clients trust us for delivering reliable, innovative
              microfinance solutions that drive growth and success across
              industries worldwide.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Countries Serve Section */}
      <div>
        <motion.div className="mx-[20px] md:mx-[20px] lg:mx-[120px] flex flex-col items-center justify-center  xl:flex-row mt-[40px] md:mt-[80px]">
          {/* Image Section */}
          <motion.div
            className="w-[250px] h-[150px] md:h-[350px] md:w-[590px] flex justify-center xl:justify-start "
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              className="object-contain"
              src={img3}
              alt="Countries We Serve"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full text-center md:w-full lg:w-1/2 lg:pl-16 xxl:p-48 xl:text-left"
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-[39.81px] font-bold ">
              <span className="text-[#7D00C5]">Countries </span>We Serve
            </h2>
            <p className="mt-4 text-[15px] md:text-[16px]  xl:mx-[0px] mx-[20px] text-[#525252] xxl:w-[600px]">
              We offer innovative microfinance solutions in Dubai, the United
              States, Canada, Singapore, Sri Lanka, and Australia, empowering
              businesses and communities with reliable financial support.
            </p>
            <div className="flex justify-center xl:justify-start">
              <img className="h-10 mt-6" src={img4} alt="Countries we serve" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Cooperate />

      <Footer />
    </div>
  );
}

export default Home;
