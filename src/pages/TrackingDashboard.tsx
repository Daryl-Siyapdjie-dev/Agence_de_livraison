import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io, { Socket } from 'socket.io-client';
import Status from '../components/tracking/Status';
import TrackingMap from '../components/tracking/Map';

interface Location {
  lat: number;
  lng: number;
}

interface PackageHistory {
  location: string;
  date: string;
}

interface PackageData {
  status: string;
  currentLocation: Location;
  history: PackageHistory[];
  eta: string;
}

const TrackingDashboard: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState<string>('');
  const [packageStatus, setPackageStatus] = useState<string | null>(null);
  const [location, setLocation] = useState<Location>({ lat: 0, lng: 0 });
  const [history, setHistory] = useState<PackageHistory[]>([]);
  const [estimatedDelivery, setEstimatedDelivery] = useState<string>('');

  // Socket connection for real-time updates
  useEffect(() => {
    const socket: Socket = io('http://localhost:4000'); // Remplace par l'URL de ton backend
  
    socket.on('package-update', (data: PackageData) => {
      setPackageStatus(data.status);
      setLocation(data.currentLocation);
      setHistory(data.history);
      setEstimatedDelivery(data.eta);
  
      toast.success('Détails du colis mis à jour !');
    });
  
    // Cleanup function pour fermer le socket lors du démontage du composant
    return () => {
      socket.disconnect();
    };
  }, []);

  // Fetch package details
  const fetchPackageDetails = async () => {
    try {
      const response = await axios.get<PackageData>(`/api/track/${trackingNumber}`);
      const { status, currentLocation, history, eta } = response.data;
  
      setPackageStatus(status);
      setLocation(currentLocation);
      setHistory(history);
      setEstimatedDelivery(eta);
  
      toast.success('Détails du colis mis à jour !');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Erreur lors de la récupération des informations du colis.');
    }
  };
  

  return (
   <section  className=' bg-white' id='tracking' >
     <div className="tracking-dashboard sm:pt-24 p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4">Suivi de colis</h1>

      <div className="search-bar mb-6">
        <input
          type="text"
          placeholder="Entrez votre numéro de suivi"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="p-2 border rounded-lg w-full"
        />
        <button
          onClick={fetchPackageDetails}
          className="p-2 bg-green-500 text-white rounded-lg mt-2"
        >
          Suivre le colis
        </button>
      </div>

      <TrackingMap location={location} />

      <Status
        packageStatus={packageStatus}
        estimatedDelivery={estimatedDelivery}
        history={history}
      />

      <ToastContainer />
    </div>
   </section>
  );
};

export default TrackingDashboard;
