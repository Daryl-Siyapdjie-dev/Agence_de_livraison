import React, { useState } from 'react';
import ParcelSummary from '../components/tracking/ParcelSummary';
import MapView from '../components/tracking/MapView';
import HistoryTimeline from '../components/tracking/HistoryTimeline';
import ProgressChart from '../components/tracking/ProgressChart';
import ParcelTracker from '../components/tracking/ParcelTracker';

// Définition de types pour trackingData
interface TrackingHistory {
  location: string;
  date: string;
  time: string;
}

interface TrackingData {
  status: string;
  estimatedDelivery: string;
  currentLocation: string;
  history: TrackingHistory[];
  position: { lat: number; lng: number };
}

const Tracking: React.FC = () => {
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);

  const handleSearch = (data: { trackingNumber: string }) => {
    const mockData: TrackingData = {
      status: 'En transit',
      estimatedDelivery: '15 Septembre 2024',
      currentLocation: 'Yaounde, Cameroun',
      history: [
        { location: 'Mokolo, Cameroun', date: '13 Sept', time: '10:00' },
        { location: 'Nkolbisson, Cameroun', date: '14 Sept', time: '15:30' },
      ],
      position: { lat: 48.8566, lng: 2.3522 },
    };
    setTrackingData(mockData);
  };

  return (
    <section className=' ' id='tracking'>
    <div className="bg-white ">
      <div className="container mx-auto py-10 space-y-10">
        <div className=' bg-tracking-image  object-cover h-80  bg-center'>
        <h1 className="text-3xl font-bold text-center leading-tight text-gray-900 mb-6">
          Suivez votre colis
        </h1>

        {/* Passer handleSearch en prop */}
        
        <ParcelTracker onSearch={handleSearch} />
        </div>
        {trackingData && (
          <>
            <ParcelSummary
              status={trackingData.status}
              estimatedDelivery={trackingData.estimatedDelivery}
              currentLocation={trackingData.currentLocation}
            />
            <MapView lat={trackingData.position.lat} lng={trackingData.position.lng} />
            <HistoryTimeline history={trackingData.history} />
            <ProgressChart />
          </>
        )}
      </div>
    </div>
    </section>

  );
};

export default Tracking;
