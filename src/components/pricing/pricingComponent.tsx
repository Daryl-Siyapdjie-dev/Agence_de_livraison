import { motion } from 'framer-motion';
import { useState } from 'react';

const PricingComponent0 = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [price, setPrice] = useState(1000);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setPrice(option === 'option1' ? 1000 : 2500);
  };

  return (
    <div className="shadow-xl drop-shadow-2xl p-2 sm:m-4 sm:my-7 text-center font-display rounded-3xl w-full sm:w-80 md:w-96 lg:w-96">
      <h3 className="text-xl font-display py-3 font-bold text-blue-600 text-center">Petit colis</h3>
      <p className="text-xs">jusqu'à <span className="text-6xl text-blue-600">2kg</span></p>

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
            <p className="text-blue-400">{selectedOption === 'option1' ? price : 1000}</p>
          </div>
        </div>

        <div>
          <input
            type="radio"
            id="option1"
            name="options"
            className="hidden"
            checked={selectedOption === 'option1'}
            onChange={() => handleOptionChange('option1')}
          />
          <label
            htmlFor="option1"
            className="inline-block text-sm px-4 py-1 border-2 border-gray-300 rounded-full cursor-pointer transition-colors font-display text-gray-300 duration-300"
          >
            Option 1
          </label>
        </div>
      </div>

      <div className="py-3 shadow  rounded-xl">
        <div className="flex justify-between p-3 my-2">
          <div>
            <p className="text-left text-base">Livraisons Standard </p>
            <p className="text-left text-sm text-gray-500">(2 à 3 jours)</p>
          </div>
          <div>
            <p className="text-blue-400 pl-1">{selectedOption === 'option2' ? price : 2500}</p>
          </div>
        </div>

        <div>
          <input
            type="radio"
            id="option2"
            name="options"
            className="hidden"
            checked={selectedOption === 'option2'}
            onChange={() => handleOptionChange('option2')}
          />
          <label
            htmlFor="option2"
            className="inline-block px-4 py-1 text-sm border-2 border-gray-300 rounded-full cursor-pointer transition-colors duration-300"
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

export default PricingComponent0;
