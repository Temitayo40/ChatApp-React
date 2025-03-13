import axios from "axios";

// export const url = "http://localhost:5000";
export const url = "https://chatapp-9rl2.onrender.com";

export const axiosInstance = axios.create({
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
