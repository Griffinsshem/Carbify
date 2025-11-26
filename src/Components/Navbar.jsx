import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-semibold">Carbify</h1>

        {/* Menu items */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm">Home</a>
          <a href="#" className="text-sm">Cars</a>
          <a href="#" className="text-sm">About</a>
          <a href="#" className="text-sm">Contact</a>
        </div>

        {/* Hamburger menu for mobile */}
        <button className="md:hidden">
          ☰
        </button>
      </div>
    </nav>
  );
}
