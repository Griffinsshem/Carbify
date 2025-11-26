import React from "react";
import CarRentalIcon from "@mui/icons-material/CarRental";

export default function Navbar() {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="w-full bg-[#0F9E99] text-[#EFE9E0] backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <CarRentalIcon className="text-5xl text-[#EFE9E0]" />
          <h1 className="text-xl font-bold tracking-wide">Carbify</h1>
        </div>

        {/* Menu items */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-lg hover:text-white font-bold transition">Home</a>
          <a href="#" className="text-lg hover:text-white font-bold transition">Cars</a>
          <a href="#" className="text-lg hover:text-white font-bold transition">About</a>
          <a href="#" className="text-lg hover:text-white font-bold transition">Contact</a>
        </div>

        {/* Hamburger menu for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-[#EFE9E0] focus:outline-none">
          ☰
        </button>
      </div>
    </nav>
  );
}
