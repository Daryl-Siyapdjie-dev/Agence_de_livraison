import React from 'react';

type ParcelSummaryProps = {
  status: string;
  estimatedDelivery: string;
  currentLocation: string;
};

const ParcelSummary: React.FC<ParcelSummaryProps> = ({ status, estimatedDelivery, currentLocation }) => {
  return (
    <div className="bg-white shadow-md  rounded-lg">
      <h2 className="text-2xl font-bold text-blue-600 text-center">Résumé de votre colis</h2>
      <div className=' flex justify-around py-4'>
      <p><strong>Statut :</strong> {status}</p>
      <p><strong>Livraison estimée :</strong> {estimatedDelivery}</p>
      <p><strong>Localisation actuelle :</strong> {currentLocation}</p>
      </div>

    </div>
  );
};

export default ParcelSummary;
