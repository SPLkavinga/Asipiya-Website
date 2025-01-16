import React from "react";
import { Link } from "react-router-dom";
import Footer from "./../Components/Footer";
import NavBar from "./../Components/NabBar";
import Cooperate from "./../Components/Cooperate";
import BackToTop from "../Components/BackToTop";
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

const features = [
  {
    title: "Comprehensive Integration",
    description:
      "Unifies all business operations into one system, streamlining processes across departments",
    icon: "🏢", // Replace with SVG or actual icon
  },
  {
    title: "Customizable Features",
    description:
      "Tailor workflows, reports, and modules to fit your specific business needs",
    icon: "📱", // Replace with SVG or actual icon
  },
  {
    title: "Real-Time Data Access",
    description:
      "Access accurate, up-to-date information for informed decision-making.",
    icon: "📊", // Replace with SVG or actual icon
  },
  {
    title: "Enhanced Productivity",
    description:
      " Boost efficiency with tools for task management, time tracking, and automation.",
    icon: "📋", // Replace with SVG or actual icon
  },
  {
    title: "Scalability",
    description:
      "Easily scale with your business as it grows, adapting to increased demands",
    icon: "👥", // Replace with SVG or actual icon
  },
  {
    title: "Seamless Collaboration",
    description:
      "Improve team coordination with integrated communication and project management tools.",
    icon: "💼", // Replace with SVG or actual icon
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 50 }, // Start off-screen (down)
  visible: { opacity: 1, y: 0 }, // Move to its final position (up)
};

