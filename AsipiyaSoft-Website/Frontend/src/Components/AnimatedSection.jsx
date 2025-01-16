import { motion } from "framer-motion";

const AnimatedSection = ({ children }) => {
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
