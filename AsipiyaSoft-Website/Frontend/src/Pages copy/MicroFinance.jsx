import React, { useEffect } from "react";
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
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import AnimatedSection from "../Components/AnimatedSection";
import { useState } from "react";
import logo from "../assets/logo.png";
import BackToTop from './../Components/BackToTop';

const features = [
  {
    title: "Easy access with your Mobile",
    description:
      "The Asipiya Microfinance System is designed for smooth operation on smartphones.",
    icon: "🏢", // Replace with SVG or actual icon
  },
  {
    title: "Secure Transactions",
    description:
      "Your data is protected with advanced security on the Asipiya Microfinance System.",
    icon: "📱", // Replace with SVG or actual icon
  },
  {
    title: "Data-Driven Insights",
    description:
      "Leverage powerful analytics to optimize your Pawning strategies and performance..",
    icon: "📊", // Replace with SVG or actual icon
  },
  {
    title: "Integrated Accounting",
    description:
      "With Asipiya Microfinance System, you gain access to fully automated financial reports and manual journal entry options, ensuring reduced paperwork and efficient management.",
    icon: "📋", // Replace with SVG or actual icon
  },
  {
    title: "Real-Time Updates",
    description:
      "Get instant notifications and live monitoring for better decision-making.",
    icon: "👥", // Replace with SVG or actual icon
  },
  {
    title: "24/7 Availability",
    description:
      "Round-the-clock access ensures convenience for users with varying schedules.",
    icon: "💼", // Replace with SVG or actual icon
  },
];