const ERP = () => {
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
            <img src={logo} alt="Loading..." className="w-[200px] h-auto animate-bounce" />
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
           src={img1} alt="Placeholder" />
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
            Discover <br/> smarter Business Management with the Asipiya ERP System{" "}
          </motion.h2>
          <motion.p className="mt-3 mb-8 text-[16px] xl:text-[19.2px] font-medium text-black text-opacity-70 text-center xl:text-start"
           initial="hidden"
           animate="visible"
           transition={{ duration: 0.5, delay: 0.3 }}
           variants={textVariants}
           >
            Get Total Control of Your Business Operations with Asipiya ERP
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

      {/* Why Choose Erp  section */}
      <motion.div className="h-full  py-[16px] bg-purple-50 mt-32"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
       >

        <div className="px-[20px] mx-auto xl:mx-auto  max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-[30px] xl:text-[32px] font-semibold text-[#333333] sm:text-4xl mt-[16px]">
              Why Choose Asipiya ERP System ?
            </h2>
          </div>

          <motion.div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 "
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
          <div className="mt-[32px]  text-center">
            <button className="w-[183px] h-[48px] px-6  text-[16px] font-semibold text-white transition rounded-full bg-[#7D00C5]  hover:bg-[#5C0091]">
              Explore
            </button>
          </div>
        </div>
      </motion.div>

      <p className="mt-10 text-[32px] font-semibold text-[#333333] text-center">
        How Can Asipiya ERP System Help You?
      </p>
      <p className="mt-3 text-center text-[#666666] ">
        Enhance efficiency, reduce costs, and streamline your operations
        effortlessly with our cloud-based solution. A proud Sri Lankan product,
        Asipiya ERP <br /> empowers you to manage every aspect of your business
        with ease.
      </p>
      

      {/* information about micro finance section */}
      <AnimatedSection>
      <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
        <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
          <img src={img2} alt="Placeholder" />
        </div>

        <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10 ">
          <h2 className="text-2xl font-bold ">Sales Management</h2>
          <p className="mt-4 text-base text-gray-500">
            Optimizes sales processes, from generating quotations and invoices
            to integrating seamlessly with emails and other communication
            platforms. The Asipiya ERP streamlines the order management process,
            helping to close sales efficiently and enhance overall performance.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">
            CRM (Customer Relationship Management)
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Centralizes all customer interactions, offering detailed customer
            insights and accurate sales forecasts. This feature enables
            real-time reporting, helping businesses stay informed and improve
            customer relationships.
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
          <h2 className="text-2xl font-bold ">POS (Point of Sale)</h2>
          <p className="mt-4 text-base text-gray-500">
            A smart, user-friendly interface for managing sales transactions.
            The Asipiya ERP POS system syncs with inventory and tracks stock
            levels in real-time, making it ideal for businesses requiring
            seamless inventory control and sales processing.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">Subscription Management</h2>
          <p className="mt-4 text-base text-gray-500">
            Automatically generates invoices for recurring sales and
            subscription models, offering built-in analytics to monitor sales
            performance over time and optimize revenue streams.
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
          <h2 className="text-2xl font-bold ">Rental Management</h2>
          <p className="mt-4 text-base text-gray-500">
            TSimplifies the rental process, from scheduling to invoicing,
            ensuring smooth management of rented assets and compatibility with
            other product management apps to enhance operational efficiency.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">Accounting & Finance</h2>
          <p className="mt-4 text-base text-gray-500">
            book keeping system integrated with inventory and sales management to
            ensure efficient finance management. The system offers automated
            bank synchronization, reconciliation, and flexible fiscal reporting
            for comprehensive financial insights..
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
          <h2 className="text-2xl font-bold ">Document Management</h2>
          <p className="mt-4 text-base text-gray-500">
            Efficiently manages documents such as bills, contracts, and
            invoices, promoting a paperless office by scanning and organizing
            important records digitally.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">Invoicing</h2>
          <p className="mt-4 text-base text-gray-500">
            Streamlines billing by automatically generating and sending invoices
            for both sales and services, along with customizable reporting for
            easier financial tracking.
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
          <h2 className="text-2xl font-bold ">Expense Tracking</h2>
          <p className="mt-4 text-base text-gray-500">
            Keeps track of the business’s expenses, providing a detailed
            overview to ensure that budgets are adhered to. This tool helps
            businesses control their spending and optimize cash flow
          </p>
          <br />

          <h2 className="text-2xl font-bold ">E-Signature</h2>
          <p className="mt-4 text-base text-gray-500">
            Enables digital signing of documents and contracts, improving
            efficiency and reducing paperwork, while maintaining compliance with
            industry standards for digital signatures.
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
          <h2 className="text-2xl font-bold ">Inventory Management</h2>
          <p className="mt-4 text-base text-gray-500">
            Streamline your operations with smart inventory management that
            integrates sales, purchases, and accounting. Asipiya ERP ensures
            real-time reporting, advanced automation, and accurate tracking to
            optimize your inventory levels and improve operational efficiency.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">Manufacturing</h2>
          <p className="mt-4 text-base text-gray-500">
            Elevate your production operations with full traceability and work
            order management. The Asipiya ERP Manufacturing module helps with
            production planning, optimizing workflows, and increasing efficiency
            while reducing errors and downtime.
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
          <h2 className="text-2xl font-bold ">Purchase Management</h2>
          <p className="mt-4 text-base text-gray-500">
            Automate and streamline your purchasing workflow. With Asipiya ERP,
            track all agreements, quotations, and purchase orders, ensuring the
            best offers and timely procurement.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">Maintenance Management</h2>
          <p className="mt-4 text-base text-gray-500">
            Schedule, track, and manage maintenance activities with automated
            triggers. Asipiya ERP provides critical performance data such as
            MTBF (Mean Time Between Failures) and MTTR (Mean Time to Repair),
            helping improve machine uptime and reduce costs.
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
          <h2 className="text-2xl font-bold ">Quality Control</h2>
          <p className="mt-4 text-base text-gray-500">
            Define and manage quality control points within the ERP system. With
            real-time alerts on any quality issues, Asipiya ERP ensures
            consistent product standards and minimizes defects during
            production.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">
            PLM (Product Lifecycle Management)
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Efficiently manage engineering changes and version control. Asipiya
            ERP provides real-time updates and communication across teams,
            enhancing collaboration and ensuring that the latest product
            versions are always in use..
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
          <h2 className="text-2xl font-bold ">Live Chat</h2>
          <p className="mt-4 text-base text-gray-500">
            Enhance customer engagement by providing real-time support through
            live chat. Asipiya ERP integrates live chat functionality, helping
            you respond promptly to customer inquiries, providing instant
            support, and improving overall satisfaction.
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
          <h2 className="text-2xl font-bold ">Social Marketing</h2>
          <p className="mt-4 text-base text-gray-500">
            Asipiya ERP allows you to manage and monitor all your social media
            accounts, web push notifications, and live chat, all in one
            centralized platform. Streamline your marketing efforts and boost
            your brand presence through seamless, integrated campaigns across
            multiple channels.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">Email Marketing</h2>
          <p className="mt-4 text-base text-gray-500">
            Create and send personalized email campaigns with Asipiya ERP’s
            easy-to-use templates. Track real-time engagement, analyze ROI, and
            fine-tune campaigns to improve their effectiveness.
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
          <h2 className="text-2xl font-bold ">SMS Marketing</h2>
          <p className="mt-4 text-base text-gray-500">
            Instantly reach your customers with SMS campaigns. Asipiya ERP
            ensures direct, efficient communication by delivering your marketing
            messages straight to your contacts’ mobile phones.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">Event Management</h2>
          <p className="mt-4 text-base text-gray-500">
            Organize and promote events effortlessly with Asipiya ERP. From
            ticket sales to event logistics and marketing, this feature offers
            an all-in-one solution to create, manage, and track events, ensuring
            a smooth experience for both organizers and attendees.
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
          <h2 className="text-2xl font-bold "> Marketing Automation</h2>
          <p className="mt-4 text-base text-gray-500">
            Asipiya ERP empowers your business by automating multi-channel
            marketing campaigns. Drive sales and customer engagement with
            automated, data-driven campaigns that guide leads through their
            buyer journey, from first contact to conversion.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">Survey</h2>
          <p className="mt-4 text-base text-gray-500">
            Collect valuable feedback with automated surveys. Asipiya ERP
            enables you to conduct employee reviews, customer satisfaction
            surveys, and gather insights for data-driven business decisio
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
          <h2 className="text-2xl font-bold ">Recruitment</h2>
          <p className="mt-4 text-base text-gray-500">
            Simplify your hiring process with Asipiya ERP’s recruitment module.
            Post job openings, track applicants, and streamline the candidate
            management process, all from one easy-to-use platform.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">Time Off Management</h2>
          <p className="mt-4 text-base text-gray-500">
            Manage employee leave efficiently with Asipiya ERP. Keep track of
            absences and time-off requests in real-time, and generate detailed
            reports on employee attendance and leave statistics with just a few
            clicks.
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
          <h2 className="text-2xl font-bold ">Appraisal</h2>
          <p className="mt-4 text-base text-gray-500">
            Optimize your employee evaluation process with Asipiya ERP’s
            appraisal feature. Set up timelines, automate reminders, and track
            progress, helping you deliver consistent performance reviews and
            improve employee development.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">Referral</h2>
          <p className="mt-4 text-base text-gray-500">
            Encourage employee referrals with Asipiya ERP’s gamified referral
            system. Reward staff for recommending new talent, helping you build
            stronger teams while reducing recruitment costs
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
          <h2 className="text-2xl font-bold ">Fleet Management</h2>
          <p className="mt-4 text-base text-gray-500">
            Centralize the management of your vehicles, contracts, and
            assignments with Asipiya ERP’s fleet management feature. It
            automatically integrates with your sales and finance systems,
            providing real-time insights and data for better decision-making.
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
          <h2 className="text-2xl font-bold ">Project</h2>
          <p className="mt-4 text-base text-gray-500">
            Asipiya ERP helps organize, schedule, and plan both internal and
            external projects. With detailed analytics and planning tools, this
            feature improves collaboration and enhances employee productivity.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">Timesheet</h2>
          <p className="mt-4 text-base text-gray-500">
            Track the productivity of your employees with integrated timesheets.
            Asipiya ERP allows you to monitor employee availability and predict
            project timelines by analyzing hours worked and tasks completed.
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
          <h2 className="text-2xl font-bold ">Field Service</h2>
          <p className="mt-4 text-base text-gray-500">
            Work from anywhere with Asipiya ERP’s Field Service feature. It
            enables employees to deliver excellent service to customers while on
            the go, allowing seamless access to job details from any device.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">Helpdesk</h2>
          <p className="mt-4 text-base text-gray-500">
            Get a real-time overview of client tickets and ensure customer
            service is timely and efficient. Asipiya ERP integrates with custom
            SLA rules, optimizing the helpdesk’s responsiveness and
            productivity.
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
          <h2 className="text-2xl font-bold ">Planning</h2>
          <p className="mt-4 text-base text-gray-500">
            Plan and schedule tasks and shifts with Asipiya ERP’s Planning
            module. It provides your team with a calendar view and simplifies
            task allocation, improving overall coordination and efficiency.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">Appointments</h2>
          <p className="mt-4 text-base text-gray-500">
            Manage meetings and automate your scheduling process with Asipiya
            ERP’s appointment feature. Customized appointment forms make it
            easier for customers and clients to book meetings with your team.
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
          <h2 className="text-2xl font-bold ">Discuss</h2>
          <p className="mt-4 text-base text-gray-500">
            Facilitate communication within your team using Asipiya ERP’s
            integrated discussion tools. Stay connected with your team across
            all modules and collaborate effortlessly within the system.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">Approvals</h2>
          <p className="mt-4 text-base text-gray-500">
            Streamline the approval process with Asipiya ERP’s centralized
            dashboard. Manage employee requests and approvals efficiently,
            providing customized rights and boosting overall productivity.
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
          <h2 className="text-2xl font-bold ">IoT</h2>
          <p className="mt-4 text-base text-gray-500">
            Connect external devices to Asipiya ERP through its IoT integration.
            With real-time data streaming, you can monitor your equipment and
            systems directly from the ERP interface, improving automation and
            control.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">VoIP</h2>
          <p className="mt-4 text-base text-gray-500">
            Enable efficient communication through VoIP integration. Asipiya ERP
            allows your team to make calls directly from the system, providing
            seamless connectivity for customer support and internal
            collaboration.
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
          <h2 className="text-2xl font-bold ">Knowledge</h2>
          <p className="mt-4 text-base text-gray-500">
            FAsipiya ERP contributes to knowledge sharing by integrating a
            collaborative library. Access documents, best practices, and other
            resources, enhancing team collaboration across all departments.
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
          <h2 className="text-2xl font-bold ">Customization</h2>
          <p className="mt-4 text-base text-gray-500">
            Personalize your Asipiya ERP database to meet the specific needs of
            your business. Customize the interface, workflows, and system
            settings for maximum efficiency and control.
          </p>
          <br />

          <h2 className="text-2xl font-bold ">Studio</h2>
          <p className="mt-4 text-base text-gray-500">
            Asipiya ERP’s Studio feature enables you to tailor your system
            without any coding. You can create apps, customize reports, automate
            workflows, and configure the system to fit your exact business
            requirements.
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

export default ERP;
