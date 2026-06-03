"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaPaw,
  FaHeart,
  FaComments,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(() => {
    return typeof window !== "undefined" && !!localStorage.getItem("token");
  });

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 flex items-center justify-center text-white shadow-lg">
              <FaPaw />
            </div>

            <div>
              <h1 className="text-2xl font-black text-slate-900">
                PetMatchPro
              </h1>

              <p className="text-xs text-slate-500 -mt-1">
                Find Your Best Friend
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="font-medium text-slate-700 hover:text-orange-500 transition"
            >
              Home
            </Link>

            <Link
              href="/pets"
              className="font-medium text-slate-700 hover:text-orange-500 transition"
            >
              Pets
            </Link>

            <Link
              href="/favorites"
              className="font-medium text-slate-700 hover:text-orange-500 transition flex items-center gap-2"
            >
              <FaHeart size={14} />
              Favorites
            </Link>

            <Link
              href="/chat"
              className="font-medium text-slate-700 hover:text-orange-500 transition flex items-center gap-2"
            >
              <FaComments size={14} />
              Chat
            </Link>

            {loggedIn && (
              <>
                <Link
                  href="/add-pet"
                  className="font-medium text-slate-700 hover:text-orange-500 transition"
                >
                  Add Pet
                </Link>

                <Link
                  href="/dashboard"
                  className="font-medium text-slate-700 hover:text-orange-500 transition"
                >
                  Dashboard
                </Link>
              </>
            )}
          </div>

          {/* Right Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {!loggedIn ? (
              <>
                <Link
                  href="/login"
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:border-orange-500 hover:text-orange-500 transition"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold shadow-lg hover:scale-105 transition"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={logout}
                className="px-5 py-2.5 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-slate-800"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden py-6 border-t border-slate-200 space-y-4">

            <Link
              href="/"
              className="block text-slate-700 font-medium"
            >
              Home
            </Link>

            <Link
              href="/pets"
              className="block text-slate-700 font-medium"
            >
              Pets
            </Link>

            <Link
              href="/favorites"
              className="block text-slate-700 font-medium"
            >
              Favorites
            </Link>

            <Link
              href="/chat"
              className="block text-slate-700 font-medium"
            >
              Chat
            </Link>

            {loggedIn && (
              <>
                <Link
                  href="/add-pet"
                  className="block text-slate-700 font-medium"
                >
                  Add Pet
                </Link>

                <Link
                  href="/dashboard"
                  className="block text-slate-700 font-medium"
                >
                  Dashboard
                </Link>
              </>
            )}

            {!loggedIn ? (
              <div className="flex flex-col gap-3 pt-4">
                <Link
                  href="/login"
                  className="text-center py-3 border rounded-xl"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="text-center py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <button
                onClick={logout}
                className="w-full mt-4 py-3 rounded-xl bg-red-500 text-white"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}