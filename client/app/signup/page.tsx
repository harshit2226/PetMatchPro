"use client";

import { useState } from "react";
import axios from "axios";
import API from "../../lib/api";
import Link from "next/link";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const res = await API.post("/auth/signup", form);

      alert(res.data.message || "Signup Successful");

      setForm({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(
          error.response?.data?.message ||
            "Signup Failed"
        );
      } else {
        alert("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-[40px] overflow-hidden shadow-2xl">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-orange-500 to-amber-400 text-white p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

          <h1 className="text-5xl font-bold leading-tight relative z-10">
            Find Your
            <br />
            Perfect Pet 🐾
          </h1>

          <p className="mt-6 text-lg text-orange-50 relative z-10">
            Join thousands of pet lovers and connect with
            verified shelters and pet owners across India.
          </p>

          <div className="mt-12 space-y-4 relative z-10">
            <div className="flex items-center gap-3">
              <span>✔</span>
              <p>Verified Pet Listings</p>
            </div>

            <div className="flex items-center gap-3">
              <span>✔</span>
              <p>Safe Adoption Process</p>
            </div>

            <div className="flex items-center gap-3">
              <span>✔</span>
              <p>Thousands of Happy Families</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 md:p-14">
          <div className="max-w-md mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-slate-900">
                Create Account
              </h2>

              <p className="text-slate-500 mt-3">
                Welcome to PetMatchPro
              </p>
            </div>

            <div className="mt-10 space-y-5">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full mt-2 px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full mt-2 px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full mt-2 px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-400 text-white py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

              <p className="text-center text-slate-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-orange-500 font-semibold"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}