import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchBlogs } from "./contentful";
import { Link } from "react-router-dom";
import backgroundImg from "../../assets/background.png";
import NavBar from "../../Components/NabBar";
import Footer from "../../Components/Footer";
import logo from "../../assets/logo.png";
import BackToTop from './../../Components/BackToTop';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs().then((fetchedBlogs) => {
      setBlogs(fetchedBlogs);
      setFilteredBlogs(fetchedBlogs); // Set filtered blogs initially
    });
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [loading, setLoading] = useState(true);

  // Simulate a loading delay of 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second
    return () => clearTimeout(timer);
  }, []);

  // Handle search query input
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter blogs based on title or content writer
    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.contentwriter.toLowerCase().includes(query)
    );

    setFilteredBlogs(filtered);
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
    <div>
      <NavBar />
      <BackToTop/>

      {/* Full-screen background section */}
      <div
        className="relative flex flex-col items-center justify-center w-full h-[650px] md:h-screen bg-center bg-cover md:flex-row-reverse"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="absolute inset-0 z-0 bg-black bg-opacity-50"></div>
        <div className="z-10 w-full px-6 py-8 text-center md:w-2/3 md:px-20">
          <motion.h2
            className="text-4xl font-bold text-white md:text-5xl"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={textVariants}
          >
            Exploring the Spectrum
          </motion.h2>
          <motion.h2
            className="text-4xl font-bold text-white md:text-5xl"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={textVariants}
          >
            of Knowledge
          </motion.h2>
          <motion.p
            className="mt-4 text-sm text-white md:text-lg"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={textVariants}
          >
            Engage with the extraordinary as we delve into a world where
            imagination knows no limits.
          </motion.p>
        </div>
      </div>

      {/* Centered Search Bar */}
      <div className="flex justify-center mt-8">
        <input
          type="text"
          placeholder="Search blogs by title or author..."
          className="px-4 py-4 border border-gray-300 rounded-md w-[300px] md:w-[400px] focus:outline-none focus:ring-purple-500 focus:border-purple-500 "
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="mx-[20px] xl:mx-[120px] xxl:mx-[250px] mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-8 w-full xl:w-[1000px] h-full">
          {filteredBlogs.map((blog) => (
            <Link
              to={`/blog/${blog.slug}`}
              key={blog.id}
              className="flex flex-col h-full transition border rounded-lg hover:shadow-lg"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover w-full h-48 mb-4 rounded-md"
              />
              <h2 className="flex-grow p-4 text-xl font-semibold">
                {blog.title}
              </h2>
              <div className="flex items-center p-4 mt-auto mb-4">
                <img
                  src={blog.profileimage}
                  className="w-[30px] h-[30px] object-cover rounded-full"
                  alt="Author"
                />
                <div className="ml-4">
                  <h2 className="text-[14px] font-medium">
                    {blog.contentwriter}
                  </h2>
                  <h2 className="text-[13px] text-gray-500">{blog.date}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogList;
