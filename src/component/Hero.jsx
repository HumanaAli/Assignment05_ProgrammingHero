function Hero() {
  return (
    <section className="bg-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Build Your{' '}
            <span className="gradient-text">
              Ideal Development Stack
            </span>
          </h1>

          <p className="text-gray-600 text-lg leading-7 mb-7">
            Explore frontend, backend, database and tooling options, compare
            them side by side and put together the stack that fits your next
            project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="brand-gradient text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
              Explore Technologies
            </button>

            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-white transition">
              Learn More
            </button>
          </div>
        </div>

        <img
  src="/src/assets/banner-stack.png"
  alt="Developer stack illustration"
  className="w-full max-w-md"
/>

      </div>
    </section>
  )
}

export default Hero