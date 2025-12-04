"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Mail, Phone, MapPin, CreditCard, User } from "lucide-react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { auth } from "../../firebase/config";

export default function BookingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Logged-in user
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  // If user is not logged in → block booking
  const handleRequireLogin = () => {
    router.push("/login");
  };

  // Car details from URL
  const carName = searchParams.get("name");
  const carPrice = parseInt(searchParams.get("price"));
  const carImage = searchParams.get("image");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pickupDate: "",
    returnDate: "",
    location: "",
    payment: "",
  });

  // Total days & pricing
  const calculateDays = () => {
    if (!formData.pickupDate || !formData.returnDate) return 0;
    const start = new Date(formData.pickupDate);
    const end = new Date(formData.returnDate);
    const diff = (end - start) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const days = calculateDays();
  const total = days * (carPrice || 0);

  // CONFIRM BOOKING BUTTON
  const handleConfirmBooking = () => {
    if (!user) return handleRequireLogin();

    const newBooking = {
      name: carName,
      price: carPrice,
      image: carImage,
      pickupDate: formData.pickupDate,
      returnDate: formData.returnDate,
      location: formData.location,
      payment: formData.payment,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      userId: user.uid,
    };

    // Each user has their own bookings
    const storageKey = `bookings_${user.uid}`;

    const existing = JSON.parse(localStorage.getItem(storageKey) || "[]");
    existing.push(newBooking);

    localStorage.setItem(storageKey, JSON.stringify(existing));

    router.push("/my-bookings");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 to-white">
      {/* Hero */}
      <div className="py-16 text-center bg-gradient-to-r from-[#0F9E99] to-[#0C7F7B] text-white">
        <h1 className="text-4xl font-bold">Book Your Ride</h1>
        <p className="text-gray-300 mt-2">Secure your vehicle with ease</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 py-16">
        {/* Booking Form */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-xl border border-gray-900 space-y-6">
          <h2 className="text-2xl font-semibold">Booking Details</h2>

          <div className="space-y-4">
            {/* Full Name */}
            <div className="flex gap-3 items-center border rounded-xl p-3 border-gray-900">
              <User size={20} />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>

            {/* Email */}
            <div className="flex gap-3 items-center border rounded-xl p-3 border-gray-900">
              <Mail size={20} />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Phone */}
            <div className="flex gap-3 items-center border rounded-xl p-3 border-gray-900">
              <Phone size={20} />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            {/* Pickup Date */}
            <div className="flex gap-3 items-center border rounded-xl p-3 border-gray-900">
              <Calendar size={20} />
              <input
                type="date"
                className="w-full outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, pickupDate: e.target.value })
                }
              />
            </div>

            {/* Return Date */}
            <div className="flex gap-3 items-center border rounded-xl p-3 border-gray-900">
              <Calendar size={20} />
              <input
                type="date"
                className="w-full outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, returnDate: e.target.value })
                }
              />
            </div>

            {/* Location */}
            <div className="flex gap-3 items-center border rounded-xl p-3 border-gray-900">
              <MapPin size={20} />
              <input
                type="text"
                placeholder="Pickup Location"
                className="w-full outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
            </div>

            {/* Payment Method */}
            <div className="flex gap-3 items-center border rounded-xl p-3 border-gray-900">
              <CreditCard size={20} />
              <select
                className="w-full outline-none bg-transparent"
                onChange={(e) =>
                  setFormData({ ...formData, payment: e.target.value })
                }
              >
                <option value="">Select Payment Method</option>
                <option value="mpesa">M-Pesa</option>
                <option value="card">Credit/Debit Card</option>
                <option value="cash">Cash</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleConfirmBooking}
            className="w-full py-4 mt-4 bg-black text-white rounded-xl text-lg font-semibold hover:bg-gray-900 transition"
          >
            Confirm Booking
          </button>
        </div>

        {/* Car Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-900 space-y-4">
          <h2 className="text-xl font-semibold">Car Summary</h2>

          {carImage && (
            <Image
              src={carImage}
              width={500}
              height={300}
              alt={carName}
              className="rounded-xl object-cover w-full h-40"
            />
          )}

          <p className="text-lg font-semibold">{carName}</p>
          <p className="text-gray-600">$ {carPrice?.toLocaleString()} / day</p>

          <hr className="my-4" />

          <div className="flex justify-between text-gray-700">
            <span>Days:</span>
            <span>{days}</span>
          </div>

          <div className="flex justify-between text-black text-lg font-bold">
            <span>Total:</span>
            <span>$ {total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
