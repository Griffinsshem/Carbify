"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, User, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, store message in localStorage (replace with backend later)
    const storedMessages =
      JSON.parse(localStorage.getItem("messages") || "[]");

    storedMessages.push(formData);
    localStorage.setItem("messages", JSON.stringify(storedMessages));

    setSubmitted(true);

    // reset form
    setFormData({
      fullname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 to-white">
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-r from-[#0F9E99] to-[#0C7F7B] text-white text-center">
        <h1 className="text-5xl font-bold">Get In Touch</h1>
        <p className="mt-2 text-lg text-gray-200">
          We're here to help you with bookings, questions, and support.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-3xl font-semibold text-[#0F9E99] mb-6">
            Contact Information
          </h2>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0F9E99]/10 rounded-xl">
                <Mail className="text-[#0F9E99]" size={28} />
              </div>
              <div>
                <p className="font-semibold text-lg">Email</p>
                <p className="text-gray-700">support@carselite.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0F9E99]/10 rounded-xl">
                <Phone className="text-[#0F9E99]" size={28} />
              </div>
              <div>
                <p className="font-semibold text-lg">Phone</p>
                <p className="text-gray-700">+254 712 345 678</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0F9E99]/10 rounded-xl">
                <MapPin className="text-[#0F9E99]" size={28} />
              </div>
              <div>
                <p className="font-semibold text-lg">Location</p>
                <p className="text-gray-700">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-3xl font-semibold text-[#0F9E99] mb-6">
            Send Us a Message
          </h2>

          {submitted && (
            <p className="mb-4 text-green-600 text-lg font-semibold">
              Message sent successfully!
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div className="flex items-center gap-3 border rounded-xl p-3 border-gray-300">
              <User className="text-gray-600" size={22} />
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.fullname}
                onChange={(e) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
                className="w-full outline-none bg-transparent"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 border rounded-xl p-3 border-gray-300">
              <Mail className="text-gray-600" size={22} />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full outline-none bg-transparent"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 border rounded-xl p-3 border-gray-300">
              <Phone className="text-gray-600" size={22} />
              <input
                type="text"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full outline-none bg-transparent"
              />
            </div>

            {/* Message */}
            <div className="flex items-start gap-3 border rounded-xl p-3 border-gray-300">
              <MessageSquare className="text-gray-600 mt-1" size={22} />
              <textarea
                placeholder="Write your message..."
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full outline-none bg-transparent resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-[#0F9E99] text-white rounded-xl text-lg font-semibold hover:bg-[#0d827e] transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
