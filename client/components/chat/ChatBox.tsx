"use client";

export default function ChatBox() {

  return (

    <div className="bg-white rounded-3xl shadow-xl p-6">

      <h2 className="text-2xl font-bold">
        Chat System
      </h2>

      <div className="mt-5 border rounded-2xl p-4 h-72 overflow-y-auto">

        <p className="text-gray-500">
          Messages will appear here...
        </p>

      </div>

      <input
        type="text"
        placeholder="Type message..."
        className="w-full mt-4 border rounded-2xl px-5 py-4 text-black"
      />

    </div>

  );
}