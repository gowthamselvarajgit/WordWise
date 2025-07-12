import React from "react";

const StatBox = ({ label, value, colored = false }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-xl border border-gray-200 px-6 py-4 min-w-[120px] shadow-md hover:shadow-lg transition duration-300">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
        {label}
      </p>
      <p
        className={`text-xl font-bold ${
          colored ? "text-red-500" : "text-blue-700"
        }`}
      >
        {value}
      </p>
    </div>
  );
};

export default StatBox;
