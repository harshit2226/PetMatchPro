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
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];

      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("petName", form.petName);
      formData.append("breed", form.breed);
      formData.append("age", form.age);
      formData.append(
        "description",
        form.description
      );

      if (image) {
        formData.append("image", image);
      }

      const res = await API.post(
        "/pets",
        formData
      );

      alert(res.data.message);

      setForm({
        petName: "",
        breed: "",
        age: "",
        description: "",
      });

      setImage(null);
      setPreview("");
    } catch (error) {
      console.log(error);
      alert("Failed to add pet");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-slate-50">

      {/* HERO */}
      <section className="text-center py-16 px-6">
        <span className="inline-flex px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold">
          🐾 PetMatchPro
        </span>

        <h1 className="text-5xl md:text-6xl font-black mt-6 text-slate-900">
          Add a New
          <span className="block bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            Pet Listing
          </span>
        </h1>

        <p className="text-slate-500 mt-4 max-w-xl mx-auto">
          Help pets find loving homes by creating
          a beautiful adoption listing.
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-[36px] shadow-2xl p-8 md:p-12">

          {/* IMAGE PREVIEW */}
          <div className="mb-8">

            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-80 object-cover rounded-3xl"
              />
            ) : (
              <div className="h-80 border-2 border-dashed border-orange-200 rounded-3xl flex flex-col items-center justify-center text-slate-400">
                <div className="text-6xl mb-4">
                  📸
                </div>

                <p>
                  Upload a pet image
                </p>
              </div>
            )}

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-semibold text-slate-700">
                Pet Name
              </label>

              <input
                type="text"
                name="petName"
                value={form.petName}
                onChange={handleChange}
                placeholder="Bella"
                className="
                  w-full mt-2 px-5 py-4
                  rounded-2xl
                  border border-slate-200
                  bg-slate-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-orange-500
                "
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700">
                Breed
              </label>

              <input
                type="text"
                name="breed"
                value={form.breed}
                onChange={handleChange}
                placeholder="Golden Retriever"
                className="
                  w-full mt-2 px-5 py-4
                  rounded-2xl
                  border border-slate-200
                  bg-slate-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-orange-500
                "
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700">
                Age
              </label>

              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="2"
                className="
                  w-full mt-2 px-5 py-4
                  rounded-2xl
                  border border-slate-200
                  bg-slate-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-orange-500
                "
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700">
                Upload Image
              </label>

              <input
                type="file"
                onChange={handleImage}
                className="
                  w-full mt-2 px-5 py-4
                  rounded-2xl
                  border border-slate-200
                  bg-slate-50
                "
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="font-semibold text-slate-700">
              Description
            </label>

            <textarea
              name="description"
              rows={5}
              value={form.description}
              onChange={handleChange}
              placeholder="Tell adopters about this pet..."
              className="
                w-full mt-2 px-5 py-4
                rounded-2xl
                border border-slate-200
                bg-slate-50
                resize-none
                focus:outline-none
                focus:ring-2
                focus:ring-orange-500
              "
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="
              w-full mt-8 py-4
              rounded-2xl
              font-bold text-white text-lg
              bg-gradient-to-r
              from-orange-500
              to-amber-400
              hover:opacity-90
              transition
              shadow-lg
            "
          >
            {loading
              ? "Adding Pet..."
              : "Add Pet 🐾"}
          </button>

        </div>
      </section>
    </main>
  );
}