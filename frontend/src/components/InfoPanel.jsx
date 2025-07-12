import React from "react";
import logo from "../assets/images/logo.png"; // Adjust the path if needed

const testimonials = [
  {
    name: "Samantha Rose",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    message:
      "WordWise got me started instantly. I track writing daily now. Simple & smart!",
    rating: "★★★★★",
  },
  {
    name: "David Clark",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    message:
      "This tool is incredibly fast and accurate. A must-have for any writer!",
    rating: "★★★★★",
  },
  {
    name: "Emily Stone",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "Clean UI, no ads, and all the features I need. WordWise is awesome!",
    rating: "★★★★★",
  },
];

const InfoPanel = () => {
  return (
    <div className="bg-blue-600 text-white p-10 flex flex-col justify-between h-full">
      {/* Logo */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="WordWise Logo"
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="text-xl font-bold tracking-wide">WordWise</span>
        </div>
      </div>

      {/* Title and Description */}
      <div className="flex-grow">
        <h2 className="text-3xl font-extrabold leading-snug mb-4">
          Let's setup <br />
          your WordWise <br />
          Account
        </h2>
        <p className="text-sm opacity-90">
          Join the fastest word counter tool online. <br />
          Start tracking, writing, and staying productive now.
        </p>
      </div>

      {/* Testimonial */}
      <div className="bg-blue-700 p-4 mt-12 rounded-xl shadow">
        <p className="font-semibold mb-1">I barely had to do anything</p>
        <p className="text-sm text-blue-100">
          WordWise got me started instantly. I track writing daily now. Simple &
          smart!
        </p>
        <div className="mt-4 flex items-center gap-2">
          <img
            src="https://randomuser.me/api/portraits/women/32.jpg"
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">Samantha Rose</p>
            <p className="text-yellow-300 text-xs">★★★★★</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
