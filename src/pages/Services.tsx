import React from 'react';
import { services, servicesData } from '../data/servicesData';
import ServiceCard from '../components/services/ServiceCard';
import CTAButton from '../components/services/CTAButton';
import ServicePlusCard from '../components/services/servicePlus';

const ServicesSection: React.FC = () => {
  const handleCTAClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section id="services" className="sm:pt-24 px-4 bg-white sm:px-8 relative">
      {/* Background Visuel */}
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <div className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-blue-400 rounded-full opacity-50 blur-3xl filter mix-blend-multiply"></div>
        <span className="animate-ping-custom absolute inline-flex h-[80%] w-[80%] max-w-[600px] max-h-[600px] rounded-full bg-sky-300 opacity-30 blur-3xl filter"></span>
      </div>

      <div className="relative z-10">
        {/* Titre et Introduction */}
        <div className="text-center font-display mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 mb-4">Nos Services</h1>
          <p className="text-gray-700 text-lg sm:text-xl">
            Découvrez les services que CamSpeed propose pour répondre à vos besoins en livraison rapide et fiable.
          </p>
        </div>

        {/* Liste des Services */}
        <div className="flex flex-wrap justify-center">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Appel à l'action */}
        <div className="flex justify-center mt-8">
          <CTAButton text="Demandez un devis" onClick={handleCTAClick} />
        </div>

        {/* Témoignages avec Carrousel */}
        <div className="mt-12 flex flex-wrap justify-evenly">
          {servicesData.map((servicePlus, index) => (
            <ServicePlusCard key={index} servicePlus={servicePlus} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
