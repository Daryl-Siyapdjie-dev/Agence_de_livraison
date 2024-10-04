import React from 'react';
import { services, servicesData } from '../data/servicesData';
import ServiceCard from '../components/services/ServiceCard';
import CTAButton from '../components/services/CTAButton';
import ServicePlusCard from '../components/services/servicePlus';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServicesSection: React.FC = () => {
  const handleCTAClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section id="services" className="sm:pt-24 px-4 bg-white sm:px-8 relative">
      {/* Background Visuel */}
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <div className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-blue-400 rounded-full opacity-50 blur-3xl filter mix-blend-multiply"></div>
        <span className="animate-ping-customm absolute inline-flex h-[80%] w-[80%] max-w-[600px] max-h-[600px] rounded-full bg-sky-300 opacity-30 blur-3xl filter"></span>
      </div>

      <div className="relative z-10">
        {/* Titre et Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible" // Déclenche l'animation lors de la vue
          viewport={{ once: true, amount: 0.3 }} // Animation déclenchée une fois à 30% visible
          variants={fadeInUp}
          className="text-center font-display mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 mb-4">Nos Services</h1>
          <p className="text-gray-700 text-lg sm:text-xl">
            Découvrez les services que CamSpeed propose pour répondre à vos besoins en livraison rapide et fiable.
          </p>
        </motion.div>

        {/* Liste des Services */}
        <motion.div
          className="flex flex-wrap justify-center"
          initial="hidden"
          whileInView="visible" // Déclenche l'animation lors de la vue
          viewport={{ once: true, amount: 0.2 }} // Animation déclenchée une fois à 20% visible
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Appel à l'action */}
        <motion.div
          className="flex justify-center mt-8"
        >
          <CTAButton text="Demandez un devis" onClick={handleCTAClick} />
        </motion.div>

        {/* Témoignages avec Carrousel */}
        <motion.div
          className="mt-12 flex flex-wrap justify-evenly"
          initial="hidden"
          whileInView="visible" // Déclenche l'animation lors de la vue
          viewport={{ once: true, amount: 0.3 }} // Animation déclenchée une fois à 30% visible
          variants={containerVariants}
        >
          {servicesData.map((servicePlus, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <ServicePlusCard servicePlus={servicePlus} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
