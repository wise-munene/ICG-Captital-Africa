import axios from "../api/axiosClient";

export const loginUser = async(data:any) => {
  const response = await axios.post("/auth/login", data)
  return response.data
}