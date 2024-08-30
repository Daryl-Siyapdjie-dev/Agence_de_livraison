
const LocationInput = () => {
  return (
    <div className="flex items-center bg-[#f5f8ff] border w-3/4  p-2 rounded-full overflow-hidden">
      <span className="flex items-center justify-center px-3 bg-gray-100">
        <img src="./src/assets/images/localisation.svg" alt="" />
      </span>

      <input
        type="text"
        placeholder="Entrez votre localisation"
        className="flex-1 p-2 bg-[#f5f8ff] outline-none font-display"
      />

      <button className="bg-blue-600 rounded-full text-white px-4 py-2 font-display">
        Chercher
      </button>
    </div>
  );
};

export default LocationInput;
