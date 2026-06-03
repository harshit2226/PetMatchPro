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
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-slate-50">

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="bg-gradient-to-r from-orange-500 to-amber-400 rounded-[40px] p-10 text-white shadow-2xl">

          <p className="uppercase tracking-[4px] text-sm font-semibold">
            Dashboard
          </p>

          <h1 className="text-5xl font-black mt-3">
            Welcome Back 👋
          </h1>

          <p className="mt-4 text-orange-100 max-w-2xl">
            Manage pets, monitor adoption activity and
            track platform growth from one place.
          </p>

        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-white rounded-[30px] p-7 shadow-lg hover:shadow-2xl transition">
            <div className="text-5xl">🐶</div>

            <p className="text-slate-500 mt-4">
              Total Pets
            </p>

            <h2 className="text-4xl font-black text-orange-500 mt-2">
              12
            </h2>
          </div>

          <div className="bg-white rounded-[30px] p-7 shadow-lg hover:shadow-2xl transition">
            <div className="text-5xl">🏠</div>

            <p className="text-slate-500 mt-4">
              Adoptions
            </p>

            <h2 className="text-4xl font-black text-green-500 mt-2">
              7
            </h2>
          </div>

          <div className="bg-white rounded-[30px] p-7 shadow-lg hover:shadow-2xl transition">
            <div className="text-5xl">👥</div>

            <p className="text-slate-500 mt-4">
              Users
            </p>

            <h2 className="text-4xl font-black text-blue-500 mt-2">
              24
            </h2>
          </div>

          <div className="bg-white rounded-[30px] p-7 shadow-lg hover:shadow-2xl transition">
            <div className="text-5xl">⭐</div>

            <p className="text-slate-500 mt-4">
              Satisfaction
            </p>

            <h2 className="text-4xl font-black text-yellow-500 mt-2">
              98%
            </h2>
          </div>

        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="bg-white rounded-[32px] p-8 shadow-lg">

          <h2 className="text-2xl font-bold text-slate-900">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-3 gap-5 mt-6">

            <button className="bg-orange-500 text-white py-4 rounded-2xl font-semibold hover:bg-orange-600">
              Add New Pet
            </button>

            <button className="bg-slate-900 text-white py-4 rounded-2xl font-semibold">
              View Adoptions
            </button>

            <button className="bg-emerald-500 text-white py-4 rounded-2xl font-semibold">
              Manage Users
            </button>

          </div>

        </div>
      </section>

      {/* ANALYTICS */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-8">

          {/* ACTIVITY */}
          <div className="bg-white rounded-[32px] p-8 shadow-lg">

            <h2 className="text-2xl font-bold">
              Recent Activity
            </h2>

            <div className="space-y-6 mt-8">

              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-orange-500" />

                <div>
                  <p className="font-semibold">
                    New pet added
                  </p>

                  <p className="text-sm text-slate-500">
                    5 minutes ago
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-green-500" />

                <div>
                  <p className="font-semibold">
                    Adoption approved
                  </p>

                  <p className="text-sm text-slate-500">
                    1 hour ago
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-blue-500" />

                <div>
                  <p className="font-semibold">
                    New user joined
                  </p>

                  <p className="text-sm text-slate-500">
                    Today
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* PROGRESS */}
          <div className="bg-white rounded-[32px] p-8 shadow-lg">

            <h2 className="text-2xl font-bold">
              Adoption Analytics
            </h2>

            <div className="space-y-7 mt-8">

              <div>
                <div className="flex justify-between mb-2">
                  <span>Adoption Rate</span>
                  <span>78%</span>
                </div>

                <div className="h-3 bg-slate-100 rounded-full">
                  <div className="h-3 w-[78%] bg-orange-500 rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>User Growth</span>
                  <span>65%</span>
                </div>

                <div className="h-3 bg-slate-100 rounded-full">
                  <div className="h-3 w-[65%] bg-blue-500 rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Pet Listings</span>
                  <span>92%</span>
                </div>

                <div className="h-3 bg-slate-100 rounded-full">
                  <div className="h-3 w-[92%] bg-green-500 rounded-full" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}