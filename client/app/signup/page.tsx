"use client";

import { useState } from "react";
import axios from "axios";
import API from "../../lib/api";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await API.post("/auth/signup", form);
      alert(res.data.message);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.message || "Something went wrong");
      } else {
        alert("Something went wrong");
      }
    }
  };

  return (
    <div>
      <input
        name="name"
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        name="password"
        onChange={handleChange}
        placeholder="Password"
        type="password"
      />

      <button onClick={handleSubmit}>
        Signup
      </button>
    </div>
  );
}