"use client";
import React from "react";
import CarRentalIcon from "@mui/icons-material/CarRental";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Cars", href: "/cars" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-[#0F9E99] text-[#EFE9E0] backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <CarRentalIcon className="text-5xl text-[#EFE9E0]" />
          <h1 className="text-xl font-bold tracking-wide">Carbify</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-lg font-bold transition 
                ${pathname === item.href ? "text-white" : "text-[#EFE9E0] hover:text-[#808080]"}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-[#EFE9E0] focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0F9E99] px-4 pb-4 flex flex-col gap-3">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-base font-semibold transition 
                ${pathname === item.href ? "text-white" : "text-[#EFE9E0] hover:text-white"}`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
