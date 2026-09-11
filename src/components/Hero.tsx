import heroImage from "../assets/banner-stack.png";

function Hero() {
  return (
    <section
      id="home"
      className="bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="min-h-[520px] flex flex-col lg:flex-row items-center justify-between gap-10 py-16 lg:py-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full lg:w-1/2">

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">

              Build Your Ideal
              <br />

              <span className="brand-gradient-text">
                Development Stack
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base sm:text-lg text-gray-600 leading-7">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and build the perfect technology
              stack for your next project.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              {/* Explore Technologies */}
              <a
                href="#technologies"
                className="px-5 py-3 rounded-lg brand-gradient text-white font-semibold hover:opacity-90 transition"
              >
                Explore Technologies
              </a>

              {/* Learn More */}
              <a
                href="#about"
                className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:border-pink-400 hover:text-pink-500 transition"
              >
                Learn More
              </a>

            </div>

          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="w-full lg:w-1/2 flex justify-center">

            <img
              src={heroImage}
              alt="Development Stack Illustration"
              className="w-full max-w-md lg:max-w-lg h-auto object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;