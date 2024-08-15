"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      <nav
        className="flex items-center justify-between p-2 shadow-lg lg:px-8 bg-white dark:bg-zinc-900 border-b-2 border-gray-100"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link className="-m-1.5 p-1.5" href="/">
            <span className="sr-only">Gateway Fellowship</span>
            <Image
              src="/symbol_text_beside.svg"
              alt="Gateway Fellowship Logo"
              className="dark:invert"
              width={275}
              height={80}
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-100"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/new"
            className="text-lg font-semibold leading-6 text-gray-900 hover:text-sky-700 dark:text-gray-100 dark:hover:text-sky-500 transition-all"
          >
            I&apos;m New
          </Link>
          <Link
            href="/about"
            className="text-lg font-semibold leading-6 text-gray-900 hover:text-sky-700 dark:text-gray-100 dark:hover:text-sky-500 transition-all"
          >
            About Us
          </Link>
          <Link
            href="/sermons"
            className="text-lg font-semibold leading-6 text-gray-900 hover:text-sky-700 dark:text-gray-100 dark:hover:text-sky-500 transition-all"
          >
            Sermons
          </Link>
          <Link
            href="/events"
            className="text-lg font-semibold leading-6 text-gray-900 hover:text-sky-700 dark:text-gray-100 dark:hover:text-sky-500 transition-all"
          >
            Events
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/give" className="text-lg font-semibold">
            <div className="py-2 px-8 text-gray-50 bg-zinc-700 hover:bg-zinc-800 rounded-lg cursor-pointer hover:shadow-lg transition-all">
              Give
            </div>
          </Link>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Gateway Fellowship</span>
                <Image
                  src="/symbol_text_beside.svg"
                  alt="Gateway Fellowship Logo"
                  className="dark:invert"
                  width={275}
                  height={80}
                  priority
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-100">
                <div className="space-y-2 py-6">
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/new"
                    className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100"
                  >
                    I&apos;m New
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100"
                  >
                    About Us
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/sermons"
                    className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100"
                  >
                    Sermons
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/events"
                    className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100"
                  >
                    Events
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/give"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100"
                  >
                    Give
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
