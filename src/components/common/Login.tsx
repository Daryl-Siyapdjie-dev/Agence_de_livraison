import React, { useState } from 'react';
import Modal from './Modal';

const Login: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)} className="p-2 px-6 m-2 border-blue-600 bg-white text-blue-600 rounded-full border-2 text-xs font-bold ">
      Se connecter
      </button>
      {showModal && (
        <Modal title="Connexion" onClose={() => setShowModal(false)}>
        <div className=' mx-28  font-display text-lg '>
            <h1 className=' text-center text-xl font-bold'>Connectez‑vous à CamSpeed</h1>
          <button className="w-full py-2 bg-blue-100 items-center flex text-sm  justify-center my-4 text-black rounded-full"> <img src=" ./src/assets/images/icones/google.svg" alt="" className=' h-4 px-2' /> Se connecter avec Google</button>
          <button className="w-full py-2 my-4 text-center items-center text-sm flex justify-center text-black bg-blue-100 rounded-full"> <img src=" ./src/assets/images/icones/apple.svg" className=' h-4 px-2  ' alt="" /> Se connecter avec Apple</button>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-400"></div>
               <span className="mx-4 text-gray-500">ou</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <input type="text" className=' pl-4 my-2 h-14 border focus:outline-none focus:ring focus:ring-violet-300 focus:border-blue-600   w-full py-2 rounded  bg-blue-100'placeholder='Entez votre adresse mail  ' />
          <button className=' w-full py-2 my-4 text-sm rounded-full bg-blue-600 border-2 border-blue-600  text-white font-bold  '>Suivant</button>
          <button className=' w-full py-2 my-2 rounded-full text-blue-600 font-bold  border-2 border-blue-600 text-sm '> Mots de passe oublie</button>
          <div className=' text-center my-9 text-sm '>Vous n'avez pas de compte ? <span className=' text-blue-600'>Inscrivez-vous</span></div>

          </div>
        </Modal>
      )}
    </div>
  );
};

export default Login;
