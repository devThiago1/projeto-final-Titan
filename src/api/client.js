import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timout: 1000,
});

console.log("API URL:", import.meta.env.VITE_API_URL);
apiClient.interceptors.request.use(
  (response) => response,
  (error) => {
    console.error("Erro ao fazer requisição:", error);
    return Promise.reject(error);
  },
);

export default apiClient;
