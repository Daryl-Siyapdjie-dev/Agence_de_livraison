import React from 'react';
import { services, servicesData } from '../data/servicesData';
import ServiceCard from '../components/services/ServiceCard';
import CTAButton from '../components/services/CTAButton';
import ServicePlusCard from '../components/services/servicePlus';

const ServicesSection: React.FC = () => {
  const handleCTAClick = () => {
    // Logique pour le CTA, par exemple rediriger vers une page de contact
    window.location.href = '/contact';
  };

  return (
    <section className="pt-24 ">
      <div className="">
        {/* Titre et Introduction */}
        <div className="text-center font-display mb-12">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">Nos Services</h1>
          <p className="text-gray-700 text-xl">
            Découvrez les services que CamSpeed propose pour répondre à vos besoins en livraison rapide et fiable.
          </p>
        </div>

        {/* Liste des Services avec Accordéons */}
        <div className=" flex justify-center  ">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Appel à l'Action */}
        <div className="flex justify-center font-display font-semibold">
          <CTAButton text="Demandez un devis" onClick={handleCTAClick} />
        </div>

        {/* Témoignages avec Carrousel */}
        <div className=" flex p-4 flex-wrap justify-evenly m-4">
          {servicesData.map((servicesPlus, index) => (
            <ServicePlusCard
              key={index}
              servicePlus={servicesPlus}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
