import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "en-US",
    },
    timeout: 30000,
  });

export default axiosClient;