"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-transparent text-white px-6 py-2 flex justify-between items-center">
      {/* Logo */}
      <div className="flex-shrink-0">
        <h1 className="font-bold lg:text-2xl md:text-2xl sm:text-4xl">
          What The Duck
        </h1>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex flex-grow justify-center space-x-6 text-2xl">
        <a href="#home" className="hover:text-black text-lg font-bold">
          Home
        </a>
        <a href="#about" className="hover:text-black text-lg font-bold">
          About
        </a>
        <a href="#services" className="hover:text-black text-lg font-bold">
          Services
        </a>
        <a href="#contact" className="hover:text-black text-lg font-bold">
          Contact
        </a>
      </div>

      {/* CTA Button */}
      <button className="hidden md:block bg-gray-300 hover:bg-yellow-200 text-black text-xl px-6 py-2 rounded-lg">
        Button
      </button>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        <button className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 bg-yellow-500 text-white p-6">
          {/* Close Icon */}
          <div className="flex justify-end mb-4">
            <button
              className="text-2xl font-bold text-black"
              onClick={toggleMenu}
            >
              X
            </button>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="#home"
              className="hover:text-black text-lg font-bold"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-black text-lg font-bold"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-black text-lg font-bold"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-black text-lg font-bold"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <button className="bg-white hover:bg-yellow-300 text-black px-6 py-2 rounded-lg mt-4 shadow-xl">
              Button
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
