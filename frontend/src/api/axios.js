import axios from "axios";

// Automatically detect base URL
const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:8080/api/auth"
    : "http://65.0.106.151:8080/api/auth";

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
