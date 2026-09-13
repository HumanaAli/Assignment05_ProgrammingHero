function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md brand-gradient flex items-center justify-center text-white text-xs font-bold">
                DS
              </div>

              <h2 className="text-xl font-bold gradient-text">
                Dev Stack
              </h2>
            </div>

            <p className="text-gray-500 text-sm leading-6 max-w-sm">
              Curated tools, technologies and resources for developers
              building modern software.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">
              Product
            </h3>

            <div className="space-y-3 text-sm">
              <a href="#" className="block text-gray-500 hover:text-gray-900 transition">
                Technologies
              </a>

              <a href="#" className="block text-gray-500 hover:text-gray-900 transition">
                Projects
              </a>

              <a href="#" className="block text-gray-500 hover:text-gray-900 transition">
                Features
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">
              Company
            </h3>

            <div className="space-y-3 text-sm">
              <a href="#" className="block text-gray-500 hover:text-gray-900 transition">
                About
              </a>

              <a href="#" className="block text-gray-500 hover:text-gray-900 transition">
                Contact
              </a>

              <a href="#" className="block text-gray-500 hover:text-gray-900 transition">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">
              Legal
            </h3>

            <div className="space-y-3 text-sm">
              <a href="#" className="block text-gray-500 hover:text-gray-900 transition">
                Privacy
              </a>

              <a href="#" className="block text-gray-500 hover:text-gray-900 transition">
                Terms
              </a>

              <a href="#" className="block text-gray-500 hover:text-gray-900 transition">
                Cookies
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-gray-900 transition">
              Privacy
            </a>

            <a href="#" className="hover:text-gray-900 transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer