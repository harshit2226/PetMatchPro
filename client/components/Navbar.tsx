"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {

  const [loggedIn, setLoggedIn] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem("token");
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {

    localStorage.removeItem("token");

    window.location.href = "/login";

  };

  return (

    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">

        {/* LOGO */}

        <Link
          href="/"
          className="text-3xl font-extrabold text-blue-600"
        >
          PetMatchPro
        </Link>

        {/* DESKTOP MENU */}

        <div className="hidden md:flex items-center gap-6">

          <Link href="/">Home</Link>

          <Link href="/pets">Pets</Link>

          {loggedIn && (
            <>
              <Link href="/add-pet">
                Add Pet
              </Link>

              <Link href="/dashboard">
                Dashboard
              </Link>
            </>
          )}

          {!loggedIn ? (
            <>
              <Link
                href="/login"
                className="bg-blue-600 text-white px-5 py-2 rounded-xl"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="border border-blue-600 text-blue-600 px-5 py-2 rounded-xl"
              >
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="bg-red-500 text-white px-5 py-2 rounded-xl"
            >
              Logout
            </button>
          )}

        </div>

        {/* MOBILE BUTTON */}

        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="md:hidden text-2xl"
        >
          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </button>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6 flex flex-col gap-5">

          <Link href="/">
            Home
          </Link>

          <Link href="/pets">
            Pets
          </Link>

          {loggedIn && (
            <>
              <Link href="/add-pet">
                Add Pet
              </Link>

              <Link href="/dashboard">
                Dashboard
              </Link>
            </>
          )}

          {!loggedIn ? (
            <>
              <Link
                href="/login"
                className="bg-blue-600 text-white px-5 py-3 rounded-xl text-center"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="border border-blue-600 text-blue-600 px-5 py-3 rounded-xl text-center"
              >
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="bg-red-500 text-white px-5 py-3 rounded-xl"
            >
              Logout
            </button>
          )}

        </div>

      )}

    </nav>

  );
}