// src/services/apiService.ts
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/parcels';

// Récupérer les informations du colis par numéro de suivi
export const getParcelByTrackingNumber = async (trackingNumber: string) => {
  try {
    const response = await axios.get(`${API_URL}/${trackingNumber}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des informations du colis', error);
    throw error;
  }
};

// Créer un nouveau colis
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createParcel = async (parcelData: any) => {
  try {
    const response = await axios.post(API_URL, parcelData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création du colis', error);
    throw error;
  }
};

// Mettre à jour le statut du colis
export const updateParcelStatus = async (trackingNumber: string, status: string) => {
  try {
    const response = await axios.put(`${API_URL}/${trackingNumber}`, { status });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du statut du colis', error);
    throw error;
  }
};
