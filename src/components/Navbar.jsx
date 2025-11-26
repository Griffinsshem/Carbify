import React from "react";
import CarRentalIcon from "@mui/icons-material/CarRental";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0F9E99] text-[#EFE9E0] backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <CarRentalIcon className="text-3xl text-[#EFE9E0]" />
          <h1 className="text-xl font-semibold tracking-wide">Carbify</h1>
        </div>

        {/* Menu items */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm hover:text-white transition">Home</a>
          <a href="#" className="text-sm hover:text-white transition">Cars</a>
          <a href="#" className="text-sm hover:text-white transition">About</a>
          <a href="#" className="text-sm hover:text-white transition">Contact</a>
        </div>

        {/* Hamburger menu for mobile */}
        <button className="md:hidden text-2xl text-[#EFE9E0] focus:outline-none">
          ☰
        </button>
      </div>
    </nav>
  );
}
