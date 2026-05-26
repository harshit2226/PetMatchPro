export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7fb]">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-sm">
        <h1 className="text-3xl font-bold text-blue-600">
          PetMatchPro
        </h1>

        <div className="flex gap-6 text-gray-700 font-medium">
          <button>Home</button>
          <button>Pets</button>
          <button>About</button>
          <button>Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-28 px-6">
        
        <h2 className="text-6xl font-extrabold text-gray-800 leading-tight max-w-4xl">
          Find Your Perfect
          <span className="text-blue-600"> Pet Companion</span>
        </h2>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl">
          Adopt lovable pets, connect with shelters,
          and give animals a forever home with PetMatchPro.
        </p>

        <div className="flex gap-5 mt-10">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
            Explore Pets
          </button>

          <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition">
            Add Pet
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pb-20">

        <div className="bg-white p-8 rounded-3xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-800">
            Easy Adoption
          </h3>

          <p className="mt-4 text-gray-600">
            Quickly browse pets and connect with owners or shelters.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-800">
            Verified Listings
          </h3>

          <p className="mt-4 text-gray-600">
            All pet profiles are verified for better trust and safety.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-800">
            Smart Matching
          </h3>

          <p className="mt-4 text-gray-600">
            Find pets that match your lifestyle and preferences.
          </p>
        </div>

      </section>

    </main>
  );
}