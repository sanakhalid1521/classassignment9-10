import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="bg-cyan-500 text-2xl font-semibold px-4 py-2 rounded-md">
          <Link href="/">My Logo</Link>
        </div>

        {/* Colored Heading Div */}
        <div className="bg-pink-500 text-white text-lg mx-2 px-8 py-4 rounded-md w-full h-16 flex items-center justify-center">
          Heading
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="bg-purple-800 text-white text-lg font-medium px-3 py-2 rounded-md"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="bg-green-700 text-white text-lg font-medium px-3 py-2 rounded-md"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="bg-red-700 text-white text-lg font-medium px-3 py-2 rounded-md"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="bg-yellow-600 text-white text-lg font-medium px-3 py-2 rounded-md"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
