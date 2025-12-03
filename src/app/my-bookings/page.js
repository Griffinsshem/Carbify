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
  Pencil,
  Trash
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

  // Edit modal state
  const [editData, setEditData] = useState(null);

  // Watch Firebase Auth
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const stored = JSON.parse(
          localStorage.getItem(`bookings_${currentUser.uid}`) || "[]"
        );

        // Attach missing booking.id if not present
        const withIds = stored.map((b, i) => ({
          id: b.id || i + 1,
          ...b,
        }));

        setBookings(withIds);
        setFilteredBookings(withIds);
      }
    });

    return () => unsub();
  }, []);

  // Filters
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

  // Distinct locations for dropdown
  const locations = [...new Set(bookings.map((b) => b.location))];

  // -------------------------
  // DELETE BOOKING
  // -------------------------
  const handleDelete = (id) => {
    const newList = bookings.filter((b) => b.id !== id);

    setBookings(newList);
    setFilteredBookings(newList);

    localStorage.setItem(
      `bookings_${auth.currentUser.uid}`,
      JSON.stringify(newList)
    );
  };

  // -------------------------
  // EDIT BOOKING - SAVE
  // -------------------------
  const handleSaveEdit = () => {
    const updated = bookings.map((b) =>
      b.id === editData.id ? editData : b
    );

    setBookings(updated);
    setFilteredBookings(updated);

    localStorage.setItem(
      `bookings_${auth.currentUser.uid}`,
      JSON.stringify(updated)
    );

    setEditData(null);
  };

  // If user not logged in
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 to-white px-6 py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0F9E99]">My Bookings</h1>
        <p className="text-gray-900 font-bold mt-2 text-lg">
          Manage and edit your booked vehicles
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
          {filteredBookings.map((booking) => (
            <div
              key={booking.id}
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

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-[#0F9E99]" />
                  <h2 className="text-2xl font-semibold text-[#0F9E99]">
                    {booking.name}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-700 font-medium text-lg mt-1">
                <DollarSign className="w-5 h-5 text-gray-700" />
                <span>Total: ${booking.price}</span>
              </div>

              <div className="mt-4 text-gray-800 space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <p><strong>Pickup:</strong> {booking.pickupDate}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <p><strong>Return:</strong> {booking.returnDate}</p>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <p><strong>Location:</strong> {booking.location}</p>
                </div>
              </div>

              <hr className="my-4" />

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-4">
                {/* EDIT BUTTON */}
                <button
                  onClick={() => setEditData(booking)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                >
                  <Pencil className="w-4 h-4" />
                  Edit
                </button>

                {/* DELETE BUTTON */}
                <button
                  onClick={() => handleDelete(booking.id)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                >
                  <Trash className="w-4 h-4" />
                  Delete
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* ------------------- */}
      {/* EDIT MODAL */}
      {/* ------------------- */}
      {editData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-2xl border border-gray-200 animate-fadeIn">

            {/* Modal Title */}
            <h2 className="text-2xl font-bold text-[#0F9E99] mb-4">
              Edit Booking
            </h2>

            {/* Input Fields */}
            <div className="space-y-4">

              <div>
                <label className="text-sm font-medium text-gray-600">Full Name</label>
                <input
                  className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0F9E99] outline-none"
                  value={editData.fullName}
                  onChange={(e) =>
                    setEditData({ ...editData, fullName: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <input
                  className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0F9E99] outline-none"
                  value={editData.email}
                  onChange={(e) =>
                    setEditData({ ...editData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Pickup Date</label>
                <input
                  type="date"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0F9E99] outline-none"
                  value={editData.pickupDate}
                  onChange={(e) =>
                    setEditData({ ...editData, pickupDate: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Return Date</label>
                <input
                  type="date"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0F9E99] outline-none"
                  value={editData.returnDate}
                  onChange={(e) =>
                    setEditData({ ...editData, returnDate: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Location</label>
                <select
                  className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0F9E99] outline-none"
                  value={editData.location}
                  onChange={(e) =>
                    setEditData({ ...editData, location: e.target.value })
                  }
                >
                  {locations.map((loc, i) => (
                    <option key={i} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setEditData(null)}
                className="flex-1 py-2 bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveEdit}
                className="flex-1 py-2 bg-[#0F9E99] text-white rounded-xl font-semibold hover:bg-[#0d827f] transition"
              >
                Save Changes
              </button>
            </div>

          </div>
        </div>
      )}


    </div>
  );
}
