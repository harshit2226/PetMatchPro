"use client";

import { useEffect } from "react";

import StatsCard from "../../components/StatsCard";

export default function Dashboard() {

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {

      window.location.href = "/login";

    }

  }, []);

  return (

    <main className="min-h-screen bg-[#f5f7fb] p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-extrabold text-blue-600">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

          <StatsCard
            title="Total Pets"
            value="12"
            color="text-blue-600"
          />

          <StatsCard
            title="Adoptions"
            value="7"
            color="text-green-600"
          />

          <StatsCard
            title="Users"
            value="24"
            color="text-pink-600"
          />

        </div>

      </div>

    </main>

  );
}