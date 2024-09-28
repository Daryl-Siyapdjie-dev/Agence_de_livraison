import React, { useState } from 'react';
import Modal from './Modal';

const Signup: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)} className="p-2 px-6 m-2 bg-blue-600 border-blue-600 font-display text-white text-xs rounded-full border-2 font-bold  tracking-wider ">
      S'inscrire
      </button>
      {showModal && (
        <Modal title="Inscription" onClose={() => setShowModal(false)}>
          <div className=' mx-28  font-display text-lg '>
            <h1 className=' text-center text-xl font-bold'>Rejoignez CamSpeed dès aujourd'hui </h1>
          <button className="w-full py-2 bg-blue-100 text-sm items-center flex  justify-center my-4 text-black rounded-full"> <img src=" ./src/assets/images/icones/google.svg" alt="" className=' h-4 px-2' /> S'inscrire avec Google</button>
          <button className="w-full py-2 my-4 text-center text-sm items-center flex justify-center text-black bg-blue-100 rounded-full"> <img src=" ./src/assets/images/icones/apple.svg" className=' h-4 px-2  ' alt="" /> S'inscrire avec Apple</button>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-400"></div>
               <span className="mx-4 text-gray-500">ou</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          
          <button className=' w-full py-2 my-4 text-sm rounded-full bg-blue-600 border-2 border-blue-600  text-white font-bold  '> Creer un compte</button>
         
          <div className=' text-center my-9 text-sm '>Vous avez déjà un compte ?  <span className=' text-blue-600'>Connectez-vous.</span></div>

          </div>
          
        </Modal>
      )}
    </div>
  );
};

export default Signup;
