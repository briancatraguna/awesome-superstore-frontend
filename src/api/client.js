import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const client = axios.create({
  baseURL: BASE_URL,
  validateStatus: (_) => {
    return true;
  },
});

export const authenticatedClient = axios.create({
  baseURL: BASE_URL,
  validateStatus: (_) => {
    return true;
  },
  headers: {
    "Authorization": "Bearer " + localStorage.getItem("accessToken")
  }
});