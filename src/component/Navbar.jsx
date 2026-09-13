function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md brand-gradient flex items-center justify-center text-white text-xs font-bold">
              DS
            </div>

            <h1 className="text-lg font-bold gradient-text">
              Dev Stack
            </h1>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-7 text-sm">
            <a href="#" className="text-pink-500 font-medium">
              Home
            </a>

            <a href="#" className="text-gray-600 hover:text-pink-500 transition">
              Technologies
            </a>

            <a href="#" className="text-gray-600 hover:text-pink-500 transition">
              Projects
            </a>

            <a href="#" className="text-gray-600 hover:text-pink-500 transition">
              About
            </a>

            <a href="#" className="text-gray-600 hover:text-pink-500 transition">
              Contact
            </a>
          </div>

          {/* Authentication */}
          <div className="flex items-center gap-5 text-sm">
            <button className="text-gray-600 hover:text-pink-500 transition">
              Sign In
            </button>

            <button className="brand-gradient text-white px-5 py-2 rounded-full hover:opacity-90 transition">
              Sign Up
            </button>
          </div>

        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center justify-between">

          {/* Hamburger */}
          <button
            type="button"
            className="text-gray-700 text-2xl"
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* Mobile Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md brand-gradient flex items-center justify-center text-white text-xs font-bold">
              DS
            </div>

            <h1 className="text-lg font-bold gradient-text">
              Dev Stack
            </h1>
          </div>

          {/* Mobile Authentication */}
          <div className="flex items-center gap-2">
            <button className="text-gray-600 text-xs font-medium">
              Sign In
            </button>

            <button className="brand-gradient text-white px-3 py-1.5 rounded-full text-xs">
              Sign Up
            </button>
          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar