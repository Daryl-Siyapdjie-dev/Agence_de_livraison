import { Typewriter } from 'react-simple-typewriter';
import LocationInput from '../components/common/LocationInput ';

const Home = () => {
  return (
    <section id="home" className="min-h-[90vh] bg-white lg:max-h-80 my-8  pt-24 px-4 md:px-8 flex flex-col lg:flex-row py-8 text-gray-800 font-bold lg:h-56 lg:p-8 ">
      <div className="text-center w-full lg:w-1/2 flex flex-col lg:mx-6 lg:px-8 p-2 lg:mt-36 h-full lg:h-screen">
        <h1 className="text-4xl sm:text-4xl lg:text-6xl text-blue-600 text-start font-bold mb-4">
          <Typewriter
            words={['CamSpeed', 'Livraison Rapide ','et Fiable', 'Au Cameroun']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className=" sm:text-xl lg:text-xl text-start text-gray-700 font-display">
          Votre partenaire de confiance pour des livraisons adaptées à vos besoins.
        </p>
        <div className='text-gray-600 py-2 text-sm flex  font-display  flex-wrap my-4'>
          <span className='p-2  m-2 border-2 rounded-full'>Livraison Express et Standard</span>
          <span className='p-2  m-2  border-2 rounded-full'>Suivi en Temps Réel</span>
          <span className='p-2  m-2  border-2 rounded-full'>Service Client 24/7</span>
          <span className='p-2  m-2  border-2 rounded-full'>Options Flexibles</span>
        </div>
        <div className='relative'>
          <LocationInput />

          <div className="absolute top-40 bottom-12 left-10 w-16 sm:w-20 opacity-70 h-16 sm:h-20 mix-blend-multiply filter blur-xl bg-blue-500 rounded-full animation-delay-4000"></div>
        </div>
      </div>

      <div className="text-center w-full lg:w-1/2 p-6 relative">
        <div className="absolute top-0 left-3 w-40 sm:w-80 h-40 sm:h-80 opacity-70 mix-blend-multiply filter blur-xl bg-purple-300 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-4 w-40 sm:w-80 h-40 sm:h-80 mix-blend-multiply opacity-70 filter blur-xl bg-blue-300 rounded-full animate-blob"></div>
        <div className="absolute top-0 bottom-12 left-20 w-40 sm:w-80 opacity-70 h-40 sm:h-80 mix-blend-multiply filter blur-xl bg-blue-500 rounded-full animation-delay-4000"></div>
        <img src="./src/assets/images/Grou.png" alt="Illustration" className="px-4 sm:mt-12" />
      </div>
    </section>
  );
};

export default Home;
