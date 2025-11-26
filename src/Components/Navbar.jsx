import React from "react";
import CarRentalIcon from '@mui/icons-material/CarRental';

export default function Navbar() {
  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex">
          <CarRentalIcon className="text-3xl text-blue-600" />
          <h1 className="text-xl font-semibold tracking-wide">Carbify</h1>
        </div>

        {/* Menu items */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm hover:text-blue-600 transition">Home</a>
          <a href="#" className="text-sm hover:text-blue-600 transition">Cars</a>
          <a href="#" className="text-sm hover:text-blue-600 transition">About</a>
          <a href="#" className="text-sm hover:text-blue-600 transition">Contact</a>
        </div>

        {/* Hamburger menu for mobile */}
        <button className="md:hidden text-2xl text-gray-700 focus:outline-none">
          ☰
        </button>
      </div>
    </nav>
  );
}
