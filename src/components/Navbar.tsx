function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-16 flex items-center justify-between">

          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2"
          >
            {/* Logo */}
            <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold">
                D
              </span>
            </div>

            {/* Brand Name */}
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Dev Stack
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-7">

            <a
              href="#home"
              className="text-gray-700 hover:text-pink-500 transition"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="text-gray-700 hover:text-pink-500 transition"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-gray-700 hover:text-pink-500 transition"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-gray-700 hover:text-pink-500 transition"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-gray-700 hover:text-pink-500 transition"
            >
              Contact
            </a>

          </div>

          {/* Authentication Buttons */}
          <div className="flex items-center gap-3">

            <button className="hidden sm:block text-gray-700 font-medium hover:text-pink-500 transition">
              LogIn
            </button>

            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white font-semibold hover:opacity-90 transition">
              Sign Up
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;