"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "./ButtonLink";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const toggleShowAboutDropdown = () =>
    setShowAboutDropdown(!showAboutDropdown);

  const linkClasses =
    "text-lg font-semibold leading-6 text-text-dark hover:text-primary-300 transition-all";
  const mobileLinkClasses =
    "mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-text-dark hover:dark:bg-primary-500";

  return (
    <React.Fragment>
      <header id="header-nav" className="sticky top-0 left-0 right-0 z-30 mb-8">
        <nav
          id="app-nav"
          className="flex items-center justify-between p-6 bg-stone-900 rounded-b-3xl shadow-md shadow-stone-600 dark:shadow-stone-700"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link className="-m-1.5 p-1.5" href="/">
              <span className="sr-only">Gateway Fellowship</span>
              <Image
                src="/White_Text_Beside.png"
                alt="Gateway Fellowship Logo"
                className="hidden lg:block"
                width={240}
                height={80}
                priority
              />
              <Image
                src="/White_Text_Beside.png"
                alt="Gateway Fellowship Logo"
                className="lg:hidden"
                width={275}
                height={80}
                priority
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 border-zinc-200 text-zinc-100"
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
            <div
              className="relative"
              onMouseEnter={toggleShowAboutDropdown}
              onMouseLeave={toggleShowAboutDropdown}
            >
              <Link href="/about" className={`${linkClasses} p-4`}>
                About Us
              </Link>
              {
                <div
                  className={`absolute right-0 mt-2 z-10 w-56 origin-top-right rounded-md text-text-dark bg-stone-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-300 ${
                    showAboutDropdown
                      ? "transform opacity-100 scale-100"
                      : "transform opacity-0 scale-95"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <Link
                      href="/beliefs"
                      className="block px-4 py-2 text-base hover:text-primary-300"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-0"
                    >
                      Beliefs
                    </Link>
                    <Link
                      href="/staff"
                      className="block px-4 py-2 text-base hover:text-primary-300"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-1"
                    >
                      Staff
                    </Link>
                    <Link
                      href="/history"
                      className="block px-4 py-2 text-base hover:text-primary-300"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-2"
                    >
                      Our History
                    </Link>
                  </div>
                </div>
              }
            </div>
            <Link href="/ministries" className={linkClasses}>
              Ministries
            </Link>
            <Link href="/sermons" className={linkClasses}>
              Sermons
            </Link>
            <Link href="/give" className={linkClasses}>
              Give
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <ButtonLink text="I'm New" to="/new" primary={false} />
          </div>
        </nav>
      </header>
      {isOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-stone-900 px-6 py-6 sm:max-w-sm shadow-md shadow-stone-600 dark:shadow-stone-700">
            <div className="flex items-center justify-between">
              <Link
                onClick={() => setIsOpen(false)}
                href="/"
                className="-m-1.5 p-1.5"
              >
                <span className="sr-only">Gateway Fellowship</span>
                <Image
                  src="/White_Text_Beside.png"
                  alt="Gateway Fellowship Logo"
                  width={275}
                  height={80}
                  priority
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-zinc-100"
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
              <div className="-my-6 divide-y divide-accent-400">
                <div className="space-y-2 py-6">
                  <div
                    className={mobileLinkClasses}
                    onClick={toggleShowAboutDropdown}
                  >
                    About Us
                  </div>
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      showAboutDropdown ? "max-h-96" : "max-h-0 invisible"
                    }`}
                  >
                    <Link
                      onClick={() => setIsOpen(false)}
                      href="/beliefs"
                      className={`${mobileLinkClasses} text-base pl-8`}
                    >
                      Beliefs
                    </Link>
                    <Link
                      onClick={() => setIsOpen(false)}
                      href="/staff"
                      className={`${mobileLinkClasses} text-base pl-8`}
                    >
                      Staff
                    </Link>
                    <Link
                      onClick={() => setIsOpen(false)}
                      href="/history"
                      className={`${mobileLinkClasses} text-base pl-8`}
                    >
                      Our History
                    </Link>
                  </div>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/ministries"
                    className={mobileLinkClasses}
                  >
                    Ministries
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/sermons"
                    className={mobileLinkClasses}
                  >
                    Sermons
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/give"
                    className={mobileLinkClasses}
                  >
                    Give
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/new"
                    className="mx-3 block rounded-lg px-3 py-2.5 text-2xl font-semibold leading-7 text-text-dark hover:dark:bg-primary-500"
                  >
                    I&apos;m New
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navbar;
