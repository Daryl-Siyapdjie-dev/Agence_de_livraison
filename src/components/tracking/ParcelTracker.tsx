import { useState } from 'react';
import { GeoAltFill } from 'react-bootstrap-icons';

// Définition des props pour ParcelTracker
interface ParcelTrackerProps {
  onSearch: (data: { trackingNumber: string }) => void;
}

const ParcelTracker: React.FC<ParcelTrackerProps> = ({ onSearch }) => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleTrackParcel = () => {
    onSearch({ trackingNumber });
  };

  return (
    <div className="p-4 max-w-md mx-auto ">

      <div className="flex items-center bg-[#f5f8ff] border w-full  p-2 rounded-full overflow-hidden">
      <span className="flex items-center justify-center  bg-gray-100 ">
        <GeoAltFill className=" text-blue-600 w-4 h-4 sm:w-6"/>
      </span>

      <input
        type="text"
        placeholder="Entrez votre numero de colis"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        className="flex-1 p-1 text-xs sm:text-base bg-[#f5f8ff] outline-none font-display"
      />

      <button onClick={handleTrackParcel} className="bg-blue-600 rounded-full text-white px-3 sm:px-4 sm:py-2 font-display sm:text-xs">
        Chercher
      </button>
    </div>
    </div>
  );
};

export default ParcelTracker;
