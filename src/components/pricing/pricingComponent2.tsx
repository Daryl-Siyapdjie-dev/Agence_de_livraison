import { motion } from 'framer-motion';
import { useState } from 'react';

const PricingComponent2 = () => {
  const [selectedOption, setSelectedOption] = useState('option5');
  const [price, setPrice] = useState(4000);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setPrice(option === 'option5' ? 4000 : 5000);
  };

  return (
    <div className="shadow-xl drop-shadow-2xl p-2 sm:m-4 sm:my-7 text-center font-display rounded-3xl bg-white w-full sm:w-80 md:w-96 lg:w-96">
      <h3 className="text-xl font-display px-5 py-3 font-bold text-blue-600 text-center">Gros colis</h3>
      <p className="text-sm">jusqu'à <span className="text-6xl text-blue-600">10kg</span></p>

      {/* Prix avec animation */}
      <div className="p-4 text-sm text-gray-500">
        XAF
        <motion.span
          className="px-4 text-xl text-blue-400"
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
            <p className="text-left text-sm text-gray-500">Moins de 24 heures</p>
          </div>
          <div>
            <p className="text-blue-400 ">{selectedOption === 'option5' ? price : 4000}</p>
          </div>
        </div>

        <div>
          <input
            type="radio"
            id="option5"
            name="options"
            className="hidden"
            checked={selectedOption === 'option5'}
            onChange={() => handleOptionChange('option5')}
          />
          <label
            htmlFor="option5"
            className="inline-block px-4 py-1 text-sm border-2 text-gray-300 border-gray-300 rounded-full cursor-pointer transition-colors font-display duration-300"
          >
            Option 1
          </label>
        </div>
      </div>

      <div className="py-3  shadow rounded-xl">
        <div className="flex justify-between p-3 my-2">
          <div>
            <p className="text-left text-base">Livraisons Standard</p>
            <p className="text-left text-sm text-gray-500">(2 à 3 jours)</p>
          </div>
          <div>
            <p className="text-blue-400 ">{selectedOption === 'option6' ? price : 5000}</p>
          </div>
        </div>

        <div>
          <input
            type="radio"
            id="option6"
            name="options"
            className="hidden"
            checked={selectedOption === 'option6'}
            onChange={() => handleOptionChange('option6')}
          />
          <label
            htmlFor="option6"
            className="inline-block px-4 py-1 text-sm text-gray-300 border-2 border-gray-300 rounded-full cursor-pointer transition-colors duration-300"
          >
            Option 2
          </label>
        </div>
      </div>

      <div className="my-7">
        <motion.button 
            whileHover={{
              scale: 1.1,
              rotate: 3,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95, rotate: -3 }}
        className="p-2 px-6 mx-6 bg-blue-600 font-display text-white rounded-full border-2 font-bold shadow-2xl">
          Buy Now
        </motion.button>
      </div>
    </div>
  );
};

export default PricingComponent2;
