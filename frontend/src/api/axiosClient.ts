//creating the api connection using axios, which is a popular HTTP client for making requests to the backend API. The axiosClient instance is configured with a base URL and default headers, making it easier to make API calls throughout the application without having to specify the base URL and headers each time.

import axios from 'axios';

const axiosClient = axios.create({  //create an instance of axios with default configuration
  baseURL: 'http://localhost:5080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;