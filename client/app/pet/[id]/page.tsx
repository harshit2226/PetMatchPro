"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function PetDetails() {
  const params = useParams();

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-slate-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <Link
          href="/pets"
          className="inline-flex items-center gap-2 text-orange-500 font-semibold mb-8 hover:text-orange-600"
        >
          ← Back to Pets
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Image Section */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-xl">
            <img
              src={`https://picsum.photos/800/700?random=${params.id}`}
              alt="Pet"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center">

            <span className="inline-flex w-fit px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold">
              Available for Adoption
            </span>

            <h1 className="text-5xl font-black text-slate-900 mt-6">
              Bella
            </h1>

            <p className="text-xl text-slate-500 mt-3">
              Golden Retriever
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-white p-5 rounded-2xl shadow-md">
                <p className="text-slate-500 text-sm">
                  Age
                </p>

                <h3 className="text-2xl font-bold">
                  2 Years
                </h3>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md">
                <p className="text-slate-500 text-sm">
                  Location
                </p>

                <h3 className="text-2xl font-bold">
                  Delhi
                </h3>
              </div>

            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">
                About Bella
              </h2>

              <p className="text-slate-600 leading-8">
                Bella is a friendly and energetic Golden
                Retriever looking for a loving family.
                She enjoys playing outdoors, going on walks,
                and spending time with people. Vaccinated,
                healthy, and ready for adoption.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-400 text-white rounded-2xl font-bold shadow-lg hover:scale-105 transition">
                Adopt Now 🐾
              </button>

              <button className="px-8 py-4 border border-slate-300 rounded-2xl font-semibold hover:bg-slate-100 transition">
                Contact Owner
              </button>

            </div>

            <div className="mt-10 bg-orange-50 border border-orange-100 rounded-3xl p-6">
              <h3 className="font-bold text-orange-600">
                Pet ID
              </h3>

              <p className="text-slate-700 mt-2">
                {params.id}
              </p>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}