import axios from "axios";

const instance = axios.create({
  baseURL: "http://65.0.106.151:8080/api/auth",
  headers: {
    "Content-Type": "application/json", 
  },
});

export default instance;