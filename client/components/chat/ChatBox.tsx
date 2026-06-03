"use client";

import { useState } from "react";

export default function ChatBox() {
  const [message, setMessage] = useState("");

  return (
    <div className="bg-white rounded-[32px] shadow-xl border border-slate-100 overflow-hidden">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl">
            🐾
          </div>

          <div>
            <h2 className="text-white font-bold text-lg">
              PetMatch Chat
            </h2>

            <p className="text-orange-100 text-sm">
              Online Now
            </p>
          </div>
        </div>

        <div className="text-white text-xl">
          💬
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="h-[450px] overflow-y-auto bg-slate-50 p-6 space-y-4">

        {/* RECEIVED MESSAGE */}
        <div className="flex justify-start">
          <div className="max-w-[75%] bg-white px-5 py-3 rounded-2xl shadow">
            <p className="text-slate-800">
              Hi! Interested in adopting Bella?
            </p>

            <span className="text-xs text-slate-400 mt-2 block">
              10:30 AM
            </span>
          </div>
        </div>

        {/* SENT MESSAGE */}
        <div className="flex justify-end">
          <div className="max-w-[75%] bg-orange-500 px-5 py-3 rounded-2xl shadow">
            <p className="text-white">
              Yes, I would like to know more.
            </p>

            <span className="text-xs text-orange-100 mt-2 block">
              10:31 AM
            </span>
          </div>
        </div>

        {/* RECEIVED MESSAGE */}
        <div className="flex justify-start">
          <div className="max-w-[75%] bg-white px-5 py-3 rounded-2xl shadow">
            <p className="text-slate-800">
              Bella is fully vaccinated and very friendly.
            </p>

            <span className="text-xs text-slate-400 mt-2 block">
              10:32 AM
            </span>
          </div>
        </div>

      </div>

      {/* INPUT */}
      <div className="border-t border-slate-100 bg-white p-5">
        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            className="
              flex-1
              px-5
              py-4
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              text-slate-900
              placeholder:text-slate-400
              focus:outline-none
              focus:ring-2
              focus:ring-orange-500
            "
          />

          <button
            className="
              px-6
              rounded-2xl
              bg-gradient-to-r
              from-orange-500
              to-amber-400
              text-white
              font-bold
              shadow-lg
              hover:opacity-90
              transition
            "
          >
            ➤
          </button>

        </div>
      </div>

    </div>
  );
}