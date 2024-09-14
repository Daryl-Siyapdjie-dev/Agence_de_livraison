import { useState } from "react";
import { ServicePlus } from "../../type";

interface ServicePlusProps {
    servicePlus: ServicePlus;
  }
const ServicePlusCard: React.FC<ServicePlusProps> = ({servicePlus}) => {
    const [isOpen, setIsOpen] = useState(false); // Gérer l'état de l'accordéon
  
    return (
      <div className="border-b border-blue-500 m-4 font-display lg:w-96 py-4">
        {/* Titre et icône du service */}
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full text-left">
          <div className="flex items-center space-x-3 ">
            <div className="text-2xl text-blue-600">{servicePlus.icon}</div>
            <h3 className="text-lg font-semibold">{servicePlus.title}</h3>
          </div>
          <span className=" text-xl text-blue-600">{isOpen ? '-' : '+'}</span>
        </button>
        
        {/* Description et détails supplémentaires */}
        <p className="mt-2 text-gray-600">{servicePlus.description}</p>
        {isOpen && <p className="mt-2 text-sm text-gray-500">{servicePlus.details}</p>}
      </div>
    );
  };

  export default ServicePlusCard;