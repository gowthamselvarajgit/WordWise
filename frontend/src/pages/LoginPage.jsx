import React from "react";
import InfoPanel from "../components/InfoPanel";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] shadow-xl bg-white min-h-screen">
    <InfoPanel />
    <LoginForm />
  </div>;
};

export default LoginPage;
