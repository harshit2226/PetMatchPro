"use client";

import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f7fb] p-10">
      <h1 className="text-5xl font-extrabold text-blue-600">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold">Total Pets</h2>
          <p className="text-5xl font-extrabold text-blue-600 mt-5">
            12
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold">Adoptions</h2>
          <p className="text-5xl font-extrabold text-green-600 mt-5">
            7
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold">Users</h2>
          <p className="text-5xl font-extrabold text-pink-600 mt-5">
            24
          </p>
        </div>
      </div>
    </main>
  );
}