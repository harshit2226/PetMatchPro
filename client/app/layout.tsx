import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "PetMatchPro",
  description: "Find and adopt your perfect pet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f8fafc] text-gray-900">
        <Navbar />
        <Toaster position="top-right" />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}