import React, { Children } from "react";

const GlassCard = ({ children }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      {children}
    </div>
  );
};

export default GlassCard;
