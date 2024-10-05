// src/services/api.js
import axios from 'axios';
import {API_URL} from "./../config";


export const getCampaigns = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/campaigns?populate=image`);
    return response.data; // Retorna los datos de las campañas
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    throw error; // Lanza el error para manejarlo en otro lugar
  }
};

export const createDonation = async (donationData) => {
  try {
    const response = await axios.post(`${API_URL}/donations`, donationData);
    return response.data; // Retorna los datos de la donación creada
  } catch (error) {
    console.error('Error creating donation:', error);
    throw error; // Lanza el error para manejarlo en otro lugar
  }
};
