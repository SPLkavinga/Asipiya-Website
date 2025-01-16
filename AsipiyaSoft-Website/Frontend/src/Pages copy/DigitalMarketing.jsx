import { Link } from "react-router-dom";
import Footer from "./../Components/Footer";
import NavBar from "./../Components/NabBar";
import Cooperate from "./../Components/Cooperate";
import backgroundImg from "../assets/digitalmarketing.jpeg";
import DMAgencyQuestions from "../Components/DMAgencyQuestions";
import DMclientCarousel from "../Components/DMclientCarousel";

import img2 from "../assets/DMseo.png";
import img3 from "../assets/DMads.png";
import img4 from "../assets/DMfacebook.png";
import img5 from "../assets/DMemail.png";
import img6 from "../assets/serve.png";
import img7 from "../assets/Group 201.png";
import img8 from "../assets/grow.png";

import BusinessForward from "./../Components/BusinessForward";
import { motion } from "framer-motion";
import AnimatedSection from "../Components/AnimatedSection";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import BackToTop from "./../Components/BackToTop";

const features = [
  {
    title: "Boosted Efficiency",
    description:
      "Automate and optimize your marketing efforts with real-time tracking and intelligent tools.",
    icon: "📈", // Replace with SVG or actual icon
  },
  {
    title: "Simple & Intuitive",
    description:
      "Enjoy a user-friendly experience that makes managing your digital marketing campaigns easy.",
    icon: "💻", // Replace with SVG or actual icon
  },
  {
    title: "Data-Driven Insights",
    description:
      "Leverage analytics to make smarter decisions and enhance your marketing performance.",
    icon: "📊", // Replace with SVG or actual icon
  },
  {
    title: "Seamless Integration",
    description:
      "Integrate Asipiya Digital Marketing with your existing platforms for a smooth workflow.",
    icon: "🔗", // Replace with SVG or actual icon
  },
  {
    title: "Real-Time Monitoring",
    description:
      "Track your marketing campaigns in real-time and make quick, informed decisions.",
    icon: "⏱", // Replace with SVG or actual icon
  },
  {
    title: "Customizable Strategies",
    description:
      "Tailor Asipiya Digital Marketing to your business needs with flexible solutions.",
    icon: "⚙", // Replace with SVG or actual icon
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 50 }, // Start off-screen (down)
  visible: { opacity: 1, y: 0 }, // Move to its final position (up)
};

