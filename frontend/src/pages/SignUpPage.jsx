// pages/SignUpPage.jsx
import React from "react";
import InfoPanel from "../components/InfoPanel";
import SignUpForm from "../components/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_2fr]  shadow-xl bg-white min-h-screen">
      <InfoPanel />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
