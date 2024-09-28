import { motion } from 'framer-motion';
import { Service } from '../../type';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      className="bg-white flex justify-center items-center w-64 sm:w-64 lg:w-64 m-4 p-6 shadow-xl rounded-lg"
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
      }}
    >
      <div className="text-center">
        <motion.div
          className={`text-4xl mb-4 inline-block p-3 rounded-full ${service.bgColor} ${service.textColor}`}
          whileHover={{
            rotate: 360,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          {service.icon}
        </motion.div>
        <h3 className="text-lg font-semibold font-display mb-2">{service.title}</h3>
        <div className="text-center text-gray-600 text-sm">
          {service.description}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
