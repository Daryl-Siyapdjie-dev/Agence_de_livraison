import React, { useState, useEffect, useRef } from 'react';
import PricingComponent0 from '../components/pricing/pricingComponent';
import PricingComponent1 from '../components/pricing/pricingComponent1';
import PricingComponent2 from '../components/pricing/pricingComponent2';

const Pricing: React.FC = () => {
  const [animateCards, setAnimateCards] = useState(false);
  const pricingSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Fonction pour gérer l'intersection
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimateCards(true); // Démarre l'animation si la section est visible
        }
      },
      { threshold: 0.2 } // Le seuil à 20% d'apparition
    );

    // Observer la section pricing
    if (pricingSectionRef.current) {
      observer.observe(pricingSectionRef.current);
    }

    // Nettoyage à la désinstallation du composant
    return () => {
      if (pricingSectionRef.current) {
        observer.unobserve(pricingSectionRef.current);
      }
    };
  }, []);

  return (
    <section id="pricing" ref={pricingSectionRef} className=' bg-white pt-24'>
      <div className="min-h-screen  bg-white w-screen">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-blue-600 font-display">
          Tarification
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-center gap-8 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:mx-28 gap-y-8 mx-4">
            {/* Première carte */}
            <div
              className={`w-full flex justify-center transition-all duration-700 ease-in-out transform ${
                animateCards ? 'translate-x-0' : '-translate-x-20 lg:-translate-x-40'
              }`}
            >
              <PricingComponent0 />
            </div>

            {/* Deuxième carte */}
            <div
              className={`w-full flex justify-center transition-all duration-700 ease-in-out transform ${
                animateCards ? 'translate-x-0' : 'translate-y-20 lg:translate-y-40'
              }`}
            >
              <PricingComponent1 />
            </div>

            {/* Troisième carte */}
            <div
              className={`w-full flex justify-center transition-all duration-700 ease-in-out transform ${
                animateCards ? 'translate-x-0' : 'translate-x-20 lg:translate-x-40'
              }`}
            >
              <PricingComponent2 />
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg text-center font-display">
          <h3 className="text-xl font-semibold font-display">Remises et Programmes de Fidélité</h3>
          <p>
            Nous offrons des remises pour nos clients réguliers. Contactez-nous pour en savoir plus sur nos programmes de
            fidélité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
