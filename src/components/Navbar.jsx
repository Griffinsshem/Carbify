"use client";

import React from "react";
import { Car } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Cars", href: "/cars" },
    { name: "My Bookings", href: "/my-bookings" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-[#0F9E99] text-[#EFE9E0] backdrop-blur-sm shadow-lg shadow-black/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Car className="w-7 h-7 text-[#EFE9E0]" strokeWidth={2.4} />
          <span className="text-2xl font-extrabold tracking-wide">Carbify</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative group text-lg font-semibold transition-all duration-200"
            >
              {/* Text */}
              <span
                className={`${pathname === item.href
                  ? "text-white"
                  : "text-[#EFE9E0] group-hover:text-white"
                  }`}
              >
                {item.name}
              </span>

              {/* Active Underline Animation */}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[3px] rounded-full bg-white transition-all duration-300
                  ${pathname === item.href ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}
                `}
              />
            </a>
          ))}

          {/* Auth Buttons */}
          <button className="px-5 py-2 rounded-full bg-[#EFE9E0] text-[#0F9E99] font-semibold hover:bg-white transition-all duration-300 shadow-md">
            Login
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-[#EFE9E0] focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden bg-[#0F9E99] px-4 pb-4 flex flex-col gap-3 overflow-hidden transition-all duration-300 
          ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`
              text-base font-semibold transition-all duration-200 
              ${pathname === item.href ? "text-white" : "text-[#EFE9E0] hover:text-white"}
            `}
          >
            {item.name}
          </a>
        ))}

        {/* Mobile Login Button */}
        <button className="mt-2 w-full py-2 rounded-lg bg-[#EFE9E0] text-[#0F9E99] font-semibold hover:bg-white transition duration-300 shadow">
          Login
        </button>
      </div>
    </nav>
  );
}
