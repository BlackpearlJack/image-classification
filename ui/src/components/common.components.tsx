"use client";

import { FaBell, FaSearch } from "react-icons/fa";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="navbar glass px-6 py-2 shadow-md">
      {/* Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            aria-label="Navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow glass rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Center */}
      <div className="navbar-center">
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-semibold tracking-wide uppercase"
        >
          N3UROTVG
        </Link>
      </div>

      {/* End */}
      <div className="navbar-end gap-2">
        <button
          className="btn btn-ghost btn-circle focus:outline-none focus:ring focus:ring-secondary"
          aria-label="Search"
        >
          <FaSearch className="w-5 h-5" />
        </button>
        <button
          className="btn btn-ghost btn-circle focus:outline-none focus:ring focus:ring-secondary"
          aria-label="Notifications"
        >
          <div className="indicator">
            <FaBell className="w-5 h-5" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};
