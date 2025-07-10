import React from "react";
import { FaArrowRight, FaRegEnvelope } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("You're subscribed!");
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-xl">
      <Toaster position="bottom-center" />
      <h4 className="text-2xl font-bold text-gray-800 mb-2">
        Join Our Newsletter
      </h4>
      <p className="text-gray-500 mb-6 text-sm">
        Only updates and special offers. No spam.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <div className="flex items-center border border-blue-600 rounded-full px-4 py-2 w-full sm:w-auto">
          <FaRegEnvelope className="text-blue-600 mr-2" />
          <input
            type="email"
            placeholder="Enter your email address..."
            className="outline-none bg-transparent w-full text-sm text-gray-700 placeholder-gray-400"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-5 rounded-full font-medium hover:bg-blue-700 transition duration-300 flex items-center gap-2"
        >
          Subscribe <FaArrowRight />
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
