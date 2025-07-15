import axios from "./axios";

// Signup
export const registerUser = async (userData) => {
  return await axios.post("/register", userData); // ✅ NO `/auth` here
};

// Login
export const loginUser = async (loginData) => {
  return await axios.post("/login", loginData); // ✅ This is correct
};
