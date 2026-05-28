"use client";

import { useEffect, useState, useMemo } from "react";
import API from "../../lib/api";

import PetCard from "../../components/PetCard";
import SearchBar from "../../components/SearchBar";
import CategoryFilter from "../../components/CategoryFilter";
import Loading from "../../components/Loading";
import EmptyState from "../../components/EmptyState";

interface Pet {
  _id: string;
  petName: string;
  breed: string;
  age: number;
  image: string;
  description: string;
}

export default function Pets() {

  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [search, setSearch] = useState<string>("");

  const [selectedCategory, setSelectedCategory] =
    useState<string>("All");

  // FILTER PETS
  const filteredPets = useMemo(() => {

    let updatedPets = [...pets];

    // SEARCH FILTER
    if (search.trim() !== "") {

      updatedPets = updatedPets.filter((pet) =>
        pet.petName
          .toLowerCase()
          .includes(search.toLowerCase())
      );

    }

    // CATEGORY FILTER
    if (selectedCategory !== "All") {

      updatedPets = updatedPets.filter((pet) =>
        pet.breed
          .toLowerCase()
          .includes(selectedCategory.toLowerCase())
      );

    }

    return updatedPets;

  }, [pets, search, selectedCategory]);

  // FETCH PETS
  useEffect(() => {

    const fetchPets = async () => {

      try {

        const res = await API.get("/pets");

        setPets(res.data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchPets();

  }, []);

  return (

    <main className="min-h-screen bg-[#f5f7fb] px-6 py-16">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600">
            Available Pets
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Find your perfect furry friend today 🐶
          </p>

        </div>

        {/* SEARCH BAR */}

        <div className="mt-12">

          <SearchBar
            value={search}
            onChange={setSearch}
          />

        </div>

        {/* CATEGORY FILTER */}

        <div className="mt-8">

          <CategoryFilter
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />

        </div>

        {/* LOADING */}

        {loading ? (

          <div className="mt-20">
            <Loading />
          </div>

        ) : filteredPets.length === 0 ? (

          <div className="mt-20">
            <EmptyState />
          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            {filteredPets.map((pet) => (

              <PetCard
                key={pet._id}
                pet={pet}
              />

            ))}

          </div>

        )}

      </div>

    </main>

  );
}