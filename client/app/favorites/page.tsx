"use client";

import { useEffect, useState } from "react";
import API from "../../lib/api";

interface Favorite {
  _id: string;

  petId: {
    petName: string;
    breed: string;
    age: number;
    image: string;
  };
}

export default function Favorites() {
  const [favorites, setFavorites] =
    useState<Favorite[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const res = await API.get("/favorites");
        setFavorites(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-slate-50">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 blur-[120px] opacity-40" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 blur-[120px] opacity-40" />

        <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">
          <span className="inline-flex px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-semibold text-sm">
            ❤️ Your Favorite Pets
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-6 text-slate-900">
            Saved
            <span className="block bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              Companions
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 text-lg mt-6">
            Keep track of pets you love and revisit them
            anytime before making the adoption decision.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 text-center">
          <h2 className="text-5xl font-black text-pink-500">
            {favorites.length}
          </h2>

          <p className="text-slate-600 font-medium mt-2">
            Favorite Pets
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        {loading ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-slate-600">
              Loading Favorites...
            </h2>
          </div>
        ) : favorites.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 shadow-lg text-center">
            <div className="text-7xl mb-4">💔</div>

            <h2 className="text-3xl font-bold text-slate-900">
              No Favorites Yet
            </h2>

            <p className="text-slate-500 mt-3">
              Start exploring pets and save your
              favorites here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

            {favorites.map((favorite) => (
              <div
                key={favorite._id}
                className="
                  bg-white
                  rounded-[32px]
                  overflow-hidden
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                "
              >
                <div className="relative">
                  <img
                    src={favorite.petId.image}
                    alt={favorite.petId.petName}
                    className="w-full h-72 object-cover"
                  />

                  <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                    ❤️
                  </div>
                </div>

                <div className="p-6">

                  <h2 className="text-3xl font-black text-slate-900">
                    {favorite.petId.petName}
                  </h2>

                  <p className="text-slate-500 mt-2">
                    {favorite.petId.breed}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
                      {favorite.petId.age} Years
                    </span>

                    <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-semibold">
                      Favorite
                    </span>
                  </div>

                  <button
                    className="
                      w-full
                      mt-6
                      py-4
                      rounded-2xl
                      bg-gradient-to-r
                      from-orange-500
                      to-pink-500
                      text-white
                      font-bold
                      hover:opacity-90
                      transition
                    "
                  >
                    View Details
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}
      </section>
    </main>
  );
}