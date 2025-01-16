
import { Link } from "react-router-dom";
import Footer from "./../Components/Footer";
import NavBar from "./../Components/NabBar";
import Cooperate from "./../Components/Cooperate";
import backgroundImg from "../assets/servicesbg.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/Cash1.png";
import img3 from "../assets/Cash2.png";
import img4 from "../assets/cost3.png";
import img5 from "../assets/cash3.png";
import img6 from "../assets/cash4.png";
import BusinessForward from "./../Components/BusinessForward";
import { motion } from "framer-motion";
import AnimatedSection from "../Components/AnimatedSection";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import BackToTop from './../Components/BackToTop';

const features = [
  {
    title: "Enhanced Efficiency",
    description:
      "Streamline your Pawning operations with automated tools and real-time tracking.",
    icon: "🏢", // Replace with SVG or actual icon
  },
  {
    title: "User-Friendly Interface",
    description:
      "Enjoy a simple, intuitive design that makes Pawning easier for all user",
    icon: "📱", // Replace with SVG or actual icon
  },
  {
    title: "Data-Driven Insights",
    description:
      "Leverage powerful analytics to optimize your Pawning strategies and performance.",
    icon: "📊", // Replace with SVG or actual icon
  },
  {
    title: "Seamless Integration ",
    description:
      " Integrate Asipiya Pawning effortlessly with your existing workflows and technology.",
    icon: "📋", // Replace with SVG or actual icon
  },
  {
    title: "Real-Time Updates",
    description:
      "Get instant notifications and live monitoring for better decision-making",
    icon: "👥", // Replace with SVG or actual icon
  },
  {
    title: "Customizable Features",
    description:
      "Adapt Asipiya Pawning to suit your unique prawning needs with flexible options.",
    icon: "💼", // Replace with SVG or actual icon
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 50 }, // Start off-screen (down)
  visible: { opacity: 1, y: 0 }, // Move to its final position (up)
};

