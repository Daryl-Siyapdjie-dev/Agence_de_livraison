
import { motion } from "framer-motion";

const ImageCarousel = () => {


  return (
      
      <div>
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.5 },
            ease: "easeIn",
            duration: 1
          }}
          src="./src/assets/images/Delivery1.gif"
          alt="Image 2"
          className="rounded-xl w-full h-auto"
        />
      </div>
      
  );
};

export default ImageCarousel;
