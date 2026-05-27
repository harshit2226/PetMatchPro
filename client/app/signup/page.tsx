"use client";

import { useState } from "react";
import axios from "axios";
import API from "../../lib/api";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await API.post("/auth/signup", form);

      console.log(res.data);

      alert(res.data.message || "Signup Successful");

      setForm({
        name: "",
        email: "",
        password: "",
      });

    } catch (error) {

      console.log("Signup Error:", error);

      if (axios.isAxiosError(error)) {

        console.log("Response Data:", error.response?.data);

        alert(
          error.response?.data?.message ||
          "Signup failed"
        );

      } else {

        alert("Something went wrong");

      }
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f5f7fb] px-6">

      <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-xl">

        <h1 className="text-4xl font-extrabold text-center text-blue-600">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Join PetMatchPro today
        </p>

        <div className="mt-10 space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition"
          >
            Signup
          </button>

        </div>

      </div>

    </main>
  );
}