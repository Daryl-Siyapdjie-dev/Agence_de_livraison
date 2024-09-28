import { motion } from 'framer-motion';
import { useState } from 'react';
import BuyNow from '../payements/BuyNow';

const PricingComponent1 = () => {
  const [selectedOption, setSelectedOption] = useState('option3');
  const [price, setPrice] = useState(2500);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setPrice(option === 'option3' ? 2500 : 3500);
  };

  return (
    <div className="shadow-xl drop-shadow-2xl p-2  sm:m-4 text-center text-white bg-blue-500 font-display rounded-3xl w-full sm:w-80 md:w-96 lg:w-96">
      <h3 className="text-xl font-display px-5 py-3 font-bold text-white text-center">Moyen Colis</h3>
      <p><span className="text-6xl text-white">2-10 kg</span></p>

      {/* Prix avec animation */}
      <div className="p-4 text-sm text-gray-200">
        XAF
        <motion.span
          className="px-4 text-xl text-gray-50"
          key={price}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {price}
        </motion.span>
      </div>

      {/* Options */}
      <div className="py-3 my-4 shadow rounded-xl">
        <div className="flex justify-between p-3 my-2">
          <div>
            <p className="text-left text-base">Livraisons Express</p>
            <p className="text-left text-sm text-gray-200">Moins de 24 heures</p>
          </div>
          <div>
            <p className="text-gray-50">{selectedOption === 'option3' ? price : 2500}</p>
          </div>
        </div>

        <div>
          <input
            type="radio"
            id="option3"
            name="options"
            className="hidden"
            checked={selectedOption === 'option3'}
            onChange={() => handleOptionChange('option3')}
          />
          <label
            htmlFor="option3"
            className="inline-block px-4 py-1 text-sm border-2 text-gray-200 border-gray-200 rounded-full cursor-pointer transition-colors font-display duration-300"
          >
            Option 1
          </label>
        </div>
      </div>

      <div className="py-3 shadow rounded-xl">
        <div className="flex justify-between p-3 my-2">
          <div>
            <p className="text-left text-base">Livraisons Standard</p>
            <p className="text-left text-sm text-gray-200">(2 à 3 jours)</p>
          </div>
          <div>
            <p className="text-gray-50">{selectedOption === 'option4' ? price : 3500}</p>
          </div>
        </div>

        <div>
          <input
            type="radio"
            id="option4"
            name="options"
            className="hidden"
            checked={selectedOption === 'option4'}
            onChange={() => handleOptionChange('option4')}
          />
          <label
            htmlFor="option4"
            className="inline-block px-4 py-1 text-sm text-gray-50 border-2 border-gray-300 rounded-full cursor-pointer transition-colors duration-300"
          >
            Option 2
          </label>
        </div>
      </div>

      <div className="my-7">
      <BuyNow/>

      </div>
    </div>
  );
};

export default PricingComponent1;
