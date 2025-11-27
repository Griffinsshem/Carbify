"use client";

import React, { useState } from "react";
import { Search, Filter, Fuel, Gauge, Users, DollarSign } from "lucide-react";

export default function CarsPage() {
  const [search, setSearch] = useState("");

  const cars = [
    {
      name: "Toyota Corolla 2022",
      price: "KES 4,500 / day",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      fuel: "Petrol",
      seats: 5,
      mileage: "18 km/l",
    },
    {
      name: "Mercedes C-Class",
      price: "KES 12,000 / day",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
      fuel: "Petrol",
      seats: 5,
      mileage: "12 km/l",
    },
    {
      name: "Mazda CX-5",
      price: "KES 8,500 / day",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
      fuel: "Diesel",
      seats: 7,
      mileage: "15 km/l",
    },
    {
      name: "BMW X5 2021",
      price: "KES 16,000 / day",
      image: "https://images.unsplash.com/photo-1612083544368-970eb9cf609d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJNVyUyMFg1JTIwMjAyMXxlbnwwfHwwfHx8MA%3D%3D",
      fuel: "Petrol",
      seats: 7,
      mileage: "10 km/l",
    },
    {
      name: "Toyota Land Cruiser V8",
      price: "KES 25,000 / day",
      image: "https://images.pexels.com/photos/18847999/pexels-photo-18847999.jpeg",
      fuel: "Diesel",
      seats: 8,
      mileage: "8 km/l",
    },
    {
      name: "Nissan Note 2019",
      price: "KES 3,200 / day",
      image: "https://images.pexels.com/photos/8060364/pexels-photo-8060364.jpeg",
      fuel: "Hybrid",
      seats: 5,
      mileage: "22 km/l",
    },
    {
      name: "Range Rover Sport",
      price: "KES 20,500 / day",
      image: "https://images.pexels.com/photos/32613937/pexels-photo-32613937.jpeg",
      fuel: "Diesel",
      seats: 7,
      mileage: "9 km/l",
    },
    {
      name: "Subaru Forester XT",
      price: "KES 9,500 / day",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      fuel: "Petrol Turbo",
      seats: 5,
      mileage: "11 km/l",
    },
    {
      name: "Audi A4 2020",
      price: "KES 11,500 / day",
      image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
      fuel: "Petrol",
      seats: 5,
      mileage: "14 km/l",
    },

  ];

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#E7F8F7] text-[#0F3E3B] min-h-screen pb-20">

      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#0F9E99] to-[#0C7F7B] text-[#EFE9E0] py-16 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Fleet</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Choose from our premium collection of vehicles designed for comfort,
            reliability, and convenience.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">

          {/* Search Input */}
          <div className="flex items-center bg-white rounded-full shadow-md px-5 py-3 w-full md:w-2/3">
            <Search className="text-[#0F9E99] w-6 h-6 mr-3" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search cars..."
              className="w-full outline-none text-[#0F3E3B] bg-transparent"
            />
          </div>

          {/* Filter Button */}
          <button className="flex items-center gap-2 bg-[#0F9E99] hover:bg-[#0c7f7b] text-[#EFE9E0] px-6 py-3 rounded-full shadow-md font-medium transition">
            <Filter className="w-5 h-5" /> Filters
          </button>
        </div>
      </section>

      {/* Car Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredCars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#0F9E99]/10 hover:scale-[1.02] transition-transform"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0F4C49]">{car.name}</h3>

              <div className="flex items-center gap-2 mt-2">
                <DollarSign className="w-4 h-4 text-[#0F9E99]" />
                <span className="font-medium text-[#0F3E3B]">
                  {car.price}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-sm text-[#0F3E3B]/70">
                <div className="flex items-center gap-1">
                  <Fuel className="w-4 h-4 text-[#0F9E99]" />
                  {car.fuel}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-[#0F9E99]" />
                  {car.seats} Seats
                </div>
                <div className="flex items-center gap-1">
                  <Gauge className="w-4 h-4 text-[#0F9E99]" />
                  {car.mileage}
                </div>
              </div>

              <button className="mt-6 w-full bg-[#0F9E99] hover:bg-[#0c7f7b] text-[#EFE9E0] py-3 rounded-full font-semibold transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
