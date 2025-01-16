import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaSchool,
  FaUsers,
  FaCalendarAlt,
  FaRegClock,
  FaTimes,
} from "react-icons/fa";
import CountUp from "react-countup";
import { Slide } from "react-awesome-reveal";
import Countdown from "react-countdown";
import backgroundImg from "../assets/bg2.png";
import vission from "../assets/vission.png";
import mission from "../assets/mission.png";
import value from "../assets/value.png";
import designImage from "../assets/design.png";
import developmentImage from "../assets/develop.png";
import testingImage from "../assets/test.png";
import img5 from "../assets/choose2.png";
import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
import Footer from "./../Components/Footer";
import NavBar from "./../Components/NabBar";
import WhyChooseUs from "./../Components/WhyChooseUs";
import Leadership from "./../Components/Leadership";
import Cooperate from "../Components/Cooperate";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import AnimatedSection from "../Components/AnimatedSection";
import BackToTop from './../Components/BackToTop';

function AboutUs() {
  const [loading, setLoading] = useState(true);

  // Simulate a loading delay of 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen (down)
    visible: { opacity: 1, y: 0 }, // Move to its final position (up)
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
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

  // Main page content after loading
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <BackToTop/>
      {/* Full-screen background section */}
      <div
        className="relative flex items-center justify-start w-full h-auto bg-center bg-cover md:h-screen"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
        }}
      >
        {/* Darker overlay */}
        <div className="absolute inset-0 z-0 bg-black bg-opacity-70"></div>
        <div className="z-10 w-full py-8 text-center xl:text-left md:w-full md:px-4 xl:mx-[120px] mx-[20px]">
          <motion.p
            className="mb-[16px] text-sm text-white md:text-[19.2px]"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={textVariants}
          >
            About US
          </motion.p>
          <motion.h2
            className="text-4xl font-semibold text-white md:text-[47.78px] mb-2"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={textVariants}
          >
            Design & Develop For
          </motion.h2>
          <motion.h2
            className="text-4xl font-semibold text-white md:text-[47.78px] mb-[8px]"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={textVariants}
          >
            Better Solution
          </motion.h2>
          <motion.p
            className="mb-8 text-white md:text-[16px] font-normal leading-normal tracking-wide w-full md:w-full xl:w-[692px]"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
            variants={textVariants}
          >
            Welcome to Asipiya Soft Solutions PVT Ltd, your gateway to
            comprehensive and cutting-edge software solutions tailored for
            businesses of all sizes. At Asipiya Soft Solutions, we pride
            ourselves on being your trusted partner in navigating the digital
            landscape, offering a range of services designed to enhance and
            streamline your business operations.
          </motion.p>
        </div>
      </div>

      {/* Count Row Section (White) */}
      <section className="container px-6 py-10 mx-auto text-black mt-28 bg-gradient-to-r from-purple-400 via-purple-100 to-purple-400 xl:px-20 xl:w-full ">
        <Slide direction="up" triggerOnce>
          <div className="grid grid-cols-1 gap-6 text-center xl:grid-cols-4 xl:gap-8 xl:px-40">
            <div className="p-2">
              <p className="text-[60px] text-[#7D00C5] font-bold">
                <CountUp end={5} duration={2} />+
              </p>
              <p className="text-sm">Years of Experience</p>
            </div>
            <div className="p-2">
              <p className="text-[60px] text-[#7D00C5] font-bold">
                <CountUp end={100} duration={2} />%
              </p>
              <p className="text-sm">Satisfied Clients</p>
            </div>
            <div className="p-2">
              <p className="text-[60px] text-[#7D00C5] font-bold">
                <CountUp end={30} duration={2} />+
              </p>
              <p className="text-sm">Expert Team Member</p>
            </div>
            <div className="p-2">
              <p className="text-[60px] text-[#7D00C5] font-bold">
                <CountUp end={35} duration={2} />
                +
              </p>
              <p className="text-sm">Projects Completed</p>
            </div>
          </div>
        </Slide>
      </section>

      {/* Mission Vision Section */}

      <section className="container py-10 mt-5 md:mt-10 ">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center gap-6 xl:flex-row md:gap-8 mx-[20px] xl:mx-[120px]">
            {/* Vision */}
            <div className="w-[350px] text-center">
              <div className="flex items-center justify-center">
                <img
                  className="w-[183px] h-[177px]"
                  src={vission}
                  alt="Vision"
                />
              </div>
              <p className="mt-4 text-[39.81px] text-[#333333] font-semibold">
                Our Vision
              </p>
              <p className="mt-2 text-[16px] text-[#525252] text-opacity-80">
                Pioneering transformative software solutions <br /> for business
                success in a tech-driven future.
              </p>
            </div>

            {/* Vertical Line (Hidden on small screens, shown on larger screens) */}
            <div className="hidden lg:block w-[3px] h-[180px] bg-gray-300 mx-4 mt-12"></div>

            {/* Mission */}
            <div className="w-[350px] text-center">
              <div className="flex items-center justify-center">
                <img
                  className="w-[183px] h-[177px]"
                  src={mission}
                  alt="Mission"
                />
              </div>
              <p className="mt-4 text-[39.81px] text-[#333333] font-semibold">
                Our Mission
              </p>
              <p className="mt-2 text-[16px] text-[#525252] text-opacity-80">
                Empowering businesses through innovative software solutions,
                seamlessly integrating technology for operational efficiency and
                sustainable success.
              </p>
            </div>
            {/* Vertical Line (Hidden on small screens, shown on larger screens) */}
            <div className="hidden lg:block w-[3px] h-[180px] bg-gray-300 mx-4 -mt-12"></div>

            {/* Values */}
            <div className="w-[350px] text-center">
              <div className="flex items-center justify-center">
                <img className="w-[183px] h-[177px]" src={value} alt="Values" />
              </div>
              <p className="mt-4 text-[39.81px] text-[#333333]  font-semibold">
                Our Values
              </p>
              <p className="mt-2 text-[16px] text-[#525252] text-opacity-80">
                Empowering businesses through innovative software solutions,
                seamlessly integrating technology for operational efficiency and
                sustainable success.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Why ChooseUs Section */}
      <div className="mt-6 md:mt-16">
        <WhyChooseUs />
      </div>
      {/* Design, Development, Testing Section */}
      <div className="w-full py-16">
        <div className="container mx-auto  px-[20px] xl:px-[200px] xxl:px-[200px] flex flex-col space-y-[90px]">
          {/* Design Card */}
          <div className="relative group transform hover:scale-105 transition-all duration-300 shadow-xl rounded-lg bg-gradient-to-r from-[#8A56AC] to-[#CFB1D4] p-6">
            <div className="absolute p-4 transform -translate-x-1/2 bg-white rounded-full -top-10 left-1/2">
              <img
                src={designImage}
                alt="Design"
                className="object-cover w-16 h-16"
              />
            </div>
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-semibold text-white transition-colors group-hover:text-gray-800">
                Design
              </h2>
              <p className="mt-2 text-sm text-white transition-colors group-hover:text-gray-700">
                Fuse creativity and function to shape ideas into captivating,
                user-centric <br /> design blueprints.
              </p>
            </div>
            {/* Arrow below the Design card */}
            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="55"
                fill="none"
                viewBox="0 0 27 55"
              >
                <g clip-path="url(#a)">
                  <path
                    fill="#0D1927"
                    d="M10.317 41.639v-3.674c.119-10.428.357-20.975.476-31.404 0-1.185 0-2.251.119-3.436.118-1.541.475-3.437 2.497-3.082.833.119 1.785 1.897 1.903 2.963.476 8.77.833 17.42 1.19 26.19.119 2.014 0 4.029 1.07 6.162 1.428-2.37 2.617-4.859 4.163-7.11.714-1.067 2.498-2.252 3.569-2.015 2.14.474 1.903 2.844 1.19 4.266-3.093 7.11-6.186 14.34-9.873 21.213-2.379 4.384-5.947 4.384-8.326 0C5.083 45.904 2.705 39.623.088 33.58c-.357-.71.475-1.896.713-2.844.952.356 2.38.356 2.855 1.067 1.19 1.422 1.903 3.318 2.855 4.977.951 1.777 1.903 3.555 2.854 5.214.238-.237.595-.355.952-.355Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h27v55H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/* Development Card */}
          <div className="relative group transform hover:scale-105 transition-all duration-300 shadow-xl rounded-lg bg-gradient-to-r from-[#2A9D8F] to-[#6FCF97] p-6">
            <div className="absolute p-4 transform -translate-x-1/2 bg-white rounded-full -top-10 left-1/2">
              <img
                src={developmentImage}
                alt="Development"
                className="object-cover w-16 h-16"
              />
            </div>
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-semibold text-white transition-colors group-hover:text-gray-800">
                Development
              </h2>
              <p className="mt-2 text-sm text-white transition-colors group-hover:text-gray-700">
                Our skilled developers bring designs to life with cutting-edge
                tech, crafting <br /> scalable, robust products.
              </p>
            </div>
            {/* Arrow below the Development card */}
            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="55"
                fill="none"
                viewBox="0 0 27 55"
              >
                <g clip-path="url(#a)">
                  <path
                    fill="#0D1927"
                    d="M10.317 41.639v-3.674c.119-10.428.357-20.975.476-31.404 0-1.185 0-2.251.119-3.436.118-1.541.475-3.437 2.497-3.082.833.119 1.785 1.897 1.903 2.963.476 8.77.833 17.42 1.19 26.19.119 2.014 0 4.029 1.07 6.162 1.428-2.37 2.617-4.859 4.163-7.11.714-1.067 2.498-2.252 3.569-2.015 2.14.474 1.903 2.844 1.19 4.266-3.093 7.11-6.186 14.34-9.873 21.213-2.379 4.384-5.947 4.384-8.326 0C5.083 45.904 2.705 39.623.088 33.58c-.357-.71.475-1.896.713-2.844.952.356 2.38.356 2.855 1.067 1.19 1.422 1.903 3.318 2.855 4.977.951 1.777 1.903 3.555 2.854 5.214.238-.237.595-.355.952-.355Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h27v55H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/* Testing & QA Card */}
          <div className="relative group transform hover:scale-105 transition-all duration-300 shadow-xl rounded-lg bg-gradient-to-r from-[#FF6F61] to-[#FAD4D4] p-6">
            <div className="absolute p-4 transform -translate-x-1/2 bg-white rounded-full -top-10 left-1/2">
              <img
                src={testingImage}
                alt="Testing & QA"
                className="object-cover w-16 h-16"
              />
            </div>
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-semibold text-white transition-colors group-hover:text-gray-800">
                Testing & QA
              </h2>
              <p className="mt-2 text-sm text-white transition-colors group-hover:text-gray-700">
                We meticulously test every aspect, ensuring flawless
                functionality and <br /> delivering a superior product.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section <Leadership />*/}

      {/* Cooperate Section */}
      <Cooperate />

      <Footer />
    </div>
  );
}

export default AboutUs;
