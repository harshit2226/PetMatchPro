"use client";

import { useParams } from "next/navigation";

export default function PetDetails() {

  const params = useParams();

  return (

    <main className="min-h-screen flex items-center justify-center">

      <h1 className="text-5xl font-bold">

        Pet ID:
        {" "}
        {params.id}

      </h1>

    </main>

  );
}