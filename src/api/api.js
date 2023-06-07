import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {API_URL} from '@env'

const api = axios.create({
  baseURL: `${API_URL}`,
});

api.interceptors.request.use(
  async (config) => {
    config.headers.Accept='application/json'
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default api;
