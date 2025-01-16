import React from "react";
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

const textVariants = {
  hidden: { opacity: 0, y: 50 }, // Start off-screen (down)
  visible: { opacity: 1, y: 0 }, // Move to its final position (up)
};

const features = [
  {
    title: "Streamlined Invoicing Process",
    description:
      "Experience a seamless, efficient invoicing journey from creation to payment.",
    icon: "🧾", // Replace with SVG or actual icon
  },
  {
    title: "Real-Time Tracking",
    description:
      "Monitor and manage invoices, payments, and client transactions in real time.",
    icon: "⏱️", // Replace with SVG or actual icon
  },
  {
    title: "Intuitive User Interface",
    description:
      "Designed for easy use by businesses and customers, ensuring a smooth onboarding process.",
    icon: "📊", // Replace with SVG or actual icon
  },
  {
    title: "Secure and Dependable",
    description:
      "Equipped with robust security features to safeguard sensitive invoicing data.",
    icon: "🔒", // Replace with SVG or actual icon
  },
  {
    title: "Customizable Workflows",
    description:
      "Adapt the system to suit your business's specific invoicing requirements.",
    icon: "⚙️", // Replace with SVG or actual icon
  },
  {
    title: "Data Analytics and Reporting",
    description:
      "Access valuable insights and detailed reports to optimize your invoicing process.",
    icon: "📈", // Replace with SVG or actual icon
  },
];

