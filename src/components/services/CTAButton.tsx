import React from 'react';

interface CTAButtonProps {
  text: string;
  onClick: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
    >
      {text}
    </button>
  );
};

export default CTAButton;
