import { motion } from "framer-motion";
import TestimonialsCarousel from "../components/about/testimonialsCarousel";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="p-4 sm:p-6 bg-white sm:pt-24  relative">
      <div className="container  min-h-screen  bg-white w-screen">
        {/* Introduction de l'Entreprise */}
        <div className="mb-12 flex flex-col lg:flex-row text-center lg:text-left">
          <div className="lg:w-1/2 relative mb-6 lg:px-6 lg:mb-0">
            <img src="./src/assets/images/livaison.svg" alt="" className="w-full max-w-xs  lg:max-w-full mx-auto"/>
          </div>
          <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              variants={sectionVariants}
          className="text-gray-700 flex-1">
            <p className="text-blue-600 text-2xl text-justify px-6 sm:text-4xl lg:text-5xl font-bold mb-4">
              Depuis notre création en 2015, nous nous engageons à offrir des services de livraison rapides et fiables.
            </p>
            <p className="text-gray-900 text-sm text-justify px-6  sm:text-lg font-bold">
              Notre mission est de simplifier la logistique pour nos clients, tout en assurant une qualité de service optimale. Nous mettons un point d'honneur à respecter des valeurs telles que la ponctualité, l'efficacité et la transparence dans toutes nos opérations.
            </p>
          </motion.div>
        </div>

        {/* Témoignages */}
        <div className="mb-12">
          <TestimonialsCarousel />
        </div>        
      </div>

      <div className="absolute top-32 left-[50%] transform -translate-x-1/2 w-[10%] lg:w-[600px] h-[600px] opacity-70 mix-blend-multiply filter blur-2xl bg-blue-300 rounded-full ">
        
      </div>
    </section>
  );
};

export default About;
