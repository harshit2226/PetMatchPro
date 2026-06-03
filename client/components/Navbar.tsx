"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaPaw } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

useEffect(() => {
  const token = localStorage.getItem("token");
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setLoggedIn(!!token); 
}, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 flex items-center justify-center text-white text-xl shadow-lg">
              <FaPaw />
            </div>

            <div>
              <h1 className="text-2xl font-black text-slate-900">
                PetMatchPro
              </h1>

              <p className="text-xs text-slate-500">
                Find Your Perfect Companion
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
              className="font-medium text-slate-700 hover:text-orange-500 transition"
            >
              Favorites
            </Link>

            <Link
              href="/chat"
              className="font-medium text-slate-700 hover:text-orange-500 transition"
            >
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
                  className="px-5 py-2.5 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition shadow-md"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="px-5 py-2.5 rounded-xl border border-orange-500 text-orange-500 font-semibold hover:bg-orange-50 transition"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={logout}
                className="px-5 py-2.5 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition shadow-md"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-slate-700"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-6 border-t border-slate-200 mt-2 pt-4">

            <div className="flex flex-col gap-4">

              <Link href="/">Home</Link>

              <Link href="/pets">Pets</Link>

              <Link href="/favorites">Favorites</Link>

              <Link href="/chat">Chat</Link>

              {loggedIn && (
                <>
                  <Link href="/add-pet">Add Pet</Link>

                  <Link href="/dashboard">
                    Dashboard
                  </Link>
                </>
              )}

              {!loggedIn ? (
                <>
                  <Link
                    href="/login"
                    className="bg-orange-500 text-white px-4 py-3 rounded-xl text-center"
                  >
                    Login
                  </Link>

                  <Link
                    href="/signup"
                    className="border border-orange-500 text-orange-500 px-4 py-3 rounded-xl text-center"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-3 rounded-xl"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}