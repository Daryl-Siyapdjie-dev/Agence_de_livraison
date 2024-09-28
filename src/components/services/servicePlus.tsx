import { motion } from 'framer-motion';
import { useState } from 'react';
import { ServicePlus } from '../../type';

interface ServicePlusProps {
  servicePlus: ServicePlus;
}

const ServicePlusCard: React.FC<ServicePlusProps> = ({ servicePlus }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-blue-500 mx-2 sm:mx-4 lg:w-96 py-4">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        <div className="flex items-center space-x-3">
          <motion.div
            className="text-xl sm:text-xl text-blue-600"
            whileHover={{ rotate: 90, transition: { duration: 0.3 } }}
          >
            {servicePlus.icon}
          </motion.div>
          <h3 className="text-base sm:text-lg font-semibold">{servicePlus.title}</h3>
        </div>
        <motion.span
          className="text-xl sm:text-lg text-blue-600"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {isOpen ? '-' : '+'}
        </motion.span>
      </motion.button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <p className="mt-2 text-sm sm:text-sm text-gray-600">{servicePlus.description}</p>
        {isOpen && <p className="mt-2 text-xs sm:text-xs text-gray-500">{servicePlus.details}</p>}
      </motion.div>
    </div>
  );
};

export default ServicePlusCard;
