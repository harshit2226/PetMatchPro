"use client";

import { useEffect, useMemo, useState } from "react";
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
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredPets = useMemo(() => {
    let updatedPets = [...pets];

    if (search.trim()) {
      updatedPets = updatedPets.filter((pet) =>
        pet.petName
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      updatedPets = updatedPets.filter((pet) =>
        pet.breed
          .toLowerCase()
          .includes(selectedCategory.toLowerCase())
      );
    }

    return updatedPets;
  }, [pets, search, selectedCategory]);

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
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-slate-50">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 blur-[120px] opacity-40" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 blur-[120px] opacity-40" />

        <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">
          <span className="inline-flex px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm">
            🐾 PetMatchPro Marketplace
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-6 text-slate-900">
            Find Your
            <span className="block bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Perfect Companion
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 text-lg mt-6">
            Browse verified pets from trusted shelters and
            loving owners across India.
          </p>
        </div>
      </section>

      {/* STATS */}
      {/* STATS */}
<section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    <div className="bg-white rounded-3xl border border-orange-100 p-6 text-center shadow-lg hover:shadow-xl transition-all">
      <h3 className="text-4xl font-black text-orange-500">
        12K+
      </h3>
      <p className="text-slate-800 font-semibold mt-2">
        Adoptions
      </p>
    </div>

    <div className="bg-white rounded-3xl border border-blue-100 p-6 text-center shadow-lg hover:shadow-xl transition-all">
      <h3 className="text-4xl font-black text-blue-500">
        850+
      </h3>
      <p className="text-slate-800 font-semibold mt-2">
        Shelters
      </p>
    </div>

    <div className="bg-white rounded-3xl border border-green-100 p-6 text-center shadow-lg hover:shadow-xl transition-all">
      <h3 className="text-4xl font-black text-green-500">
        25K+
      </h3>
      <p className="text-slate-800 font-semibold mt-2">
        Users
      </p>
    </div>

    <div className="bg-white rounded-3xl border border-purple-100 p-6 text-center shadow-lg hover:shadow-xl transition-all">
      <h3 className="text-4xl font-black text-purple-500">
        4.9★
      </h3>
      <p className="text-slate-800 font-semibold mt-2">
        Rating
      </p>
    </div>

  </div>
</section>
      {/* FILTERS */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="bg-white rounded-[32px] shadow-xl p-8">
          <div className="grid lg:grid-cols-2 gap-6">
            <SearchBar
              value={search}
              onChange={setSearch}
            />

            <CategoryFilter
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Available Pets
            </h2>

            <p className="text-slate-500 mt-2">
              {filteredPets.length} pets found
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      {loading ? (
        <div className="mt-24">
          <Loading />
        </div>
      ) : filteredPets.length === 0 ? (
        <div className="mt-24">
          <EmptyState />
        </div>
      ) : (
        <section className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {filteredPets.map((pet) => (
              <PetCard
                key={pet._id}
                pet={pet}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}