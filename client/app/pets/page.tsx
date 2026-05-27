"use client";

import { useEffect, useState } from "react";
import API from "../../lib/api";

interface Pet {
  _id: string;
  petName: string;
  breed: string;
  age: number;
  description: string;
  image: string;
}

export default function Pets() {
  const [pets, setPets] = useState<Pet[]>([]);

  const fetchPets = async () => {
    try {
      const res = await API.get("/pets");

      setPets(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch pets");
    }
  };

  useEffect(() => {
  const loadPets = async () => {
    await fetchPets();
  };

  loadPets();
}, []);

  return (
  <main className="min-h-screen bg-[#f8fafc] px-6 md:px-16 py-16">

    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

      <div>
        <h1 className="text-5xl font-extrabold text-gray-900">
          Available Pets
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Find your perfect furry companion
        </p>
      </div>

      <input
        type="text"
        placeholder="Search pets..."
        className="border border-gray-300 px-5 py-4 rounded-2xl w-full md:w-[350px] outline-none focus:border-blue-600"
      />

    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

      {pets.map((pet) => (
        <div
          key={pet._id}
          className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
        >

          <img
            src={pet.image}
            alt={pet.petName}
            className="w-full h-72 object-cover"
          />

          <div className="p-7">

            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-800">
                {pet.petName}
              </h2>

              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold">
                {pet.age} yrs
              </span>
            </div>

            <p className="text-gray-600 mt-3 font-medium">
              Breed: {pet.breed}
            </p>

            <p className="text-gray-500 mt-4 leading-relaxed">
              {pet.description}
            </p>

            <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition">
              Adopt Now
            </button>

          </div>

        </div>
      ))}

    </div>

  </main>
);
}
