import Hero from "../components/Hero";

export default function Home() {

  return (

    <main>

      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-extrabold text-center">
          Why Choose PetMatchPro?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold">
              Trusted Adoption
            </h3>

            <p className="text-gray-500 mt-4">
              Safe and verified pet adoption platform.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold">
              Thousands of Pets
            </h3>

            <p className="text-gray-500 mt-4">
              Explore pets from shelters and owners.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold">
              Easy Process
            </h3>

            <p className="text-gray-500 mt-4">
              Simple and fast adoption experience.
            </p>
          </div>

        </div>

      </section>

    </main>

  );
}