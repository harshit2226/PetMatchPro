import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PetMatchPro | Find Your Perfect Companion",
  description:
    "Adopt, rescue, and connect with pets from verified shelters and loving owners across India.",
  keywords: [
    "pet adoption",
    "dogs",
    "cats",
    "petmatchpro",
    "animal rescue",
    "pets",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${inter.variable}
          font-sans
          min-h-screen
          flex
          flex-col
          bg-gradient-to-b
          from-[#fffdf8]
          via-[#fafaf9]
          to-[#f8fafc]
          text-slate-900
          antialiased
        `}
      >
        {/* Navbar */}
        <Navbar />

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: "16px",
              background: "#fff",
              color: "#0f172a",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.08)",
            },
          }}
        />

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}