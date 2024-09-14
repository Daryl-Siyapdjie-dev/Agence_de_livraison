import React from 'react';
import { Service } from '../../type';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
      <div className="bg-white flex justify-center items-center lg:w-72 m-6 shadow-xl  rounded-lg p-6 ">
        <div className="  text-center">
          <div className={`text-4xl mb-4 inline-block p-3 rounded-full ${service.bgColor} ${service.textColor} `}> {service.icon}</div>
          <h3 className="text-xl font-semibold font-display mb-2">{service.title}</h3>
          <div className=' text-center text-wrap text-gray-600 text-lg font-display'> {service.description}</div>
          {/* <Accordion title="En savoir plus" content={service.description} /> */}
        </div>
      </div>
    );
  };

export default ServiceCard;
