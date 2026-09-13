function Hero() {
  return (
    <section className="bg-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Build Your
            <span className="text-purple-600"> Dev Stack</span>
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            Explore technologies and build your perfect developer stack.
          </p>

          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
            Explore Technologies
          </button>
        </div>

        <img
          src="/src/assets/hero.png"
          alt="Developer working"
          className="w-full max-w-md"
        />

      </div>
    </section>
  )
}

export default Hero