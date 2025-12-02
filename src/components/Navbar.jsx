"use client";

import React, { useEffect, useState } from "react";
import { Car } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // 🔥 Listen for login/logout changes
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkAuth(); // initial load

    // Listen for auth changes from any page
    window.addEventListener("storage", checkAuth);

    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  // 🔥 Log out user
  const handleLogout = () => {
    localStorage.removeItem("token");

    // Notify navbar and all tabs
    window.dispatchEvent(new Event("storage"));

    setIsLoggedIn(false);
    router.push("/login");
  };

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
        <Link href="/" className="flex items-center gap-3">
          <Car className="w-7 h-7 text-[#EFE9E0]" strokeWidth={2.4} />
          <span className="text-2xl font-extrabold tracking-wide">
            Carbify
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative group text-lg font-semibold transition-all duration-200"
            >
              <span
                className={
                  pathname === item.href
                    ? "text-white"
                    : "text-[#EFE9E0] group-hover:text-white"
                }
              >
                {item.name}
              </span>

              {/* underline animation */}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[3px] rounded-full bg-white transition-all duration-300
                  ${pathname === item.href
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }
                `}
              />
            </a>
          ))}

          {/* AUTH BUTTON */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-full bg-red-200 text-red-700 font-semibold hover:bg-red-300 transition-all duration-300 shadow-md"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className="px-5 py-2 rounded-full bg-[#EFE9E0] text-[#0F9E99] font-semibold hover:bg-white transition-all duration-300 shadow-md">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-[#EFE9E0] focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-[#0F9E99] px-4 pb-4 flex flex-col gap-3 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`text-base font-semibold transition-all duration-200 ${pathname === item.href
                ? "text-white"
                : "text-[#EFE9E0] hover:text-white"
              }`}
          >
            {item.name}
          </a>
        ))}

        {/* MOBILE AUTH BUTTON */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="mt-2 w-full py-2 rounded-lg bg-red-200 text-red-700 font-semibold hover:bg-red-300 transition duration-300 shadow"
          >
            Logout
          </button>
        ) : (
          <Link href="/login">
            <button className="mt-2 w-full py-2 rounded-lg bg-[#EFE9E0] text-[#0F9E99] font-semibold hover:bg-white transition duration-300 shadow">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
