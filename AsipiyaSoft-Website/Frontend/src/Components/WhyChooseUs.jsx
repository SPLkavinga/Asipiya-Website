import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import choose from "../assets/choose.png";

function WhyChooseUs() {
  const features = [
    {
      title: "Client-Centric Approach",
      description:
        "We prioritize our clients by tailoring solutions to their unique needs, ensuring satisfaction at every step.",
    },
    {
      title: "Innovation and Technology",
      description:
        "We leverage cutting-edge technology to deliver innovative solutions that drive success.",
    },
    {
      title: "Experienced Team",
      description:
        "Our team of seasoned professionals brings expertise and dedication to every project.",
    },
    {
      title: "Customization and Flexibility",
      description:
        "We offer highly flexible solutions, customized to align with your business goals.",
    },
    {
      title: "Results-Driven Solutions",
      description:
        "Our focus is on delivering measurable results that propel your business forward.",
    },
    {
      title: "Transparent Communication",
      description:
        "We maintain clear and open communication to foster trust and collaboration.",
    },
  ];

  const [selectedFeature, setSelectedFeature] = useState(null);

  // Detect screen size on window resize or initial load
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Assuming 768px is the breakpoint for mobile
    };

    checkMobile(); // Check on initial load
    window.addEventListener("resize", checkMobile); // Add resize event listener

    return () => {
      window.removeEventListener("resize", checkMobile); // Clean up on component unmount
    };
  }, []);

  // Set the first feature as selected by default on mobile screens
  useEffect(() => {
    if (isMobile) {
      setSelectedFeature(0); // Set first feature as selected on mobile
    } else {
      setSelectedFeature(null); // Reset on desktop
    }
  }, [isMobile]);

  function handleFeatureClick(index) {
    if (selectedFeature === index) {
      setSelectedFeature(null);
    } else {
      setSelectedFeature(index);
    }
  }

  function renderFeatures() {
    return features.map((feature, index) => {
      const isActive = selectedFeature === index;
      return (
        <li
          key={index}
          className="pb-4 text-lg text-gray-700 border-b border-gray-300"
        >
          <button
            onClick={() => handleFeatureClick(index)}
            className={
              "flex items-center w-full text-left " +
              (isActive ? "font-bold text-[#7D00C5]" : "")
            }
          >
            <span className="flex items-center justify-center inline-block w-5 h-5 mr-3 border-2 border-black rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-3 h-3 text-black"
              >
                <path d="M13.485 1.93a.5.5 0 0 1 .09.705l-8 9a.5.5 0 0 1-.748-.062l-4-5a.5.5 0 0 1 .767-.64l3.586 4.482 7.546-8.485a.5.5 0 0 1 .705-.09z" />
              </svg>
            </span>
            {feature.title}
          </button>
          {isActive && (
            <p className="mt-2 ml-8 text-sm text-gray-600">
              {feature.description}
            </p>
          )}
        </li>
      );
    });
  }

  return (
    <div className="flex flex-col items-center justify-between max-w-7xl p-4 mx-[20px] xl:mx-[120px] xxl:mx-auto mb-10 space-y-8 md:space-y-12 ">
      {/* Content Section */}
      <div className="flex flex-col items-center justify-center w-full space-y-8 md:flex-row md:space-y-0 md:space-x-8">
        {/* Image Section with animation */}
        <motion.div
          className="flex justify-center w-full md:w-1/2"
          initial={{ x: -100 }} // Start position off-screen to the left
          whileInView={{ x: 0 }} // Move to its final position
          transition={{ duration: 0.4, ease: "easeOut" }} // Smooth movement animation
          viewport={{ once: true }} // Trigger animation only once
        >
          <img
            src={choose}
            alt="Person working"
            className="w-full md:w-[590px] rounded-lg" // Ensure full width on smaller screens
          />
        </motion.div>

        {/* Feature List with Heading and animation */}
        <motion.div
          className="flex flex-col items-start w-full md:w-1/2"
          initial={{ x: 100 }} // Start position off-screen to the right
          whileInView={{ x: 0 }} // Move to its final position
          transition={{ duration: 0.4, ease: "easeOut" }} // Smooth movement animation
          viewport={{ once: true }} // Trigger animation only once
        >
          {/* Section Heading */}
          <h2 className="mb-8 text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800">
            Why <span className="text-[#7D00C5]">Choose Us?</span>
          </h2>

          {/* Feature List */}
          <ul className="space-y-4">{renderFeatures()}</ul>
        </motion.div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
