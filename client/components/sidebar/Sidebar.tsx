import Link from "next/link";

export default function Sidebar() {

  return (

    <div className="w-72 min-h-screen bg-white shadow-xl p-8">

      <h1 className="text-3xl font-extrabold text-blue-600">
        PetMatchPro
      </h1>

      <div className="flex flex-col gap-5 mt-10">

        <Link href="/">
          Home
        </Link>

        <Link href="/pets">
          Pets
        </Link>

        <Link href="/favorites">
          Favorites
        </Link>

        <Link href="/dashboard">
          Dashboard
        </Link>

      </div>

    </div>

  );
}