const InvoiceSystem = () => {
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
            Discover <br /> smarter invoicing with the Asipiya Invoice System.
          </motion.h2>
          <motion.p
            className="mt-3 mb-8 text-[16px] xl:text-[19.2px] font-medium text-black text-opacity-70 text-center xl:text-start"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={textVariants}
          >
            Gain complete control over your invoicing operations with the
            Asipiya Invoice System.
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
              Why Choose the Asipiya Invoice System?
            </h2>
          </div>
          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col p-6 text-left bg-purple-50"
              >
                <div className="mb-4 text-5xl text-black">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-left text-gray-800">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <button className="w-[183px] h-[48px] px-6  text-[16px] font-semibold text-white transition bg-[#7D00C5]  hover:bg-[#5C0091] rounded-full">
              Explore
            </button>
          </div>
        </div>
      </motion.div>

      <p className="mt-10 text-[32px] font-semibold text-[#333333] text-center">
        How Can Asipiya Invoice System Help You?
      </p>
      <p className="mt-3 text-center text-[#666666] ">
        Revolutionize your business operations with the Asipiya Invoice System,
        enhancing accuracy, streamlining payments, and empowering you to manage
        invoices effortlessly with <br /> our cloud-based solution. A proud Sri
        Lankan product!
      </p>

      {/* Information about invoice management section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img2} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
            <h2 className="text-2xl font-bold ">Invoice Management</h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Invoice System simplifies invoicing with tools to
              create, customize, and track invoices effortlessly. It supports
              multiple formats and templates to meet diverse business needs.
              Users can monitor invoice status, send automated reminders, and
              ensure timely payments. Real-time updates keep you informed of all
              transactions, enabling better cash flow management.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Monthly cash flow tracking section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
            <img src={img3} alt="Placeholder" />
          </div>

          <div className="w-full p-4 text-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-2xl font-bold ">Payment Tracking</h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Invoice System provides real-time payment tracking,
              enabling businesses to monitor incoming payments and outstanding
              invoices effortlessly. With automated reminders for overdue
              payments, the system helps businesses maintain a consistent cash
              flow and minimize delays in collections.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Profit/Loss tracking section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img4} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
            <h2 className="text-2xl font-bold ">Financial Insights</h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Invoice System provides detailed financial analytics,
              offering insights into profit/loss trends, payment histories, and
              customer behavior. These insights empower businesses to make
              data-driven decisions, optimize operations, and improve overall
              financial performance.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Financial Reports & Analytics section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
            <img src={img4} alt="Placeholder" />
          </div>

          <div className="w-full p-4 text-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-2xl font-bold ">
              Financial Reports & Analytics
            </h2>
            <p className="mt-4 text-base text-gray-500">
              The Asipiya Invoice System offers detailed financial insights with
              monthly, quarterly, and annual reports on revenue, expenses, and
              customer payment trends. These analytics help businesses make
              informed decisions, track outstanding payments, and identify
              opportunities for growth. The system also includes tools to
              forecast future revenue and analyze payment history trends for
              better financial planning.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Cash Flow Management section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img4} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
            <h2 className="text-2xl font-bold ">Cash Flow Management</h2>
            <p className="mt-4 text-base text-gray-500">
              The Cash Flow Management feature in the Asipiya Invoice System
              helps businesses track inflows and outflows, providing a clear
              overview of their financial health. It enables users to identify
              trends in cash movements, optimize collections, and plan for
              future expenditures. This tool is essential for maintaining
              liquidity and ensuring smooth business operations.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Profit & Loss Analysis section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
            <img src={img5} alt="Placeholder" />
          </div>

          <div className="w-full p-4 text-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-2xl font-bold ">Profit & Loss Analysis</h2>
            <p className="mt-4 text-base text-gray-500">
              The Profit & Loss Analysis feature calculates the net income or
              loss by comparing revenues with expenses over a specific period.
              This helps businesses evaluate their financial performance,
              identify cost-saving opportunities, and create strategies to
              maximize profits and ensure sustainability.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Balance Sheet Overview section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img4} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
            <h2 className="text-2xl font-bold ">Balance Sheet Overview</h2>
            <p className="mt-4 text-base text-gray-500">
              The Balance Sheet Overview in the Asipiya Invoice System provides
              a comprehensive view of assets, liabilities, and equity at a
              glance. This feature helps businesses evaluate their financial
              stability and make data-driven decisions to improve overall
              performance and manage resources efficiently.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Trial Balance section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
            <img src={img6} alt="Placeholder" />
          </div>

          <div className="w-full p-4 text-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-2xl font-bold ">Trial Balance</h2>
            <p className="mt-4 text-base text-gray-500">
              The Trial Balance feature provides a summary of all accounts with
              their respective debit and credit balances, ensuring accuracy in
              financial reporting. It helps identify discrepancies in records,
              enabling quick corrections and maintaining the integrity of the
              accounting system.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Invoice Automation section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img6} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
            <h2 className="text-2xl font-bold ">Invoice Automation</h2>
            <p className="mt-4 text-base text-gray-500">
              The Invoice Automation feature streamlines the process of
              generating and sending invoices. It automatically calculates
              totals, taxes, and discounts, reducing manual work and errors.
              With scheduled invoice generation, recurring billing is handled
              seamlessly, ensuring timely payments and better cash flow
              management.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Payment Tracking section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
            <img src={img6} alt="Placeholder" />
          </div>

          <div className="w-full p-4 text-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-2xl font-bold ">Payment Tracking</h2>
            <p className="mt-4 text-base text-gray-500">
              The Payment Tracking feature provides real-time updates on
              customer payments, outstanding invoices, and due dates. It
              includes notifications for late payments and automatic reminders,
              ensuring smooth cash collection and improving customer
              relationships through transparent communication.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Tax Management section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img6} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
            <h2 className="text-2xl font-bold ">Tax Management</h2>
            <p className="mt-4 text-base text-gray-500">
              The Tax Management feature automates tax calculations based on
              applicable rates and regions. It ensures compliance with tax laws,
              generates tax reports, and simplifies filing processes. Businesses
              can track VAT, GST, and other taxes efficiently, reducing manual
              errors and audit risks.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Multi-Currency Support section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
            <img src={img6} alt="Placeholder" />
          </div>

          <div className="w-full p-4 text-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-2xl font-bold ">Multi-Currency Support</h2>
            <p className="mt-4 text-base text-gray-500">
              The Multi-Currency Support feature allows businesses to handle
              transactions in different currencies. It automatically converts
              amounts based on real-time exchange rates, ensuring accuracy and
              convenience for international transactions and reporting.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Customer Insights section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img6} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
            <h2 className="text-2xl font-bold ">Customer Insights</h2>
            <p className="mt-4 text-base text-gray-500">
              The Customer Insights feature analyzes customer payment behavior
              and trends, identifying frequent late payers or high-value
              clients. These insights help businesses tailor strategies, such as
              offering discounts or implementing stricter payment terms, to
              enhance customer relationships and optimize cash flow.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Data Export & Integration section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
            <img src={img6} alt="Placeholder" />
          </div>

          <div className="w-full p-4 text-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-2xl font-bold ">Data Export & Integration</h2>
            <p className="mt-4 text-base text-gray-500">
              The Data Export & Integration feature allows seamless data
              transfer to other systems like CRM, ERP, or tax platforms. With
              customizable export formats and API integration options,
              businesses can streamline workflows, reduce duplication, and
              maintain data consistency across platforms.
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

export default InvoiceSystem;
