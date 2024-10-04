// src/MapView.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './leafletSetup'; // Assurez-vous d'importer la configuration de Leaflet ici

const MapView: React.FC<{ lat: number, lng: number }> = ({ lat, lng }) => {
  return (
    <MapContainer center={[lat, lng]} zoom={13} className="h-96 w-full z-30 rounded-lg shadow-md">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>Votre colis est ici</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
