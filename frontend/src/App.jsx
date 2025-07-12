import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"; // ✅ Import Toaster

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import WordCounterPage from "./pages/WordCounterPage";

const App = () => {
  return (
    <>
      {/* ✅ Toast container for displaying toasts globally */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* App routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/word-counter" element={<WordCounterPage />} />
      </Routes>
    </>
  );
};

export default App;
