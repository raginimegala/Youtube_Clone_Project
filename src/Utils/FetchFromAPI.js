import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com'"

const options = {
    
  params: {
   
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


export const fetchFromAPI = async() => {

  const {data} = await axios.get(`{BASE_URL}/{url}`,options)
  return data;
  
}
