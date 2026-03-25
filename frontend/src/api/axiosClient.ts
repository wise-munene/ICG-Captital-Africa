//creating the api connection using axios, which is a popular HTTP client for making requests to the backend API. The axiosClient instance is configured with a base URL and default headers, making it easier to make API calls throughout the application without having to specify the base URL and headers each time.

import axios from 'axios';

const api = axios.create({  //create an instance of axios with default configuration
  baseURL: "https://icg-backend-cppd.onrender.com/api"  //set the base URL for API requests, using an environment variable or defaulting to localhost
});

export default api;  //export the configured axios instance for use in other parts of the application