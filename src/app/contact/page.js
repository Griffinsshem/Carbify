"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage temporarily (replace with real backend later)
    const storedMessages =
      JSON.parse(localStorage.getItem("messages") || "[]");
    storedMessages.push(formData);
    localStorage.setItem("messages", JSON.stringify(storedMessages));

    // Reset form
    setFormData({
      fullname: "",
      email: "",
      phone: "",
      message: "",
    });

    // Show modal
    setShowModal(true);

    // Auto-close modal
    setTimeout(() => setShowModal(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 to-white">
      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center animate-fadeIn">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full animate-scaleUp border border-gray-200">
            <CheckCircle className="text-[#0F9E99] w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#0F9E99]">
              Message Sent!
            </h2>
            <p className="text-gray-600 mt-2">
              We’ve received your message and will get back to you shortly.
            </p>
          </div>
        </div>
      )}

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
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-900">
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
                <p className="text-gray-900 font-base">support@carselite.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0F9E99]/10 rounded-xl">
                <Phone className="text-[#0F9E99]" size={28} />
              </div>
              <div>
                <p className="font-semibold text-lg">Phone</p>
                <p className="text-gray-900 font-base">+254 712 345 678</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0F9E99]/10 rounded-xl">
                <MapPin className="text-[#0F9E99]" size={28} />
              </div>
              <div>
                <p className="font-semibold text-lg">Location</p>
                <p className="text-gray-900 font-base">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-900">
          <h2 className="text-3xl font-semibold text-[#0F9E99] mb-6">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="flex items-center gap-3 border rounded-xl p-3 border-gray-900">
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
            <div className="flex items-center gap-3 border rounded-xl p-3 border-gray-900">
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
            <div className="flex items-center gap-3 border rounded-xl p-3 border-gray-900">
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
            <div className="flex items-start gap-3 border rounded-xl p-3 border-gray-900">
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

            {/* Submit Btn */}
            <button
              type="submit"
              className="w-full py-4 bg-[#0F9E99] text-white rounded-xl text-lg font-semibold hover:bg-[#0d827e] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleUp {
          animation: scaleUp 0.25s ease-out;
        }
      `}</style>
    </div>
  );
}
