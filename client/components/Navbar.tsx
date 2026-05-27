"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {

  const [loggedIn, setLoggedIn] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem("token");
  });

  const logout = () => {

    localStorage.removeItem("token");

    window.location.href = "/login";

  };

  return (

    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">

        <Link
          href="/"
          className="text-3xl font-extrabold text-blue-600"
        >
          PetMatchPro
        </Link>

        <div className="flex items-center gap-6 text-gray-700 font-medium">

          <Link href="/">Home</Link>

          <Link href="/pets">Pets</Link>

          {loggedIn && (
            <>
              <Link href="/add-pet">Add Pet</Link>

              <Link href="/dashboard">Dashboard</Link>
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

      </div>

    </nav>

  );
}