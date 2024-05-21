import axios from "axios";
import { getCookie } from "./utils";

export const authClient = () => {
  const tokenFromCookie = getCookie("token_access");
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL_BASE || 'http://localhost:5000/api',
    headers: {
      "Authorization": `Bearer ${tokenFromCookie}`,
    },
  });
};
