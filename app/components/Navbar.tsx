"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMinistriesDropdown, setShowMinistriesDropdown] = useState(false);

  const linkClasses =
    "text-white hover:text-primary-300 transition-colors duration-300";
  const mobileLinkClasses =
    "block py-2 text-white hover:text-primary-300 transition-colors duration-300";

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleShowMinistriesDropdown = () =>
    setShowMinistriesDropdown((prev) => !prev);

  return (
    <nav className="bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              Gateway Fellowship
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className={linkClasses}>
              Home
            </Link>

            {/* Ministries dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowMinistriesDropdown(true)}
              onMouseLeave={() => setShowMinistriesDropdown(false)}
            >
              <Link href="/ministries" className={`${linkClasses} p-4`}>
                Ministries
              </Link>
              <div
                className={`absolute left-0 mt-2 z-10 w-56 origin-top-left rounded-md text-text-dark bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-300 ${
                  showMinistriesDropdown
                    ? "transform opacity-100 scale-100"
                    : "transform opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="py-1">
                  <Link href="/gateway-kids" className="block px-4 py-2 hover:text-primary-300">
                    Gateway Kids
                  </Link>
                  <Link href="/gateway-students" className="block px-4 py-2 hover:text-primary-300">
                    Gateway Students
                  </Link>
                  <Link href="/men-s-ministry" className="block px-4 py-2 hover:text-primary-300">
                    Men's Ministry
                  </Link>
                  <Link href="/women-s-ministry" className="block px-4 py-2 hover:text-primary-300">
                    Women's Ministry
                  </Link>
                  <Link href="/bible-study" className="block px-4 py-2 hover:text-primary-300">
                    Bible Study
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/about" className={linkClasses}>
              About
            </Link>
            <Link href="/contact" className={linkClasses}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-primary-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-1 bg-zinc-900">
          <Link href="/" onClick={() => setIsOpen(false)} className={mobileLinkClasses}>
            Home
          </Link>

          {/* Ministries main link */}
          <Link
            href="/ministries"
            onClick={() => setIsOpen(false)}
            className={mobileLinkClasses}
          >
            Ministries
          </Link>

          {/* Ministries sub-links (accordion style) */}
          <button
            className={`${mobileLinkClasses} pl-4 text-sm`}
            onClick={toggleShowMinistriesDropdown}
          >
            {showMinistriesDropdown ? "Hide Ministries ▴" : "Show Ministries ▾"}
          </button>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              showMinistriesDropdown ? "max-h-96" : "max-h-0"
            }`}
          >
            <Link href="/gateway-kids" onClick={() => setIsOpen(false)} className={`${mobileLinkClasses} text-base pl-8`}>
              Gateway Kids
            </Link>
            <Link href="/gateway-students" onClick={() => setIsOpen(false)} className={`${mobileLinkClasses} text-base pl-8`}>
              Gateway Students
            </Link>
            <Link href="/men-s-ministry" onClick={() => setIsOpen(false)} className={`${mobileLinkClasses} text-base pl-8`}>
              Men's Ministry
            </Link>
            <Link href="/women-s-ministry" onClick={() => setIsOpen(false)} className={`${mobileLinkClasses} text-base pl-8`}>
              Women's Ministry
            </Link>
            <Link href="/bible-study" onClick={() => setIsOpen(false)} className={`${mobileLinkClasses} text-base pl-8`}>
              Bible Study
            </Link>
          </div>

          <Link href="/about" onClick={() => setIsOpen(false)} className={mobileLinkClasses}>
            About
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className={mobileLinkClasses}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
