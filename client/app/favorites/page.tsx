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

  const fetchFavorites = async () => {

    try {

      const res =
        await API.get("/favorites");

      setFavorites(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const res = await API.get("/favorites");
        setFavorites(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadFavorites();
  }, []);

  return (

    <main className="min-h-screen bg-[#f5f7fb] px-6 py-16">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-extrabold text-pink-600 text-center">
          Favorite Pets ❤️
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

          {favorites.map((favorite) => (

            <div
              key={favorite._id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >

              <img
                src={favorite.petId.image}
                alt={favorite.petId.petName}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <h2 className="text-3xl font-bold">
                  {favorite.petId.petName}
                </h2>

                <p className="text-gray-500 mt-2">
                  {favorite.petId.breed}
                </p>

                <p className="text-blue-600 font-semibold mt-1">
                  {favorite.petId.age} years old
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>

  );
}