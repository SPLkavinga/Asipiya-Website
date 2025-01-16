import axios from "axios";
import Cookies from "js-cookie";

const axiosClient = axios.create({

  baseURL: import.meta.env.VITE_API_URL,

  //change the base url in .env file 
  //baseURL: `http://localhost:5000/api`,
  //baseURL: `https://office.asipiya.lk/api`,

  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // Allow requests from all origins (change this as needed)
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE", // Allow specific HTTP methods
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept", // Allow specific headers
  },
});


axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Removed login check and redirection logic
    try {
      const { response } = error;
      if (response && response.status === 401) {
        Cookies.remove("_auth");
        localStorage.setItem(
          "TOKEN_EXPIRE",
          "Your login has expired. Please log in again to continue."
        );
        // Removed redirection to login page
      }
    } catch (error) {
      console.error(error);
    }

    throw error;
  }
);

export default axiosClient;
