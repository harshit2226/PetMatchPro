"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const token = localStorage.getItem("token");

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoggedIn(!!token);

  }, []);

  const logout = () => {

    localStorage.removeItem("token");

    window.location.href = "/login";

  };

  if (!mounted) {
    return null;
  }

  return (

    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">

        <Link
          href="/"
          className="text-3xl font-extrabold text-blue-600"
        >
          PetMatchPro
        </Link>

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

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </nav>

  );

}