import PricingComponent0 from '../components/pricing/pricingComponent';
import PricingComponent1 from '../components/pricing/pricingComponent1';
import PricingComponent2 from '../components/pricing/pricingComponent2';

const Pricing = () => {
  return (
    <div className="min-h-screen mt-24 w-screen">
      <h2 className="text-5xl font-bold mb-6 text-center  font-display">Tarification</h2>
      <div className='flex justify-center p-8'>
        <PricingComponent0/>
        <PricingComponent1/>
        <PricingComponent2/>
      </div>

      <div className=" p-6 rounded-lg text-center font-display">
        <h3 className="text-xl font-semibold font-display ">Remises et Programmes de Fidélité</h3>
        <p>Nous offrons des remises pour nos clients réguliers. Contactez-nous pour en savoir plus sur nos programmes de fidélité.</p>
      </div>
    </div>
  );
};

export default Pricing;