const DigitalMarketing = () => {
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
      <BackToTop />
      {/* Full-screen background section */}
      <div
        className="relative flex flex-col items-center justify-center w-full  h-[650px] xl:h-screen  bg-center bg-cover xl:flex-row-reverse "
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="absolute inset-0 z-0 bg-black bg-opacity-70"></div>

        {/* Text content on the left side */}
        <div className="z-10 w-full py-8 text-center xl:w-1/2 md:text-center">
          <motion.h2
            className="text-[30px] xl:text-[47.78px] font-semibold text-white  text-center xl:text-center"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={textVariants}
          >
            Drive customers with smart <br /> Digital Strategies.
          </motion.h2>
          <motion.p
            className="mt-3 mb-8 text-[16px] xl:text-[19.2px] font-medium text-white  text-center xl:text-center"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={textVariants}
          >
            Take full control of your business growth with <br /> Asipiya
            Digital Marketing Solutions.
          </motion.p>

          {/* Button below the text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={textVariants}
            className="flex justify-center w-full xl:justify-center"
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
        className="h-full  py-[16px] bg-purple-50 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-[20px] mx-auto xl:mx-auto  max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-[30px] xl:text-[32px] font-semibold text-[#333333] sm:text-4xl mt-[16px]">
              Why Choose Asipiya Digital Marketing?
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

      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px] mt-16 mb-4">
          <div className="w-[300px] h-[300px] xl:w-1/3 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
            <img src={img8} alt="Placeholder" />
          </div>

          <div className="w-full p-4 text-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-[39.81px] font-bold ">
              Unlock Limitless Growth Potential with{" "}
              <span className="text-[#7D00C5] leading-relaxed  ">
                Our Service
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-500">
              At Aspiya Digital Marketing, we’re like the genie of digital
              growth – here to grant your business the wish of a steady stream
              of customers. Plug into our expert team, and watch as your
              customer base grows effortlessly. We start by crafting a custom
              growth plan, specifically tailored to identify the best digital
              advertising channels and sales tactics that will attract
              high-quality leads to your business. Every strategy is built
              around your unique needs, ensuring maximum impact. Once the plan
              is in place, our team of digital marketing specialists works
              tirelessly to chase the most profitable outcomes. From Google Ads
              to Facebook, SEO, and Email marketing, we use a multi-channel
              approach that keeps the leads rolling in. In a nutshell? You focus
              on making the sales, and Aspiya Digital Marketing will handle the
              rest, generating a consistent pipeline of high-quality leads to
              fuel your business growth.
            </p>
          </div>
        </div>
      </AnimatedSection>
      <DMclientCarousel />

      <p className="mt-10 text-[32px] font-semibold text-[#333333] text-center">
        How Can Asipiya Digital Marketing Help You?
      </p>
      <p className="mt-3 text-center text-[#666666]">
        Transform your business with our powerful digital marketing tools that
        enhance efficiency, reduce costs, and help you <br /> grow your brand.
        Leverage our cloud-based platform to effortlesslylaunch campaigns,
        optimize strategies <br /> , and drive more customers to your business.
        A proud Sri Lankan product!
      </p>

      {/* SEO section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[300px] xl:w-1/3 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img2} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10 ">
            <h2 className="text-2xl font-bold ">SEO</h2>
            <p className="mt-4 text-base text-gray-500">
              Our SEO podcast is heard in over 100 countries. Imagine the impact
              that the SEO agency behind it could have on your business. With
              Asipiya Digital Marketing Strategies, we take your brand global,
              ensuring your visibility reaches new heights. Partner with us to
              experience top Google rankings, thanks to our comprehensive
              Asipiya Digital Marketing Strategies that include onsite
              optimization, link building, technical SEO, and content creation.
              Whether you're looking to expand locally or globally, our
              all-in-one SEO service will help you achieve long-term success.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Google ads section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[300px] xl:w-1/3 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
            <img src={img3} alt="Placeholder" />
          </div>

          <div className="w-full p-4 text-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-2xl font-bold ">Google Ads</h2>
            <p className="mt-4 text-base text-gray-500">
              Looking for a reliable flow of leads you can count on? Paid
              advertising on Google, powered by Asipiya Digital Marketing
              Strategies, is the solution. Our team of experts crafts
              high-performing campaigns with creative strategies, optimized
              conversion tactics, and compelling copy—all delivered in-house.
              Let Asipiya Digital Marketing Strategies boost your visibility and
              ensure your business is always top of mind for your target
              audience.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Profit/Loss section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
          <div className="w-[300px] h-[300px] xl:w-1/3 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src={img4} alt="Placeholder" />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10 ">
            <h2 className="text-2xl font-bold ">Facebook Ads</h2>
            <p className="mt-4 text-base text-gray-500">
              The Facebook feed is a modern-day gold mine for your business.
              Don’t believe it? Over 2.8 billion people use Facebook every
              month. Combine that global reach with Asipiya Digital Marketing
              Strategies for creative ad management and targeted campaigns. Let
              us help you tap into this potential and watch your sales grow.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Balance Sheet section */}
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
          <div className="w-[300px] h-[300px] xl:w-1/3 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
            <img src={img5} alt="Placeholder" />
          </div>

          <div className="w-full p-4 text-left md:w-1/2 md:mr-28 md:text-left">
            <h2 className="text-2xl font-bold ">Email & Automation</h2>
            <p className="mt-4 text-base text-gray-500">
              Email should be your most profitable channel. With Asipiya Digital
              Marketing Strategies, we utilize lead nurturing, email automation,
              and retention tactics to guide prospects from "just heard of you"
              to "singing your praises." Let us help you build strong
              relationships with your audience and turn them into loyal
              customers with smart, automated email marketing campaigns.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div>
          <div className="mx-[20px] md:mx-[20px] lg:mx-[120px] flex flex-col items-center justify-center  xl:flex-row mt-[40px] md:mt-[40px]">
            {/* Image Section */}
            <div className="w-[250px] h-[150px] md:h-[350px] md:w-[590px] flex justify-center xl:justify-start ">
              <img
                className="object-contain"
                src={img6}
                alt="Countries We Serve"
              />
            </div>

            {/* Text Section */}
            <div className="w-full text-center md:w-full lg:w-1/2 lg:pl-16 xxl:p-48 xl:text-left">
              <h2 className="text-xl sm:text-2xl md:text-[39.81px] font-bold ">
                Our{" "}
                <span className="text-[#7D00C5] leading-relaxed  ">
                  Digital Marketing{" "}
                </span>{" "}
                Reach Across the Globe
              </h2>
              <p className="mt-4 text-[15px] md:text-[16px]  xl:mx-[0px] mx-[20px] text-[#525252] xxl:w-[600px]">
                Aspiya Soft Solutions is proud to offer advanced digital
                Marketing services in markets like Dubai, the United States,
                Canada, Singapore, Sri Lanka, and Australia. Our innovative
                approach helps businesses unlock their full potential, providing
                them with reliable technology solutions that foster growth and
                streamline operations.
              </p>
              <div className="flex justify-center xl:justify-start">
                <img
                  className="h-10 mt-6"
                  src={img7}
                  alt="Countries we serve"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <DMAgencyQuestions />
      <Cooperate />
      <Footer />
    </>
  );
};

export default DigitalMarketing;
