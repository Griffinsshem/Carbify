"use client";

import React from "react";
import { Car, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F9E99] text-[#EFE9E0]">

      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Car className="w-7 h-7 text-[#EFE9E0]" strokeWidth={2.4} />
            <h1 className="text-xl font-bold tracking-wide">Carbify</h1>
          </div>

          <p className="text-sm leading-relaxed opacity-90">
            Your trusted car rental platform—reliable, affordable, and designed
            for smooth travel experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1.5 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/cars" className="hover:text-white transition">Cars</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-base font-semibold mb-3">Support</h3>
          <ul className="space-y-1.5 text-sm">
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Rental Policies</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact + Social Icons */}
        <div>
          <h3 className="text-base font-semibold mb-3">Contact Us</h3>

          <div className="space-y-2.5 text-sm mb-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>support@carbify.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>+254 712 345 678</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="opacity-80 hover:opacity-100 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#EFE9E0]/20"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs opacity-80">
        <p>© {new Date().getFullYear()} Carbify. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed with ❤️ in Kenya.</p>
      </div>
    </footer>
  );
}
