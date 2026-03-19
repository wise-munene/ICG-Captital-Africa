import axios from "../api/axiosClient"

//the below is for user to create a quote request, the status will be pending by default
export const getQuotes = async () => {
  const response = await axios.get("/quotes")
  return response.data
}

//the below is for admin to update the quote status to accepted or rejected
export const updateQuoteStatus = async (id:string, status:string) => {  
  const response = await axios.put(`/quotes/${id}`, { status })
  return response.data
}