import axios from "axios";

export const url = "https://chatapp-9rl2.onrender.com";

export const axiosInstance = axios.create({
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
