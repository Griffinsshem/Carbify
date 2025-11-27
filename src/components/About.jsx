"use client";

import React from "react";
import { Car, ShieldCheck, Clock, ThumbsUp, Users } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#E7F8F7] text-[#0F3E3B]">

      {/* About Header */}
      <section className="bg-gradient-to-r from-[#0F9E99] to-[#0C7F7B] text-[#EFE9E0] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About Carbify
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            A modern car rental service built to deliver convenience, reliability,
            and a premium travel experience.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#0F4C49]">
              Our Story
            </h2>
            <p className="text-[20px] leading-relaxed text-[#0F3E3B]/80">
              Carbify was created with a simple mission—making car rentals effortless,
              affordable, and enjoyable. We believe that mobility should be accessible,
              secure, and tailored to modern lifestyles.
              <br /><br />
              Today, Carbify serves customers across Kenya, offering a smooth and
              reliable system for short-term and long-term rentals designed for
              comfort and convenience.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="Luxury car"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0F4C49]">
            Why Choose Carbify?
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">

            {/* Feature */}
            <div className="bg-[#E7F8F7] p-6 rounded-xl shadow-sm border border-[#0F9E99]/10 text-center">
              <Car className="w-10 h-10 mx-auto text-[#0F9E99]" />
              <h3 className="font-semibold mt-3 text-lg">Wide Car Selection</h3>
              <p className="text-base text-[#0F3E3B]/70 mt-2">
                Choose from economy, luxury, SUVs, and more.
              </p>
            </div>

            <div className="bg-[#E7F8F7] p-6 rounded-xl shadow-sm border border-[#0F9E99]/10 text-center">
              <ShieldCheck className="w-10 h-10 mx-auto text-[#0F9E99]" />
              <h3 className="font-semibold mt-3 text-lg">Trusted & Secure</h3>
              <p className="text-base text-[#0F3E3B]/70 mt-2">
                Your safety and data are always protected.
              </p>
            </div>

            <div className="bg-[#E7F8F7] p-6 rounded-xl shadow-sm border border-[#0F9E99]/10 text-center">
              <Clock className="w-10 h-10 mx-auto text-[#0F9E99]" />
              <h3 className="font-semibold mt-3 text-lg">24/7 Availability</h3>
              <p className="text-base text-[#0F3E3B]/70 mt-2">
                Rent and support anytime, anywhere.
              </p>
            </div>

            <div className="bg-[#E7F8F7] p-6 rounded-xl shadow-sm border border-[#0F9E99]/10 text-center">
              <ThumbsUp className="w-10 h-10 mx-auto text-[#0F9E99]" />
              <h3 className="font-semibold mt-3 text-lg">Affordable Prices</h3>
              <p className="text-base text-[#0F3E3B]/70 mt-2">
                Enjoy premium service at fair prices.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-[#0F9E99] text-[#EFE9E0] p-10 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-base opacity-90 leading-relaxed">
              To redefine mobility in Africa by providing top-tier car rental solutions
              that prioritize user experience, safety, and convenience.
            </p>
          </div>

          <div className="bg-[#E7F8F7] text-[#0F3E3B] p-10 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-3 text-[#0F4C49]">Our Vision</h3>
            <p className="text-base opacity-80 leading-relaxed">
              To become Africa’s most trusted and innovative car rental platform
              through technology-driven solutions and exceptional service.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#0F9E99] to-[#0C7F7B] text-[#EFE9E0] py-14 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Ride with Carbify?</h2>
          <p className="opacity-90 mb-6">Book your car today and experience seamless travel.</p>
          <a
            href="/cars"
            className="px-6 py-3 bg-white text-[#0F9E99] font-semibold rounded-full shadow-md hover:bg-opacity-90 transition"
          >
            Browse Cars
          </a>
        </div>
      </section>

    </div>
  );
}
