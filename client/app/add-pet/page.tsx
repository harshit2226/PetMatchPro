"use client";

import { useState } from "react";
import API from "../../lib/api";

export default function AddPet() {
  const [form, setForm] = useState({
    petName: "",
    breed: "",
    age: "",
    description: "",
  });

  const [image, setImage] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append("petName", form.petName);
      formData.append("breed", form.breed);
      formData.append("age", form.age);
      formData.append("description", form.description);

      if (image) {
        formData.append("image", image);
      }

      const res = await API.post("/pets", formData);

      alert(res.data.message);

      setForm({
        petName: "",
        breed: "",
        age: "",
        description: "",
      });

    } catch (error) {
      console.log(error);
      alert("Failed to add pet");
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-6 py-16">

      <div className="bg-white w-full max-w-2xl p-10 rounded-3xl shadow-xl">

        <h1 className="text-4xl font-extrabold text-blue-600 text-center">
          Add New Pet
        </h1>

        <div className="space-y-5 mt-10">

          <input
            type="text"
            name="petName"
            placeholder="Pet Name"
            value={form.petName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600"
          />

          <input
            type="text"
            name="breed"
            placeholder="Breed"
            value={form.breed}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600"
          />

          <textarea
            name="description"
            placeholder="Description"
            rows={5}
            value={form.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600"
          />

          <input
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                setImage(e.target.files[0]);
              }
            }}
            className="w-full border border-gray-300 rounded-xl px-5 py-4"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg"
          >
            Add Pet
          </button>

        </div>

      </div>

    </main>
  );
}