"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  Fuel,
  Gauge,
  Users,
  DollarSign,
  X,
  ArrowRight,
} from "lucide-react";

export default function CarsPage() {
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedSeats, setSelectedSeats] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);

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
      image:
        "https://images.unsplash.com/photo-1612083544368-970eb9cf609d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJNVyUyMFg1JTIwMjAyMXxlbnwwfHwwfHx8MA%3D%3D",
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
      image:
        "https://images.pexels.com/photos/32613937/pexels-photo-32613937.jpeg",
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

  // FILTERING
  const filteredCars = cars
    .filter((car) =>
      car.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((car) =>
      selectedFuel ? car.fuel === selectedFuel : true
    )
    .filter((car) =>
      selectedSeats ? car.seats === Number(selectedSeats) : true
    );

  return (
    <div className="bg-[#E7F8F7] text-[#0F3E3B] min-h-screen pb-20">

      {/* Header */}
      <section className="bg-gradient-to-r from-[#0F9E99] to-[#0C7F7B] text-[#EFE9E0] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold">Our Fleet</h1>
          <p className="mt-3 opacity-90 text-lg max-w-xl">
            Premium cars designed for comfort, reliability, and style.
          </p>
        </div>
      </section>

      {/* Search + Filter */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="flex flex-col md:flex-row gap-4 md:justify-between">

          {/* Search */}
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
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-[#0F9E99] hover:bg-[#0c7f7b] text-[#EFE9E0] px-6 py-3 rounded-full shadow-md transition"
          >
            <Filter className="w-5 h-5" /> Filters
          </button>
        </div>

        {/* Filter Dropdown */}
        {showFilters && (
          <div className="mt-4 p-6 bg-white rounded-2xl shadow-lg border border-[#0F9E99]/20 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Fuel Filter */}
              <div>
                <label className="font-semibold">Fuel Type</label>
                <select
                  className="mt-2 w-full bg-[#E7F8F7] border border-[#0F9E99]/30 rounded-xl px-4 py-3"
                  value={selectedFuel}
                  onChange={(e) => setSelectedFuel(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Petrol Turbo">Petrol Turbo</option>
                </select>
              </div>

              {/* Seats */}
              <div>
                <label className="font-semibold">Seats</label>
                <select
                  className="mt-2 w-full bg-[#E7F8F7] border border-[#0F9E99]/30 rounded-xl px-4 py-3"
                  value={selectedSeats}
                  onChange={(e) => setSelectedSeats(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="5">5 Seats</option>
                  <option value="7">7 Seats</option>
                  <option value="8">8 Seats</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Car Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredCars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#0F9E99]/10 hover:scale-[1.02] transition-transform"
          >
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />

            <div className="p-6">
              <h3 className="text-xl font-bold">{car.name}</h3>

              <div className="flex items-center gap-2 mt-2">
                <DollarSign className="w-4 h-4 text-[#0F9E99]" />
                <span className="font-medium">{car.price}</span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-sm text-[#0F3E3B]/70">
                <div className="flex items-center gap-1">
                  <Fuel className="w-4 h-4 text-[#0F9E99]" /> {car.fuel}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-[#0F9E99]" /> {car.seats} Seats
                </div>
                <div className="flex items-center gap-1">
                  <Gauge className="w-4 h-4 text-[#0F9E99]" /> {car.mileage}
                </div>
              </div>

              <button
                onClick={() => setSelectedCar(car)}
                className="mt-6 w-full bg-[#0F9E99] hover:bg-[#0c7f7b] text-[#EFE9E0] py-3 rounded-full font-semibold transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Booking Modal */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full relative">

            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-4 right-4 bg-[#E7F8F7] p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <img src={selectedCar.image} className="rounded-xl h-48 w-full object-cover" />

            <h2 className="mt-4 text-2xl font-bold">{selectedCar.name}</h2>
            <p className="mt-2 text-lg font-medium">{selectedCar.price}</p>

            <button className="mt-6 w-full bg-[#0F9E99] hover:bg-[#0c7f7b] text-[#EFE9E0] py-3 rounded-full font-semibold flex items-center justify-center gap-2">
              Proceed to Booking <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
