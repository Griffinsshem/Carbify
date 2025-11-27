"use client";

import Image from "next/image";
import { ArrowRight, Car } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#0F9E99] to-[#0c7b76] text-[#EFE9E0] overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 relative z-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="animate-fadeInUp space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Rent Your Dream Car<br />
            With <span className="text-white">Carbify</span>
          </h1>

          <p className="text-lg max-w-md opacity-90">
            Fast, reliable, and affordable car rental service designed for
            seamless travel experiences. Choose the right ride for every journey.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="/cars"
              className="
                px-6 py-3 rounded-full bg-white text-[#0F9E99] font-semibold 
                flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-200
                hover:scale-105
              "
            >
              Book Now <ArrowRight size={20} />
            </a>

            <a
              href="/about"
              className="
                px-6 py-3 rounded-full border border-white/60 text-white font-semibold 
                hover:bg-white/10 transition-all duration-200
              "
            >
              Learn More
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative animate-fadeIn">
          <div className="absolute -top-10 -left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
          <Image
            src="/car.jpg"
            width={650}
            height={400}
            alt="Luxury Car"
            className="
              relative z-20 drop-shadow-2xl 
              transform hover:scale-105 transition-all duration-500
            "
          />
        </div>

      </div>

      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-white rounded-t-[30px]" />
    </section>
  );
}
