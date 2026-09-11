import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* ================= MOBILE HEADER ================= */}
        <div className="md:hidden h-16 grid grid-cols-[40px_1fr_auto] items-center">

          {/* Hamburger - LEFT */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <span className="text-2xl font-semibold">×</span>
            ) : (
              <span className="text-2xl font-semibold">☰</span>
            )}
          </button>

          {/* Brand - CENTER */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="justify-self-center flex items-center gap-1.5 whitespace-nowrap"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">
                DS
              </span>
            </div>

            <span className="text-base font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Dev Stack
            </span>
          </a>

          {/* Authentication - RIGHT */}
          <div className="flex items-center gap-1.5 whitespace-nowrap">

            <button
              type="button"
              className="text-gray-700 font-medium text-xs hover:text-pink-500 transition"
            >
              Sign In
            </button>

            <button
              type="button"
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white font-semibold text-xs hover:opacity-90 transition"
            >
              Sign Up
            </button>

          </div>

        </div>

        {/* ================= DESKTOP HEADER ================= */}
        <div className="hidden md:flex h-16 items-center justify-between">

          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                DS
              </span>
            </div>

            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Dev Stack
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-7">

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

          {/* Desktop Authentication */}
          <div className="flex items-center gap-3">

            <button
              type="button"
              className="text-gray-700 font-medium hover:text-pink-500 transition"
            >
              Sign In
            </button>

            <button
              type="button"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white font-semibold hover:opacity-90 transition"
            >
              Sign Up
            </button>

          </div>

        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">

            <div className="flex flex-col gap-1">

              <a
                href="#home"
                onClick={handleNavClick}
                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-pink-500 transition"
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={handleNavClick}
                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-pink-500 transition"
              >
                Technologies
              </a>

              <a
                href="#projects"
                onClick={handleNavClick}
                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-pink-500 transition"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={handleNavClick}
                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-pink-500 transition"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={handleNavClick}
                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-pink-500 transition"
              >
                Contact
              </a>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;