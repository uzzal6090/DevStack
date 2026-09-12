function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">

      {/* ================= MAIN FOOTER ================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* ================= BRAND ================= */}

          <div className="lg:col-span-2">

            {/* Logo + Brand */}

            <a
              href="#home"
              className="inline-flex items-center gap-2"
            >
              <div
                className="
                  w-7
                  h-7
                  rounded-md
                  brand-gradient
                  flex
                  items-center
                  justify-center
                "
              >
                <span className="text-white font-bold text-[10px]">
                  DS
                </span>
              </div>

              <span className="text-lg font-bold text-gray-900">
                Dev
                <span className="brand-gradient-text">
                  Stack
                </span>
              </span>
            </a>

            {/* Description */}

            <p
              className="
                mt-4
                max-w-sm
                text-sm
                text-gray-500
                leading-6
              "
            >
              Curated tools, technologies, and resources
              for developers building modern software.
            </p>

            {/* Social Links */}

            <div className="flex items-center gap-5 mt-5">

              <a
                href="https://github.com/uzzal6090"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-xs
                  font-medium
                  text-gray-600
                  hover:text-pink-500
                  transition
                "
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-xs
                  font-medium
                  text-gray-600
                  hover:text-pink-500
                  transition
                "
              >
                Twitter
              </a>

              <a
                href="https://www.linkedin.com/in/uzzal-hosen-b9ba12395/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-xs
                  font-medium
                  text-gray-600
                  hover:text-pink-500
                  transition
                "
              >
                LinkedIn
              </a>

            </div>
          </div>

          {/* ================= PRODUCT ================= */}

          <div>

            <h3
              className="
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-gray-900
              "
            >
              Product
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a
                  href="#home"
                  className="
                    text-sm
                    text-gray-500
                    hover:text-pink-500
                    transition
                  "
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  className="
                    text-sm
                    text-gray-500
                    hover:text-pink-500
                    transition
                  "
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="
                    text-sm
                    text-gray-500
                    hover:text-pink-500
                    transition
                  "
                >
                  Projects
                </a>
              </li>

            </ul>
          </div>

          {/* ================= COMPANY ================= */}

          <div>

            <h3
              className="
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-gray-900
              "
            >
              Company
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a
                  href="#about"
                  className="
                    text-sm
                    text-gray-500
                    hover:text-pink-500
                    transition
                  "
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="
                    text-sm
                    text-gray-500
                    hover:text-pink-500
                    transition
                  "
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="
                    text-sm
                    text-gray-500
                    hover:text-pink-500
                    transition
                  "
                >
                  Careers
                </a>
              </li>

            </ul>
          </div>

          {/* ================= LEGAL ================= */}

          <div>

            <h3
              className="
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-gray-900
              "
            >
              Legal
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a
                  href="#privacy"
                  className="
                    text-sm
                    text-gray-500
                    hover:text-pink-500
                    transition
                  "
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#terms"
                  className="
                    text-sm
                    text-gray-500
                    hover:text-pink-500
                    transition
                  "
                >
                  Terms of Service
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}

      <div className="border-t border-gray-200">

        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            py-5
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-3
          "
        >

          {/* Copyright */}

          <p className="text-xs text-gray-400">
            © 2026 Dev Stack. All rights reserved by Uzzal Hosen.
          </p>

          {/* Bottom Links */}

          <div className="flex items-center gap-6">

            <a
              href="#privacy"
              className="
                text-xs
                text-gray-400
                hover:text-pink-500
                transition
              "
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="
                text-xs
                text-gray-400
                hover:text-pink-500
                transition
              "
            >
              Terms
            </a>

          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;