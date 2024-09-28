import { motion } from 'framer-motion';
import React from 'react';

interface CTAButtonProps {
  text: string;
  onClick: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick }) => {
  return (
    <motion.button
    whileHover={{
      scale: 1.1,
      rotate: 3,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    }}
    whileTap={{ scale: 0.95, rotate: -3 }}
      onClick={onClick}
      className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
    >
      {text}
    </motion.button>
  );
};

export default CTAButton;
