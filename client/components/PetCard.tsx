"use client";

import API from "../lib/api";

import { FaHeart } from "react-icons/fa";

interface Props {
  pet: {
    _id: string;
    petName: string;
    breed: string;
    age: number;
    image: string;
    description: string;
  };
}

export default function PetCard({
  pet,
}: Props) {

  // ADD FAVORITE
  const addFavorite = async () => {

    try {

      await API.post("/favorites", {

        // TEMP USER ID
        // Later we will use real logged in user id
        userId: "123456789",

        petId: pet._id,

      });

      alert("Added To Favorites ❤️");

    } catch (error) {

      console.log(error);

      alert("Failed To Add Favorite");

    }

  };

  return (

    <div
      className="
        relative
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        transition
        duration-300
      "
    >

      {/* FAVORITE BUTTON */}

      <button
        onClick={addFavorite}
        className="
          absolute
          top-4
          right-4
          bg-white
          p-3
          rounded-full
          shadow-lg
          hover:scale-110
          transition
        "
      >
        <FaHeart className="text-red-500 text-xl" />
      </button>

      {/* PET IMAGE */}

      <img
        src={pet.image}
        alt={pet.petName}
        className="w-full h-72 object-cover"
      />

      {/* CONTENT */}

      <div className="p-6">

        <h2 className="text-3xl font-bold text-gray-800">
          {pet.petName}
        </h2>

        <p className="text-gray-500 mt-2">
          {pet.breed}
        </p>

        <p className="text-blue-600 font-semibold mt-1">
          {pet.age} years old
        </p>

        <p className="text-gray-600 mt-4 line-clamp-3">
          {pet.description}
        </p>

        {/* BUTTONS */}

        <div className="flex flex-col gap-3 mt-6">

          <button
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-3
              rounded-2xl
              font-bold
              transition
            "
          >
            Adopt Now
          </button>

          <button
            onClick={addFavorite}
            className="
              w-full
              border
              border-pink-500
              text-pink-500
              hover:bg-pink-50
              py-3
              rounded-2xl
              font-bold
              transition
            "
          >
            ❤️ Favorite
          </button>

        </div>

      </div>

    </div>

  );
}