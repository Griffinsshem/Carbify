"use client";

import { useState } from "react";
import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LogIn, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/";
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-100 to-white px-4 py-16">
      <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-10 w-full max-w-md animate-fadeIn">

        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <LogIn className="w-16 h-16 text-[#0F9E99] mb-3" />
          <h1 className="text-3xl font-bold text-[#0F9E99]">Welcome Back</h1>
          <p className="text-gray-600 mt-1 text-center">
            Login to access your bookings and manage your rides.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-[#0F9E99] transition"
              placeholder="example@gmail.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-[#0F9E99] transition"
                placeholder="Enter your password"
                type={showPass ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-[#0F9E99] transition"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm bg-red-100 p-2 rounded-lg">
              {error}
            </p>
          )}

          {/* Login Button */}
          <button className="w-full py-3 bg-[#0F9E99] text-white font-semibold rounded-xl shadow-lg hover:bg-[#0d827f] transition text-lg">
            Login
          </button>

          {/* Register Link */}
          <p className="text-center mt-4 text-gray-700">
            Don't have an account?{" "}
            <a href="/register" className="text-[#0F9E99] font-semibold hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
