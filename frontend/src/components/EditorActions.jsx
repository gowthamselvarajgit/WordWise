import React from "react";
import toast from "react-hot-toast";

const EditorActions = ({ text, setText }) => {
  const handleCopy = () => {
    if (!text.trim()) return toast.error("Nothing to copy!");
    navigator.clipboard.writeText(text);
    toast.success("Text copied to clipboard!");
  };

  const handleClear = () => {
    if (!text.trim()) return toast.error("Text area is already empty.");
    setText("");
    toast.success("Text cleared!");
  };

  const handleDownload = () => {
    if (!text.trim()) return toast.error("Nothing to download!");
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "word-counter-output.txt";
    a.click();
    URL.revokeObjectURL(url); // cleanup
    toast.success("Text downloaded as .txt file!");
  };

  return (
    <div className="flex flex-wrap gap-4 mt-6">
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 bg-blue-100 text-blue-700 hover:bg-blue-200 px-5 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all"
      >
        📋 <span>Copy</span>
      </button>

      <button
        onClick={handleClear}
        className="flex items-center gap-2 bg-red-100 text-red-600 hover:bg-red-200 px-5 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all"
      >
        ❌ <span>Clear</span>
      </button>

      <button
        onClick={handleDownload}
        className="flex items-center gap-2 bg-green-100 text-green-700 hover:bg-green-200 px-5 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all"
      >
        ⬇️ <span>Download</span>
      </button>
    </div>
  );
};

export default EditorActions;
