import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import GetInTouch from "../components/GetInTouch";
import NewsLetter from "../components/NewsLetter";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 font-sans text-gray-800 transition-all duration-300 overflow-y-scroll scrollbar-hide "
      style={{
        overflowY: "scroll",
        height: "500px",
      }}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="WordWise Logo"
            className="w-10 h-10 object-cover rounded-full transition-transform duration-300 hover:scale-105"
          />
          <span className="text-2xl font-extrabold text-blue-600 tracking-wide">
            WordWise
          </span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 font-semibold text-gray-600">
          {["Features", "Solutions", "Resources", "About"].map(
            (item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-blue-600 hover:underline transition"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* CTA Buttons */}
        <div className="flex justify-between gap-4">
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition duration-200 shadow-md hover:shadow-lg"
          >
            Start Free
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition duration-200 shadow-md hover:shadow-lg"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-20 relative overflow-hidden">
        {/* Glowing Animated Background behind logo */}
        <div className="absolute w-80 h-80 rounded-full bg-blue-300 opacity-30 animate-ping z-0 blur-3xl "></div>
        <div className="absolute w-60 h-60 rounded-full bg-blue-400 opacity-40 animate-ping animation-delay-300 z-0 blur-2xl"></div>
        <div className="absolute w-40 h-40 rounded-full bg-blue-500 opacity-50 animate-pulse z-0 blur-xl"></div>

        {/* Logo */}
        <div className="relative z-10 flex flex-row gap-4 mb-4">
          <img
            src={logo}
            alt="WordWise Logo"
            className="w-40 h-40 object-cover rounded-full transition-transform duration-300 hover:scale-105"
          />
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight relative z-10">
          The Free Word Counter You’ll Actually Love
        </h2>

        <p className="max-w-2xl text-lg text-gray-600 mb-10 relative z-10">
          Track your words, characters, and writing progress in real-time.
          WordWise is completely free, with no sign-up required to get started.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition duration-300 hover:scale-105"
          >
            Start Using for Free
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white text-center px-4 relative overflow-hidden">
        <h3 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-16 drop-shadow-sm">
          Why WordWise?
        </h3>

        {/* Decorative Blur Background Circles */}
        <div className="absolute top-0 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse z-0" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-200 rounded-full blur-2xl opacity-40 animate-ping z-0" />

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
          {/* Feature Card 1 */}
          <div className="backdrop-blur-lg bg-white/70 border border-white/20 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <div className="text-5xl mb-4 text-blue-600">📝</div>
            <h4 className="text-xl font-semibold mb-2 text-gray-800">
              Real-Time Word Counting
            </h4>
            <p className="text-gray-600">
              Instantly track your word, character, sentence, and paragraph
              count as you type — with no lag or refresh.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="backdrop-blur-lg bg-white/70 border border-white/20 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <div className="text-5xl mb-4 text-blue-600">📊</div>
            <h4 className="text-xl font-semibold mb-2 text-gray-800">
              In-Depth Writing Stats
            </h4>
            <p className="text-gray-600">
              Get readability scores, estimated reading time, keyword density,
              and writing insights in one simple dashboard.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="backdrop-blur-lg bg-white/70 border border-white/20 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <div className="text-5xl mb-4 text-blue-600">🔒</div>
            <h4 className="text-xl font-semibold mb-2 text-gray-800">
              Private & Secure
            </h4>
            <p className="text-gray-600">
              No accounts, no tracking. Everything happens inside your browser.
              100% secure and always free.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white text-center px-4">
        <h3 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-10">
          Learn More About Word Counting
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Resource 1 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">
              What Counts as a Word?
            </h4>
            <p className="text-gray-600 text-sm">
              Understand how WordWise defines and counts words — including
              punctuation, numbers, and symbols.
            </p>
          </div>

          {/* Resource 2 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">
              Line & Paragraph Detection
            </h4>
            <p className="text-gray-600 text-sm">
              Learn how new lines and paragraph breaks are detected while you
              type or paste your content.
            </p>
          </div>

          {/* Resource 3 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">
              Why Character Count Matters
            </h4>
            <p className="text-gray-600 text-sm">
              Character limits are used in social media, SEO, and more. Here’s
              why character count is important.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-16 px-6">
        <div className="w-full mx-auto grid md:grid-cols-2 gap-12 items-start justify-center">
          {/* Left Side: Logo, About, Socials, Newsletter */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="WordWise Logo"
                className="w-10 h-10 object-cover rounded-full"
              />
              <span className="text-2xl font-bold text-gray-800">WordWise</span>
            </div>

            <p className="text-sm text-gray-500 max-w-sm mb-6">
              The simplest tool to count words, lines, and characters in real
              time — lightweight, fast, and completely free.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 text-gray-600 text-2xl mb-6">
              <a
                href="https://github.com/gowthamselvarajgit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/gowtham4026/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/@FlockZen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600"
              >
                <FaYoutube />
              </a>
            </div>

            {/* Newsletter Component */}
            <NewsLetter />
          </div>

          {/* Right Side: Contact Form Component */}
          <GetInTouch />
        </div>

        {/* Footer Bottom Line */}
        <div className="text-center text-sm text-gray-400 mt-12">
          © {new Date().getFullYear()} WordWise. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
