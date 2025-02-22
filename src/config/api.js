const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Берем из .env

export const API_ENDPOINTS = {
   SEND_EMAIL: `${API_BASE_URL}/send-email`,
};
