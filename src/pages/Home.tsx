import { Typewriter } from 'react-simple-typewriter';
import LocationInput from '../components/common/LocationInput ';

const Home=()=>{
    return(
        <section id="home" className="min-h-[90vh]   bg-white lg:max-h-80 mt-24 flex flex-col lg:flex-row py-8 text-gray-800 font-bold lg:h-56 lg:p-8 dark:text-white">
            <div className="text-center w-full lg:w-1/2 flex flex-col mx-6 lg:px-8 p-2 lg:mt-36 h-screen ">
            <h1 className=" text-7xl text-blue-600 text-start font-bold   mb-4">
             <Typewriter
              words={['CamSpeed', 'Livraison Rapide et Fiable', 'Au Cameroun']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
      <p className=" text-2xl text-start text-gray-700 font-display ">
        Votre partenaire de confiance pour des livraisons adaptées à vos besoins.
      </p>
      <div className=' text-gray-600  py-4 flex justify-between font-display hover:justify-around flex-wrap my-4 text-wrap'>
        <span className='p-3 mb-8 mr-1 border-2 rounded-full'>Livraison Express et Standard</span>
        <span className='p-4 mb-8 mr-1 border-2 rounded-full'>Suivi en Temps Réel </span>
        <span className='p-4 mb-8 mr-1 border-2 rounded-full'>Service Client 24/7</span>
        <span className='p-4 mb-8 mr-2 border-2 rounded-full'>Options Flexibles</span>
      </div>
      <div>
        <LocationInput/>
      </div>

            </div>
            <div className="text-center w-full lg:w-1/2 p-6 relative ">
            <div className=" absolute top-0 left-3 w-80 h-80 opacity-70 mix-blend-multiply filter blur-xl bg-purple-300 rounded-full animate-blob animation-delay-2000">
            </div>
            <div className=" absolute top-0 right-4 w-80 h-80 mix-blend-multiply opacity-70 filter blur-xl bg-blue-300 rounded-full animate-blob ">
            </div>
            <div className=" absolute top-0 bottom-12 left-20 w-80 opacity-70 h-80 mix-blend-multiply filter blur-xl bg-blue-500 rounded-full animation-delay-4000">
            </div>
                <img src="./src/assets/images/Grou.png" alt="" className=" px-4" />
            </div>
        </section>
    )
}

export default Home