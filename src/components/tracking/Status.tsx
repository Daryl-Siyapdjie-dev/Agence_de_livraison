import React from 'react';

interface HistoryEntry {
  location: string;
  date: string;
}

interface StatusProps {
  packageStatus: string | null;
  estimatedDelivery: string;
  history: HistoryEntry[];
}

const Status: React.FC<StatusProps> = ({ packageStatus, estimatedDelivery, history }) => {
  return (
    <div className="status mt-6">
      <h2 className="text-xl font-bold">Statut du colis : {packageStatus}</h2>
      <h3 className="text-lg">Estimation de livraison : {estimatedDelivery}</h3>

      <div className="history mt-4">
        <h3 className="text-lg font-semibold">Historique du colis :</h3>
        <ul className="mt-2">
          {history.map((entry, index) => (
            <li key={index} className="mb-2">
              {entry.location} - {entry.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Status;
