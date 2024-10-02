// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

export const getCampaigns = async () => {
  try {
    const response = await axios.get(`${API_URL}/campaigns`);
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
