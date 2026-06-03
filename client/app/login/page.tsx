"use client";

import { useState } from "react";
import API from "../../lib/api";
import { toast } from "react-hot-toast";
import Link from "next/link";


export default function Login() {
  const [form, setForm] = useState({
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

      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      toast.success("Login Successful");

      window.location.href = "/";
    } catch (error) {
      console.log(error);
      toast.error("Invalid Credentials");
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

          <div className="relative z-10">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
              🐾 PetMatchPro
            </span>

            <h1 className="text-5xl font-black mt-8 leading-tight">
              Welcome
              <br />
              Back
            </h1>

            <p className="mt-6 text-lg text-orange-50">
              Continue your journey to find the perfect
              companion and connect with trusted pet owners.
            </p>

            <div className="mt-12 space-y-5">
              <div className="flex items-center gap-3">
                <span>✔</span>
                <p>Verified Pet Listings</p>
              </div>

              <div className="flex items-center gap-3">
                <span>✔</span>
                <p>Safe & Secure Platform</p>
              </div>

              <div className="flex items-center gap-3">
                <span>✔</span>
                <p>Thousands of Happy Adoptions</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 md:p-14 flex items-center">
          <div className="w-full max-w-md mx-auto">

            <div className="text-center">
              <h2 className="text-4xl font-black text-slate-900">
                Login
              </h2>

              <p className="text-slate-500 mt-3">
                Sign in to your PetMatchPro account
              </p>
            </div>

            <div className="mt-10 space-y-5">

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="
                    w-full
                    mt-2
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    text-slate-900
                    placeholder:text-slate-400
                    focus:outline-none
                    focus:ring-2
                    focus:ring-orange-500
                  "
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  className="
                    w-full
                    mt-2
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    text-slate-900
                    placeholder:text-slate-400
                    focus:outline-none
                    focus:ring-2
                    focus:ring-orange-500
                  "
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="
                  w-full
                  py-4
                  rounded-2xl
                  font-bold
                  text-white
                  bg-gradient-to-r
                  from-orange-500
                  to-amber-400
                  hover:opacity-90
                  transition
                  shadow-lg
                "
              >
                {loading
                  ? "Signing In..."
                  : "Login"}
              </button>

              <p className="text-center text-slate-500">
                {"Don't have an account? "}
                <Link
                  href="/signup"
                  className="text-orange-500 font-semibold hover:text-orange-600"
                >
                  Create Account
                </Link>
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}