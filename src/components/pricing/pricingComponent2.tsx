import { useState } from 'react';
import { motion } from 'framer-motion';

const PricingComponent2 = () => {
  const [selectedOption, setSelectedOption] = useState('option5');
  const [price, setPrice] = useState(5000);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setPrice(option === 'option5' ? 5000 : 6000);
  };

  return (
    <div className="shadow-xl drop-shadow-2xl p-4 m-4 text-center bg-slate-800 font-display rounded-3xl lg:w-96">
      <h3 className="text-2xl font-display font-bold py-6 text-indigo-400 text-center">Grand Colis</h3>
      <p className="text-lg"><span className="text-7xl text-indigo-400">10-20 kg</span></p>

      {/* Prix avec animation d'incrémentation */}
      <div className="p-4 text-lg text-slate-400">
        XAF
        <motion.span
          className="px-4 text-2xl text-blue-400"
          key={price}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {price}
        </motion.span>
      </div>

      {/* Options */}
      <div className="py-4 shadow rounded-xl">
        <div className="flex justify-between p-4 my-4">
          <div>
            <p className="text-left text-lg text-slate-400">Livraisons Express</p>
            <p className="text-left text-gray-500">Moins de 24 heures</p>
          </div>
          <div>
            <p className="text-blue-400">{selectedOption === 'option5' ? price : 5000}</p>
          </div>
        </div>

        <div>
          <input
            type="radio"
            id="option5"
            name="options"
            className="hidden peer"
            checked={selectedOption === 'option5'}
            onChange={() => handleOptionChange('option5')}
          />
          <label
            htmlFor="option5"
            className="inline-block px-4 py-1 border-2 border-gray-500 rounded-full cursor-pointer transition-colors text-gray-500 font-display duration-300 peer-checked:bg-blue-400 peer-checked:text-white peer-checked:border-blue-400"
          >
            Option 1
          </label>
        </div>
      </div>

      <div className="py-4 shadow rounded-xl">
        <div className="flex justify-between p-4 my-4">
          <div>
            <p className="text-left text-lg text-slate-400">Livraisons Standard</p>
            <p className="text-left text-gray-500">(2 à 3 jours)</p>
          </div>
          <div>
            <p className="text-blue-400">{selectedOption === 'option6' ? price : 6000}</p>
          </div>
        </div>

        <div>
          <input
            type="radio"
            id="option6"
            name="options"
            className="hidden  peer"
            checked={selectedOption === 'option6'}
            onChange={() => handleOptionChange('option6')}
          />
          <label
            htmlFor="option6"
            className="inline-block px-4 py-1 text-gray-500 border-2 border-gray-500 rounded-full cursor-pointer transition-colors duration-300 peer-checked:bg-blue-400 peer-checked:text-white peer-checked:border-blue-400"
          >
            Option 2
          </label>
        </div>
      </div>

      <div className="my-7">
        <button className="p-2 px-6 mx-6 bg-indigo-400 font-display text-white rounded-full  font-bold shadow-2xl">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PricingComponent2;