"use client";

import { useState } from "react";

export default function ProfileDropdown() {

  const [open, setOpen] =
    useState(false);

  return (

    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white px-5 py-2 rounded-xl"
      >
        Profile
      </button>

      {open && (

        <div className="absolute right-0 mt-3 bg-white shadow-xl rounded-2xl p-4 w-52">

          <p className="cursor-pointer hover:text-blue-600">
            My Profile
          </p>

          <p className="cursor-pointer hover:text-blue-600 mt-3">
            Settings
          </p>

          <p className="cursor-pointer hover:text-red-500 mt-3">
            Logout
          </p>

        </div>

      )}

    </div>

  );
}