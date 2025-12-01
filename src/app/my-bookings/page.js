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
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-lg text-gray-600">You have no bookings yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 border border-gray-200"
            >
              <Image
                src={booking.image}
                width={400}
                height={250}
                alt="Booked car"
                className="rounded-lg"
              />

              <h2 className="text-xl font-semibold mt-3">{booking.name}</h2>
              <p className="text-gray-700 font-medium">Ksh {booking.price}</p>

              <div className="text-sm text-gray-600 mt-2">
                <p><strong>Pickup:</strong> {booking.pickupDate}</p>
                <p><strong>Return:</strong> {booking.returnDate}</p>
                <p><strong>Location:</strong> {booking.location}</p>
              </div>

              <hr className="my-3" />

              <div className="text-sm text-gray-600">
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
