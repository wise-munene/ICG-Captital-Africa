import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL ||
 'http://icg-backend-cppd.onrender.com/api';

 console.log("API Base URL:", baseURL);  // Log the base URL to verify it's being read correctly

const axiosClient = axios.create({
  baseURL,
});

export default axiosClient;