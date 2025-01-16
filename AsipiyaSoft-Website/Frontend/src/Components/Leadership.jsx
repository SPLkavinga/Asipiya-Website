import member12 from '../assets/member1.jpg'
import member22 from '../assets/member2.jpg'
import member32 from '../assets/member3.jpg'
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion"; 


const Leadership = ({ member1, member2, member3 }) => {
  return (
    <motion.div className="w-full py-8 mt-[60px] xl:mt-[120px] "
    initial={{ opacity: 0 }} // Start with opacity 0
        whileInView={{ opacity: 1 }} // Animate to opacity 1 when in view
        viewport={{ once: true }} // Ensure animation triggers only once
        transition={{ duration: 1 }} // Smooth transition
        >
      <p className="text-[39.81px] font-semibold text-center text-gray-800">
        Meet Our <span className="font-bold text-[#7D00C5]">Leadership</span>
      </p>
      <p className="text-[17px] font-normal text-center text-[#525252] mt-[8px] w-full ">
      Our customers, our societies and our business are linked. It's different  for us. It improves us.
      </p>

      <div className="flex flex-wrap justify-center gap-[16px] mt-8 md:mt-[32px] ">
        {/* Member 1 */}
        <div className="relative group ">
          <img
            className="w-[300px] h-[300px] xl:w-[387px] xl:h-[360px] rounded-lg object-cover"
            src={member12}
            alt="Member 1"
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 text-white transition-opacity duration-300 rounded-b-lg opacity-0 bg-black/50 backdrop-blur-sm group-hover:opacity-100">
            {/* Name and Job Title */}
            <div>
              <p className="text-lg font-bold">John Doe</p>
              <p className="text-sm">Software Engineer</p>
            </div>
            {/* Social Media Links */}
            <div className="flex gap-3 text-white">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Member 2 */}
        <div className="relative group">
          <img
            className="w-[300px] h-[300px] xl:w-[387px] xl:h-[360px] rounded-lg object-cover"
            src={member22}
            alt="Member 2"
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 text-white transition-opacity duration-300 rounded-b-lg opacity-0 bg-black/50 backdrop-blur-sm group-hover:opacity-100">
            <div>
              <p className="text-lg font-bold">Jane Smith</p>
              <p className="text-sm">Product Manager</p>
            </div>
            <div className="flex gap-3 text-white">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Member 3 */}
        <div className="relative group">
          <img
            className="w-[300px] h-[300px] xl:w-[387px] xl:h-[360px] rounded-lg object-cover"
            src={member32}
            alt="Member 3"
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 text-white transition-opacity duration-300 rounded-b-lg opacity-0 bg-black/50 backdrop-blur-sm group-hover:opacity-100">
            <div>
              <p className="text-lg font-bold">Alice Johnson</p>
              <p className="text-sm">UX Designer</p>
            </div>
            <div className="flex gap-3 text-white">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Leadership;
