import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="text-blue-600 text-lg">{isOpen ? '_' : '+'}</span>
      </button>
      {isOpen && (
        <div className="pb-4 text-center text-gray-600">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
