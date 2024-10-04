// src/hooks/useParcelTracker.ts
import { useState } from 'react';
import { getParcelByTrackingNumber } from '../services/api';

const useParcelTracker = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [parcelData, setParcelData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const trackParcel = async (trackingNumber: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getParcelByTrackingNumber(trackingNumber);
      setParcelData(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError('Colis introuvable ou une erreur est survenue.');
    } finally {
      setLoading(false);
    }
  };

  return { parcelData, loading, error, trackParcel };
};

export default useParcelTracker;
