"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  // Filters
  const [search, setSearch] = useState("");
  const [pickupFilter, setPickupFilter] = useState("");
  const [returnFilter, setReturnFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(stored);
    setFilteredBookings(stored);
  }, []);

  // Apply filters
  useEffect(() => {
    let results = bookings;

    // Search by car name
    if (search.trim() !== "") {
      results = results.filter((b) =>
        b.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by pickup date
    if (pickupFilter !== "") {
      results = results.filter((b) => b.pickupDate >= pickupFilter);
    }

    // Filter by return date
    if (returnFilter !== "") {
      results = results.filter((b) => b.returnDate <= returnFilter);
    }

    // Filter by location
    if (locationFilter !== "") {
      results = results.filter((b) =>
        b.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    setFilteredBookings(results);
  }, [search, pickupFilter, returnFilter, locationFilter, bookings]);

  // Extract unique locations
  const locations = [...new Set(bookings.map((b) => b.location))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 to-white px-6 py-16">

      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0F9E99]">My Bookings</h1>
        <p className="text-gray-600 mt-2 text-lg">
          Manage and filter your booked vehicles
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-gray-200 mb-10">
        <h2 className="text-xl font-semibold text-[#0F9E99] mb-4">
          Filter Bookings
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          {/* Search Car Name */}
          <input
            type="text"
            placeholder="Search car..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl outline-none"
          />

          {/* Pickup Date */}
          <input
            type="date"
            value={pickupFilter}
            onChange={(e) => setPickupFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl outline-none"
          />

          {/* Return Date */}
          <input
            type="date"
            value={returnFilter}
            onChange={(e) => setReturnFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl outline-none"
          />

          {/* Location Selector */}
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl bg-white outline-none"
          >
            <option value="">All Locations</option>
            {locations.map((loc, i) => (
              <option key={i} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Booking Cards */}
      {filteredBookings.length === 0 ? (
        <p className="text-lg text-gray-600 text-center">
          No bookings match your filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBookings.map((booking, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl border border-[#0F9E99] shadow-xl rounded-2xl p-6 transition hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="w-full h-48 rounded-xl overflow-hidden">
                <Image
                  src={booking.image}
                  width={400}
                  height={250}
                  alt="Booked car"
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="text-2xl font-semibold text-[#0F9E99] mt-4">
                {booking.name}
              </h2>
              <p className="text-gray-700 font-medium text-lg">
                Total: ${booking.price}
              </p>

              <div className="mt-4 text-gray-800 space-y-1">
                <p><strong>Pickup:</strong> {booking.pickupDate}</p>
                <p><strong>Return:</strong> {booking.returnDate}</p>
                <p><strong>Location:</strong> {booking.location}</p>
              </div>

              <hr className="my-4" />

              <div className="text-gray-800 space-y-1">
                <p><strong>Name:</strong> {booking.fullName}</p>
                <p><strong>Email:</strong> {booking.email}</p>
                <p><strong>Phone:</strong> {booking.phone}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