const Prawing = () => {
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
    <>
      <NavBar />
      <BackToTop/>
      {/* Full-screen background section */}
      <div
        className="relative flex flex-col items-center justify-center w-full  h-[650px] xl:h-screen  bg-center bg-cover xl:flex-row-reverse "
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Image on the right side */}
        <div className="w-[350px] h-[250px] xl:w-[639px] xl:h-[404px] flex justify-center xl:justify-start mb-4 md:mb-0 z-10 mr-[20px] xl:mr-[120px] mt-10 xl:mt-0">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={img1}
            alt="Placeholder"
          />
        </div>

        {/* Text content on the left side */}
        <div className="z-10 w-full py-8 text-center xl:w-1/2  md:text-left p-4 ml-[0px] xl:ml-[120px] md:py-0  ">
          <motion.h2
            className="text-[30px] xl:text-[47.78px] font-semibold text-black text-opacity-70 text-center xl:text-start"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={textVariants}
          >
            Discover <br /> smarter prawning with Asipiya Pawning.
          </motion.h2>
          <motion.p
            className="mt-3 mb-8 text-[16px] xl:text-[19.2px] font-medium text-black text-opacity-70 text-center xl:text-start"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={textVariants}
          >
            Get total control of your prawning operations with the Asipiya
            Pawning
          </motion.p>

          {/* Button below the text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={textVariants}
            className="flex justify-center w-full xl:justify-start"
          >
            <Link
              className="w-[150px] h-[45px] xl:w-[250px] xl:h-[50px] py-2 mb-4 text-[16px] xl:text-[19.2px] font-semibold text-white bg-[#7D00C5]  hover:bg-[#5C0091] rounded-full flex items-center justify-center"
              to="/About"
            >
              Let's get started
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Microfinance Solution section */}
      <motion.div
        className="h-full  py-[16px] bg-purple-50 mt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-[20px] mx-auto xl:mx-auto  max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-[30px] xl:text-[32px] font-semibold text-[#333333] sm:text-4xl mt-[16px]">
              Why Choose Asipiya Pawning?
            </h2>
          </div>

          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 "
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col text-left bg-purple-50">
                <div className="mb-4 text-5xl text-black">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-left text-gray-800 ">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 w-[350px] xl:w-[375px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
          <div className="mt-[32px] text-center">
            <button className="w-[183px] h-[48px] px-6  text-[16px] font-semibold text-white transition bg-[#7D00C5]  hover:bg-[#5C0091] rounded-full">
              Explore
            </button>
          </div>
        </div>
      </motion.div>

      <p className="mt-10 text-[32px] font-semibold text-[#333333] text-center">
        How Can Asipiya Pawning System Help You?
      </p>
      <p className="mt-3 text-center text-[#666666]">
        Transform your business using Microfinance which will improve
        efficiency, reduce costs and give your business <br /> the ability to
        launch new products effortlessly with our cloud based Microfinance
        System. A proud Sri Lankan Product!
      </p>

      {/* information about micro finance section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img2} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10 ">
            <h2 className="text-2xl font-bold ">
              Gold Valuation and Collateral Management
            </h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Pawning Web App streamlines the assessment and
              valuation of gold items, ensuring accurate tracking of collateral
              and efficient loan issuance. With its intuitive interface, users
              can record gold item details, calculate their value, and maintain
              precise records for every transaction, enhancing both accuracy and
              accountability.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Cash Flow Monthly section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
            <img src={img3} alt="Placeholder" />
          </div>

          <div className="w-full p-4 text-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-2xl font-bold ">Pawning Ticket Issuance</h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Pawning Web App automatically generates comprehensive
              Pawning tickets, including detailed item descriptions, gold
              weight, assessed value, loan amount, interest rate, and maturity
              date. This ensures a seamless and professional process, reducing
              manual effort while maintaining accurate and standardized
              documentation for every transaction.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Profit/Loss section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img4} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10 ">
            <h2 className="text-2xl font-bold ">
              Loan Issuance Based on Gold Value
            </h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Pawning Web App facilitates loan issuance based on the
              appraised value of gold collateral. It offers customizable
              loan-to-value (LTV) ratios, allowing flexibility to align with
              business policies and customer needs while ensuring accurate and
              efficient loan processing.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Balance Sheet section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
            <img src={img4} alt="Placeholder" />
          </div>

          <div className="w-full p-4 text-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-2xl font-bold ">
              Interest and Penalty Calculation
            </h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Pawning Web App automatically calculates loan interest
              and overdue payment penalties, incorporating customizable
              parameters. Additionally, it can factor in gold market
              fluctuations, ensuring precise and dynamic financial management
              aligned with market trends and customer agreements.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Trial Balancet section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img4} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10 ">
            <h2 className="text-2xl font-bold ">
              Renewal and Redemption Options
            </h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Pawning Web App streamlines the management of loan
              renewals and gold item redemptions. It allows customers to renew
              pawning loans with ease, updating terms and conditions as needed.
              Upon loan repayment, the app facilitates the secure and efficient
              redemption of gold items, ensuring a seamless and
              customer-friendly experience.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* General Ledger Summary section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
            <img src={img5} alt="Placeholder" />
          </div>

          <div className="w-full p-4 text-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-2xl font-bold ">Gold Auction Management</h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Pawning Web App manages the auction process for
              unredeemed gold efficiently. It tracks inventory, schedules
              auctions, and records detailed bidding information, ensuring
              transparency and accuracy. The app streamlines the process from
              item listing to final sale, helping businesses maximize value
              while maintaining compliance with regulatory requirements.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* 	Branch Equity section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img4} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10 ">
            <h2 className="text-2xl font-bold ">
              Document and Asset Management
            </h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Pawning Web App allows users to upload and securely
              store gold appraisals, pawn tickets, and customer documents. It
              ensures easy access to records through an organized and searchable
              system, enhancing efficiency while maintaining data
              confidentiality and compliance with record-keeping regulations.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Interbank Transfers section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
            <img src={img6} alt="Placeholder" />
          </div>

          <div className="w-full p-4 text-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-2xl font-bold ">
              Bulk Payment and Invoice Processing
            </h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Pawning Web App streamlines the repayment process by
              enabling the bulk updating of multiple payments and generating
              invoices in batches. This feature enhances efficiency in loan
              management, reduces manual effort, and ensures accurate financial
              records for both customers and the business.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* General Ledger Summary: section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img6} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10 ">
            <h2 className="text-2xl font-bold ">Service Benefits</h2>
            <p className="mt-4 text-base text-gray-500">
              .Service Assistance: The supplier agreed to provide service
              assistance for any software-related issues. <br />
              .Lifetime Software Updates: The supplier agreed to provide
              software updates whenever necessary
            </p>
          </div>
        </div>
      </AnimatedSection>

      <BusinessForward />
      <Cooperate />
      <Footer />
    </>
  );
};

export default Prawing;