const Microfinance = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen (down)
    visible: { opacity: 1, y: 0 }, // Move to its final position (up)
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
        <div className="z-10 w-full py-8 text-center xl:w-1/2  md:text-left p-4 ml-[0px] xl:ml-[120px] md:py-0 ">
          <motion.h2
            className="text-[30px] xl:text-[47.78px] font-semibold text-black text-opacity-70 text-center xl:text-start"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={textVariants}
          >
            Empowering Lives Globally with Asipiya Microfinance Trusted
            Microfinance Solutions.
          </motion.h2>
          <motion.p
            className="mt-3 mb-8 text-[16px] xl:text-[19.2px] font-medium text-black text-opacity-70 text-center xl:text-start"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={textVariants}
          >
            Achieve complete control and visibility of your microfinance
            operations with the Asipiya Microfinance System .
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
        className="h-full   py-[16px] bg-purple-50 mt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-[20px] mx-auto  max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-[30px] xl:text-[32px] font-semibold text-[#333333] sm:text-4xl mt-[16px]">
              Why Choose Microfinance Solution?
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
        How Can Microfinance Help You?
      </p>
      <p className="mt-3 text-center text-[#666666] ">
        Transform your business with Asipiya Microfinance System, a cloud-based
        Microfinance System designed to improve efficiency, reduce costs,
        <br /> and enable effortless product launches.
      </p>

      <AnimatedSection>
        {/* information about micro finance section */}
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img2} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10 ">
            <h2 className="text-2xl font-bold ">
              Branch-wise Group/Loan Creation
            </h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Microfinance System allows organizations to create and
              manage groups and loans across various branches. This ensures
              seamless coordination and localized control while maintaining a
              centralized overview for better decision-making.
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
            <h2 className="text-2xl font-bold ">
              Member/Guarantor Registration
            </h2>
            <p className="mt-4 text-base text-gray-500">
              With the Asipiya Microfinance System, registering members and
              their guarantors is quick and efficient. It facilitates the secure
              submission of necessary documents, ensuring proper verification
              and compliance at every step.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        {/* information about micro finance section */}
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img2} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10 ">
            <h2 className="text-2xl font-bold ">Loan Categories</h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Microfinance System simplifies loan management by
              categorizing loans based on purpose, duration, or interest rates.
              This feature ensures better organization and enables users to
              retrieve loan information easily and efficiently.
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
            <h2 className="text-2xl font-bold ">Loan Issuance</h2>
            <p className="mt-4 text-base text-gray-500">
              Automate the loan issuance process with the Asipiya Microfinance
              System. By evaluating eligibility and streamlining the
              verification process, the system ensures loans are issued quickly
              and accurately, reducing manual errors and delays.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        {/* information about micro finance section */}
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img2} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10 ">
            <h2 className="text-2xl font-bold ">
              Interest/Penalty Calculation
            </h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Microfinance System takes care of complex calculations
              by automatically computing interest and penalties on loans. This
              feature eliminates errors, improves transparency, and provides
              real-time updates to both members and administrators.
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
            <h2 className="text-2xl font-bold ">
              Member/Guarantor Registration
            </h2>
            <p className="mt-4 text-base text-gray-500">
              With the Asipiya Microfinance System, registering members and
              their guarantors is quick and efficient. It facilitates the secure
              submission of necessary documents, ensuring proper verification
              and compliance at every step.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        {/* information about micro finance section */}
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img2} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10 ">
            <h2 className="text-2xl font-bold ">Document Management</h2>
            <p className="mt-4 text-base text-gray-500">
              Store and manage documents securely with the Asipiya Microfinance
              System. Upload and organize member profiles, guarantor details,
              loan agreements, and transaction records, ensuring quick access
              and reliable documentation.
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
            <h2 className="text-2xl font-bold ">Bulk Payment Update</h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Microfinance System enables organizations to update
              multiple payments simultaneously. This feature streamlines payment
              processing, reduces administrative errors, and saves valuable
              time.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        {/* information about micro finance section */}
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img2} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10 ">
            <h2 className="text-2xl font-bold ">Bulk Invoice Processing</h2>
            <p className="mt-4 text-base text-gray-500">
              Generate and process invoices in bulk with the Asipiya
              Microfinance System. This functionality ensures efficient billing,
              reduces delays, and enhances the overall financial workflow for
              organizations.
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
            <h2 className="text-2xl font-bold ">Cash Flow Monthly</h2>
            <p className="mt-4 text-base text-gray-500">
              The Cash Flow Monthly feature in Asipiya Microfinance System
              offers detailed insights into monthly cash inflows and outflows,
              helping your organization identify patterns, manage short-term
              liquidity, and ensure sufficient cash to meet operational needs.
              This feature supports budgeting and forecasting, enabling better
              financial planning and control.
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

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
            <h2 className="text-2xl font-bold ">Profit/Loss:</h2>
            <p className="mt-4 text-base text-gray-500">
              The Profit/Loss feature calculates the net profit or loss by
              comparing the company’s total revenues with its total expenses
              over a specific period. This is crucial for assessing the
              company's financial performance, understanding its profitability,
              and making informed business decisions. It helps in identifying
              areas of improvement, cost management, and revenue enhancement.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Balance Sheet section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center md:flex-row-reverse p-4 mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img4} alt="Placeholder" />
          </div>

          <div className="w-full p-4 text-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-2xl font-bold ">Balance Sheet</h2>
            <p className="mt-4 text-base text-gray-500">
              The Profit/Loss feature in Asipiya Microfinance System calculates
              net profit or loss by comparing your company’s total revenues with
              total expenses over a specific period. This is essential for
              assessing financial performance, understanding profitability, and
              making informed business decisions. It also helps identify areas
              for improvement, cost management, and revenue enhancement
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Trial Balancet section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center  md:flex-row p-6 mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img4} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
            <h2 className="text-2xl font-bold ">Trial Balance</h2>
            <p className="mt-4 text-base text-gray-500">
              The Trial Balance feature prepares a summary of all ledger
              accounts with their respective debit and credit balances. This
              serves as a preliminary check before preparing financial
              statements, ensuring that total debits equal total credits. It
              helps in identifying any discrepancies or errors in the accounting
              records, providing a basis for further adjustments and
              corrections.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* General Ledger Summary section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse  mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
            <img src={img5} alt="Placeholder" />
          </div>

          <div className="w-full p-4 text-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-2xl font-bold ">General Ledger Summary:</h2>
            <p className="mt-4 text-base text-gray-500">
              Asipiya Microfinance System’s Trial Balance feature summarizes all
              ledger accounts with debit and credit balances, ensuring that
              debits and credits match before preparing financial statements.
              This tool is key for detecting errors or discrepancies in
              accounting records, making it easier to identify areas that
              require adjustments or corrections.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* 	Branch Equity section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row  mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img4} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
            <h2 className="text-2xl font-bold "> Branch Equity</h2>
            <p className="mt-4 text-base text-gray-500">
              With Asipiya Microfinance System, the Branch Equity feature allows
              you to monitor and manage the equity of each branch individually.
              By evaluating financial performance, asset management, and
              profitability, this tool supports better decision-making and
              efficient resource allocation across your branches.
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

          <div className="p-4 w-fulltext-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-2xl font-bold ">Interbank Transfers</h2>
            <p className="mt-4 text-base text-gray-500">
              Asipiya Microfinance System’s Interbank Transfers feature enables
              smooth and accurate recording of fund transfers between your
              company’s bank accounts. This feature supports efficient cash
              management, optimizes liquidity, and ensures that financial
              obligations are met promptly.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* General Ledger Summary: section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row  mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img6} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10 mx-[20px] xl:mx-[120px]">
            <h2 className="text-2xl font-bold ">General Ledger Summary:</h2>
            <p className="mt-4 text-base text-gray-500">
              The General Ledger Summary feature in Asipiya Microfinance System
              consolidates and summarizes all financial transactions recorded in
              the general ledger. It provides a comprehensive overview of your
              company’s financial activities, supporting detailed financial
              analysis and reporting. This feature is essential for tracking
              financial performance, managing accounts, and preparing accurate
              financial statements
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Reconcile Entries section */}
      <AnimatedSection>
        <div className="flex flex-col items-left justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
            <img src={img4} alt="Placeholder" />
          </div>

          <div className="w-full p-4 text-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-2xl font-bold ">Reconcile Entries</h2>
            <p className="mt-4 text-base text-gray-500">
              Asipiya Microfinance System’s Reconcile Entries feature ensures
              financial accuracy by matching and verifying records with bank
              statements or external documents. This includes managing
              discrepancies, such as when cash collectors have deposited
              customer amounts but haven’t updated the company’s system. The
              process covers: <br />
              • Identifying missing or mismatched entries by comparing bank
              deposits with system records. <br />
              • Updating the system to reflect accurate balances, ensuring all
              transactions are accounted for. <br />
              • Maintaining the integrity of financial data with up-to-date
              records. <br />
              • Generating reconciliation reports to aid financial auditing and
              compliance. <br />
              This feature is essential for ensuring the accuracy of financial
              statements and preventing fraud.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Manual Journal: section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row  mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2  mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img5} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
            <h2 className="text-2xl font-bold ">Manual Journal:</h2>
            <p className="mt-4 text-base text-gray-500">
              Asipiya Microfinance System’s Manual Journal feature gives you the
              ability to record and manage journal entries manually for
              transactions that aren’t automatically processed. This feature
              handles adjustments, corrections, and complex entries, ensuring
              that every financial activity is accurately documented, while
              offering flexibility and control over your accounting workflow.
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
            <h2 className="text-2xl font-bold ">Account Creation</h2>
            <p className="mt-4 text-base text-gray-500">
              With the Asipiya Microfinance System, creating and managing
              savings accounts is effortless. Members can open accounts to
              securely deposit and withdraw funds, offering a convenient way to
              manage their savings.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        {/* information about micro finance section */}
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img2} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10 ">
            <h2 className="text-2xl font-bold ">Interest Calculation</h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Microfinance System automates interest calculations
              for savings accounts. Interest is computed based on predefined
              rates and periods, ensuring accuracy and eliminating the need for
              manual intervention.
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
            <h2 className="text-2xl font-bold ">
              Deposit/Withdrawal Management
            </h2>
            <p className="mt-4 text-base text-gray-500">
              Easily track and manage all deposits and withdrawals through the
              Asipiya Microfinance System. This feature maintains detailed
              transaction histories for each account, ensuring transparency and
              ease of access for both members and administrators.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        {/* information about micro finance section */}
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img2} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10 ">
            <h2 className="text-2xl font-bold ">Statement Generation</h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Microfinance System allows the generation of periodic
              account statements. These statements provide a comprehensive
              overview of account activities, including deposits, withdrawals,
              interest credits, and balances.
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
            <h2 className="text-2xl font-bold ">Automated Alerts</h2>
            <p className="mt-4 text-base text-gray-500">
              Enhance communication with members through the Asipiya
              Microfinance System's automated alerts. Account holders receive
              notifications for transactions, low balances, or interest credits,
              keeping them informed and engaged with their accounts.
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

export default Microfinance;
