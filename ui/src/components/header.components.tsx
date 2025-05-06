import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="shadow-md p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-800">
          Celebrity Person Classifier
        </a>
        {/* <div className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </div> */}
      </div>
    </nav>
  );
}