import React from "react";

const EditorArea = ({ text, setText }) => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 rounded-2xl shadow-lg p-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start writing here..."
        className="w-full h-[320px] p-5 text-lg font-medium text-gray-800 bg-white border-2 border-transparent rounded-xl resize-none shadow-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
      ></textarea>
    </div>
  );
};

export default EditorArea;
