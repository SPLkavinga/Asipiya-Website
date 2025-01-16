import { useEffect, useState } from "react";
import { fetchBlogs } from "./contentful";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import NavBar from "../../Components/NabBar";
import Footer from "../../Components/Footer";
import logo from "../../assets/logo.png";


const BlogPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlogs().then((blogs) =>
      setBlog(blogs.find((b) => b.slug === slug))
    );
  }, [slug]);

  

   const [loading, setLoading] = useState(true);
    
      // Simulate a loading delay of 3 seconds
      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000); // 3 seconds
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
    <NavBar/>
    <div className=" mx-[20px] xl:mx-[120px] ">
      <h1 className="text-[30px] xl:text-[60px] font-bold mb-[4px]">{blog.title}</h1>
      <div className="flex items-center mb-4 ">
        <img
          src={blog.profileimage}
          className="w-[30px] h-[30px] object-cover rounded-full"
        />
        <div className="ml-4">
          <h2 className="text-[14px] font-medium">
            {blog.contentwriter}
          </h2>
          <h2 className="text-[13px] text-gray-500">{blog.date}</h2>
        </div>
      </div>
      <img
        src={blog.image}
        alt={blog.title}
        className="object-cover w-full h-full mb-6 rounded-md"
      />
      <div className="space-y-6 prose"> 
        {documentToReactComponents(blog.content)}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BlogPage;
