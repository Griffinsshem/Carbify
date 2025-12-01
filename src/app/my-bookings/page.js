"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(stored);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 to-white px-6 py-16">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0F9E99]">My Bookings</h1>
        <p className="text-gray-900 mt-2 text-lg">
          View all the vehicles you have booked
        </p>
      </div>

      {bookings.length === 0 ? (
        <p className="text-lg text-gray-600 text-center">
          You have no bookings yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl p-6 transition hover:shadow-2xl hover:-translate-y-1"
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

              {/* Booking Details */}
              <div className="mt-4 text-gray-800 space-y-1">
                <p>
                  <span className="font-semibold">Pickup:</span> {booking.pickupDate}
                </p>
                <p>
                  <span className="font-semibold">Return:</span> {booking.returnDate}
                </p>
                <p>
                  <span className="font-semibold">Location:</span> {booking.location}
                </p>
              </div>

              <hr className="my-4" />

              {/* User Details */}
              <div className="text-gray-800 space-y-1">
                <p>
                  <span className="font-semibold">Name:</span> {booking.fullName}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {booking.email}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> {booking.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
