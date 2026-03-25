//this file is for all the API calls related to services, such as fetching service data, creating new services, updating existing services, and deleting services. 

import axiosClient from "../api/axiosClient";

export const getServices = async () => {  // Replace with your actual API endpoint
    const response = await axiosClient.get('/services');  // Replace with your actual API endpoint
    return response.data;
}