import TestimonialsCarousel from "../components/about/testimonialsCarousel"

const About=()=>{
   
    return(
        <section className="p-6 pt-24 mt-6 relative">
          
      <div className="container mx-auto">
        {/* Introduction de l'Entreprise */}

        <div className="mb-12 flex  text-center">
          <div className=" w-1/2 relative ">
          
           
            <img src="./src/assets/images/livaison.svg" alt="" />
          </div>
          <div className=" text-gray-700  y flex-1">
            <p className=" text-blue-600 text-6xl font-bold text-justify"> Depuis notre création en 2015, nous nous engageons à offrir des services de livraison rapides et fiables. </p>
            <p className=" text-justify text-gray-900 text-lg font-bold"> Notre mission est de simplifier la logistique pour nos clients, tout en assurant une qualité de service optimale.
            Nous mettons un point d'honneur à respecter des valeurs telles que la ponctualité, l'efficacité et la transparence dans toutes nos opérations.</p>
            
          </div>

        </div>

        {/* Témoignages */}
        <div className="mb-12">
         <TestimonialsCarousel/>
        </div>        
      </div>
      <div className=" absolute top-32   left-[520px] w-[800px] h-[800px] opacity-70 mix-blend-multiply filter blur-2xl bg-blue-300 rounded-full  animation-delay-2000">
          </div>
    </section>
    )
}

export default About