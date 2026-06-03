import Hero from "../components/Hero";
import Link from "next/link";
import ChatBox from "../components/chat/ChatBox";

export default function Home() {
  return (
    <main className="bg-[#fafaf9] overflow-hidden">
      <Hero />

      {/* Floating Stats */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid md:grid-cols-4 gap-5">
          {[
            ["12K+", "Successful Adoptions"],
            ["850+", "Verified Shelters"],
            ["25K+", "Pet Lovers"],
            ["4.9★", "Average Rating"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="backdrop-blur-xl bg-white/80 border border-white shadow-xl rounded-3xl p-6 text-center"
            >
              <h3 className="text-3xl font-bold text-slate-900">
                {value}
              </h3>

              <p className="text-slate-500 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-orange-500 font-semibold uppercase tracking-[4px] text-sm">
              Categories
            </span>

            <h2 className="text-5xl font-bold mt-4 text-slate-900">
              Find Pets By Category
            </h2>

            <p className="text-slate-500 mt-5 max-w-2xl mx-auto">
              Discover pets waiting for a loving family.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              {
                name: "Dogs",
                img: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
              },
              {
                name: "Cats",
                img: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4",
              },
              {
                name: "Birds",
                img: "https://images.unsplash.com/photo-1444464666168-49d633b86797",
              },
              {
                name: "Rabbits",
                img: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="group overflow-hidden rounded-[30px] bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-slate-500 mt-2">
                    Browse available {item.name.toLowerCase()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <span className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold">
                Featured Pets
              </span>

              <h2 className="text-5xl font-bold mt-3">
                Pets Looking For Home
              </h2>
            </div>

            <Link
              href="/pets"
              className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600"
            >
              View All Pets
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[1, 2, 3].map((pet) => (
              <div
                key={pet}
                className="group bg-white rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`https://picsum.photos/600/500?random=${pet}`}
                    alt="Pet"
                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute top-5 right-5 bg-white rounded-full p-3 shadow-lg">
                    ❤️
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">
                      Bella
                    </h3>

                    <span className="text-orange-500 font-semibold">
                      ★ 4.9
                    </span>
                  </div>

                  <p className="text-slate-500 mt-2">
                    Golden Retriever
                  </p>

                  <p className="text-slate-500">
                    📍 Delhi, India
                  </p>

                  <button className="w-full mt-6 bg-slate-900 text-white py-3 rounded-xl hover:bg-black transition">
                    Adopt Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-orange-500 to-amber-400 rounded-[40px] p-12 md:p-20">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                "Verified Pets",
                "Secure Adoption",
                "AI Matching",
                "24/7 Support",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 text-white"
                >
                  <div className="text-4xl mb-4">✓</div>

                  <h3 className="font-bold text-xl">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CHAT SUPPORT */}
<section className="py-28 bg-gradient-to-b from-orange-50 to-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">

      <span className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold">
        Live Chat
      </span>

      <h2 className="text-5xl font-bold mt-4 text-slate-900">
        Connect With Pet Owners
      </h2>

      <p className="text-slate-500 mt-5 max-w-2xl mx-auto">
        Ask questions, discuss adoption details, and get
        instant support before welcoming your new companion.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div>

        <div className="space-y-6">

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
                💬
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Real Time Conversations
                </h3>

                <p className="text-slate-500 mt-1">
                  Chat directly with pet owners and shelters.
                </p>
              </div>

            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">
                🛡️
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Verified Profiles
                </h3>

                <p className="text-slate-500 mt-1">
                  Speak with trusted and verified users only.
                </p>
              </div>

            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
                ⚡
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Quick Adoption Process
                </h3>

                <p className="text-slate-500 mt-1">
                  Get answers instantly and adopt faster.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE CHAT */}
      <div>
        <ChatBox />
      </div>

    </div>

  </div>
</section>

      {/* Testimonials */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold">
              Testimonials
            </span>

            <h2 className="text-5xl font-bold mt-3 text-black">
              Families Love PetMatchPro
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {["Sarah", "Rahul", "Priya"].map((name) => (
              <div
                key={name}
                className="bg-slate-50 rounded-[30px] p-8 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={`https://i.pravatar.cc/100?u=${name}`}
                    alt={name}
                    className="w-14 h-14 rounded-full"
                  />

                  <div>
                    <h4 className="font-bold">{name}</h4>

                    <p className="text-sm text-slate-500">
                      Pet Parent
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-slate-600 leading-8">
                  PetMatchPro helped us find the perfect furry
                  friend. The process was smooth and safe.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#0f172a] rounded-[40px] p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 blur-[140px] opacity-20" />

            <h2 className="text-5xl font-bold max-w-3xl mx-auto leading-tight">
              Ready To Welcome A New Family Member?
            </h2>

            <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
              Join thousands of successful adoptions and find
              your perfect companion today.
            </p>

            <div className="flex justify-center gap-4 flex-wrap mt-10">
              <Link
                href="/pets"
                className="bg-gradient-to-r from-orange-500 to-yellow-400 px-8 py-4 rounded-xl font-bold"
              >
                Browse Pets
              </Link>

              <Link
                href="/signup"
                className="border border-slate-600 px-8 py-4 rounded-xl"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}