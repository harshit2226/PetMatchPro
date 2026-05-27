"use client";

import { useState } from "react";
import API from "../../lib/api";

export default function Login() {
  const [form, setForm] = useState({
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
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      window.location.href = "/";
    } catch (error) {
      console.log(error);
      alert("Invalid Credentials");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-center text-blue-600">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Login to continue to PetMatchPro
        </p>

        <div className="space-y-5 mt-10">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold"
          >
            Login
          </button>
        </div>
      </div>
    </main>
  );
}