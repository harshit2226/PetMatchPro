"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">

      {/* HERO SECTION */}
      <section className="px-6 md:px-20 py-24 flex flex-col md:flex-row items-center justify-between gap-16">

        <div className="max-w-2xl">

          <p className="text-blue-600 font-bold uppercase tracking-wider">
            Find Your Perfect Companion
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mt-4">
            Adopt Pets <br />
            With Love ❤️
          </h1>

          <p className="text-gray-600 text-xl mt-8 leading-relaxed">
            PetMatchPro helps you discover loving pets waiting
            for a forever home. Browse pets, adopt instantly,
            and connect with caring owners.
          </p>

          <div className="flex gap-5 mt-10">

            <Link
              href="/pets"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg transition"
            >
              Explore Pets
            </Link>

            <Link
              href="/signup"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-2xl text-lg font-bold transition"
            >
              Get Started
            </Link>

          </div>

        </div>

        <div className="w-full md:w-[500px]">
          <img
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
            alt="Pet"
            className="rounded-3xl shadow-2xl object-cover h-[550px] w-full"
          />
        </div>

      </section>

      {/* FEATURES */}

      <section className="px-6 md:px-20 py-20">

        <h2 className="text-4xl font-extrabold text-center text-gray-900">
          Why Choose PetMatchPro?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600">
              Trusted Adoption
            </h3>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Verified pet listings and secure adoption process.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-pink-600">
              Easy To Use
            </h3>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Modern dashboard with smooth browsing experience.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-green-600">
              Fast Matching
            </h3>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Discover pets according to your preferences instantly.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}