import {  GeoAltFill } from "react-bootstrap-icons";

const LocationInput = () => {
  return (
    <div className="flex items-center bg-[#f5f8ff] border w-full sm:w-3/4 p-2 rounded-full overflow-hidden">
      <span className="flex items-center justify-center  bg-gray-100 ">
        <GeoAltFill className=" text-blue-600 w-4 h-4 sm:w-6"/>
      </span>

      <input
        type="text"
        placeholder="Entrez votre localisation"
        className="flex-1 p-1 text-xs sm:text-base bg-[#f5f8ff] outline-none font-display"
      />

      <button className="bg-blue-600 rounded-full text-white px-3 sm:px-4 sm:py-2 font-display sm:text-xs">
        Chercher
      </button>
    </div>
  );
};

export default LocationInput;
