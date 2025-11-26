"use client";

import React from "react";
import CarRentalIcon from "@mui/icons-material/CarRental";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="w-full bg-[#0F9E99] text-[#EFE9E0] backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <CarRentalIcon className="text-2xl" />
          <h1 className="font-bold text-xl">Carbify</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li className="hover:text-gray-200 transition">Home</li>
          <li className="hover:text-gray-200 transition">About</li>
          <li className="hover:text-gray-200 transition">Properties</li>
          <li className="hover:text-gray-200 transition">Contact</li>
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {/* Hamburger icon transitions into X */}
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${isOpen ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-60 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
          }`}
      >
        <ul className="flex flex-col bg-[#0F9E99] px-6 pb-4 gap-4 text-lg">
          <li className="hover:text-gray-200 transition">Home</li>
          <li className="hover:text-gray-200 transition">About</li>
          <li className="hover:text-gray-200 transition">Properties</li>
          <li className="hover:text-gray-200 transition">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
