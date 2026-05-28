export default function Hero() {

  return (

    <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-28">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-6xl font-extrabold leading-tight">
          Find Your Perfect Pet Companion
        </h1>

        <p className="text-xl mt-6 text-blue-100 max-w-3xl mx-auto">
          Discover loving pets waiting for adoption.
          Give them a new home and a better future.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <a
            href="/pets"
            className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold"
          >
            Explore Pets
          </a>

          <a
            href="/signup"
            className="border border-white px-8 py-4 rounded-2xl font-bold"
          >
            Get Started
          </a>

        </div>

      </div>

    </section>

  );
}