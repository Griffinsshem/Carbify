"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { auth } from "@/firebase/config";

// Lucide Icons
import {
  Car,
  DollarSign,
  Calendar,
  MapPin,
  User,
  Mail,
  Phone,
  LogIn,
} from "lucide-react";

export default function MyBookingsPage() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  // Filters
  const [search, setSearch] = useState("");
  const [pickupFilter, setPickupFilter] = useState("");
  const [returnFilter, setReturnFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  // Watch Firebase Auth
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // Load bookings for this specific user
        const stored = JSON.parse(
          localStorage.getItem(`bookings_${currentUser.uid}`) || "[]"
        );
        setBookings(stored);
        setFilteredBookings(stored);
      }
    });

    return () => unsub();
  }, []);

  // Apply filters
  useEffect(() => {
    let results = bookings;

    if (search.trim() !== "") {
      results = results.filter((b) =>
        b.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (pickupFilter !== "") {
      results = results.filter((b) => b.pickupDate >= pickupFilter);
    }

    if (returnFilter !== "") {
      results = results.filter((b) => b.returnDate <= returnFilter);
    }

    if (locationFilter !== "") {
      results = results.filter((b) =>
        b.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    setFilteredBookings(results);
  }, [search, pickupFilter, returnFilter, locationFilter, bookings]);

  // Locations for dropdown
  const locations = [...new Set(bookings.map((b) => b.location))];

  // If user not logged in:
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-neutral-100 to-white">
        <LogIn className="w-20 h-20 text-[#0F9E99] mb-5" />
        <h2 className="text-3xl font-bold text-gray-900">Please Log In</h2>
        <p className="text-gray-600 mt-2">
          You must be logged in to view your bookings.
        </p>

        <a
          href="/login"
          className="mt-6 px-8 py-3 bg-[#0F9E99] text-white rounded-xl shadow-lg hover:bg-[#0d827f] transition text-lg font-semibold"
        >
          Go to Login
        </a>
      </div>
    );
  }

  if (!auth.currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Please <a href="/login" className="text-[#0F9E99] font-bold">login</a> to view your bookings.</p>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 to-white px-6 py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0F9E99]">My Bookings</h1>
        <p className="text-gray-900 font-bold mt-2 text-lg">
          Manage and filter your booked vehicles
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-gray-200 mb-10">
        <h2 className="text-xl font-semibold text-[#0F9E99] mb-4">
          Filter Bookings
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search car..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl outline-none"
          />

          <input
            type="date"
            value={pickupFilter}
            onChange={(e) => setPickupFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl outline-none"
          />

          <input
            type="date"
            value={returnFilter}
            onChange={(e) => setReturnFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl outline-none"
          />

          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl bg-white outline-none"
          >
            <option value="">All Locations</option>
            {locations.map((loc, i) => (
              <option key={i} value={loc}>
                {loc}
              </option>
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

              <div className="flex items-center gap-2 mt-4">
                <Car className="w-5 h-5 text-[#0F9E99]" />
                <h2 className="text-2xl font-semibold text-[#0F9E99]">
                  {booking.name}
                </h2>
              </div>

              <div className="flex items-center gap-2 text-gray-700 font-medium text-lg mt-1">
                <DollarSign className="w-5 h-5 text-gray-700" />
                <span>Total: ${booking.price}</span>
              </div>

              <div className="mt-4 text-gray-800 space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <p>
                    <strong>Pickup:</strong> {booking.pickupDate}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <p>
                    <strong>Return:</strong> {booking.returnDate}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <p>
                    <strong>Location:</strong> {booking.location}
                  </p>
                </div>
              </div>

              <hr className="my-4" />

              <div className="text-gray-800 space-y-2">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-600" />
                  <p>
                    <strong>Name:</strong> {booking.fullName}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <p>
                    <strong>Email:</strong> {booking.email}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <p>
                    <strong>Phone:</strong> {booking.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
