
import { motion } from "framer-motion";

// Import your images
import logo1 from "../assets/AppLogo/image.png";
import logo2 from "../assets/AppLogo/image-1.png";
import logo3 from "../assets/AppLogo/image-2.png";
import logo4 from "../assets/AppLogo/image-3.png";
import logo5 from "../assets/AppLogo/image-4.png";
import logo6 from "../assets/AppLogo/image-5.png";
import logo7 from "../assets/AppLogo/image-6.png";
import logo8 from "../assets/AppLogo/image-7.png";
import logo9 from "../assets/AppLogo/image-8.png";
import logo10 from "../assets/AppLogo/image-9.png";
import logo11 from "../assets/AppLogo/image-10.png";
import logo12 from "../assets/AppLogo/image-11.png";

// Array of logos
const logos = [logo1, logo2, logo3, logo4, logo5, logo6 , logo7, logo8, logo9, logo10, logo11, logo12];

function LogoRow() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#CFB1D4] via-[#FAEBFF] to-[#CFB1D4] py-4 mt-8 xl:mt-14">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }} 
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
        style={{ willChange: "transform" }}
      >
        {/* Duplicate logos 3 times to avoid gaps */}
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex items-center justify-center px-4 shrink-0">
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="h-10 md:h-14 xl:h-14 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default LogoRow;
