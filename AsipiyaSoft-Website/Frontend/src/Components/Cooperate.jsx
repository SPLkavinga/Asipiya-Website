import { Link } from "react-router-dom";
import img5 from "../assets/choose2.png";
import { motion } from "framer-motion";

function Cooperate() {
  return (
    <>
      {/* Cooperate section */}
      <motion.div
        className="flex flex-col items-center justify-center mt-[120px]"
        initial={{ opacity: 0 }} // Start with opacity 0
        whileInView={{ opacity: 1 }} // Animate to opacity 1 when in view
        viewport={{ once: true }} // Ensure animation triggers only once
        transition={{ duration: 1 }} // Smooth transition
      >
        <p className="text-[39.81px] font-bold text-center text-black">
          LET'S DEVELOP,{" "}
          <span className="font-bold text-[#7D00C5]">LETS COOPERATE!</span>
        </p>
        <img className="mt-16 mb-5 w-[250px] h-[150px] md:h-[250px] md:w-[450px]" src={img5} alt="Centered_Image" />
        <Link
          to="/contact"
          className="w-[200px] h-[50px] md:w-[483px] md:h-[72px] font-bold text-[#333333] text-center transition bg-white hover:bg-[#7D00C5] hover:text-white   border-2  border-[#333333] rounded-full text-[30px] md:text-[39.81px] pt-1"
        >
          Let's Talk
        </Link>
      </motion.div>

    </>
  );
}

export default Cooperate;
