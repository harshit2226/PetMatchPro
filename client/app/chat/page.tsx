"use client";

import ChatBox from "../../components/chat/ChatBox";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <ChatBox />
      </div>
    </main>
  );
}