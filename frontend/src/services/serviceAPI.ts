import axiosClient from "../api/axiosClient";

export const getServices = async () => {  // Replace with your actual API endpoint
    const resonse = await axiosClient.get('/services');  // Replace with your actual API endpoint
    return resonse.data;
}