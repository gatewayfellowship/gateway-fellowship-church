"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "./ButtonLink";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const scrollState = {
      top: true,
      topThreshold: 10,
      onScroll: function () {
        if (this.top && window.scrollY > this.topThreshold) {
          this.top = false;
          this.updateUI();
        } else if (!this.top && window.scrollY <= this.topThreshold) {
          this.top = true;
          this.updateUI();
        }
      },
      updateUI: function () {
        const header = document.getElementById("app-nav");
        header?.classList.toggle("shadow-md");
        header?.classList.toggle("dark:shadow-md");
      },
    };

    const onScroll = () => scrollState.onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const linkClasses =
    "text-lg font-semibold leading-6 text-text-light hover:text-primary-500 dark:text-text-dark dark:hover:text-primary-300 transition-all";

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      <nav
        id="app-nav"
        className="flex items-center justify-between p-6 lg:p-4 bg-background-light dark:bg-stone-900 rounded-b-3xl dark:shadow-stone-800"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link className="-m-1.5 p-1.5" href="/">
            <span className="sr-only">Gateway Fellowship</span>
            <Image
              src="/Black_Text_Beside.png"
              alt="Gateway Fellowship Logo"
              className="dark:invert hidden lg:block"
              width={240}
              height={80}
              priority
            />
            <Image
              src="/Black_Text_Beside.png"
              alt="Gateway Fellowship Logo"
              className="dark:invert lg:hidden"
              width={275}
              height={80}
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 border-zinc-200 text-zinc-700 dark:text-zinc-100"
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
          <Link href="/about" className={linkClasses}>
            About Us
          </Link>
          <Link href="/sermons" className={linkClasses}>
            Sermons
          </Link>
          <Link href="/events" className={linkClasses}>
            Events
          </Link>
          <Link href="/watch" className={linkClasses}>
            Watch
          </Link>
          <Link href="/give" className={linkClasses}>
            Give
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ButtonLink text="I'm New" to="/new" primary={false} />
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background-light dark:bg-background-dark px-6 py-6 sm:max-w-sm shadow-md dark:shadow-accent-700">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Gateway Fellowship</span>
                <Image
                  src="/Black_Text_Beside.png"
                  alt="Gateway Fellowship Logo"
                  className="dark:invert"
                  width={275}
                  height={80}
                  priority
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-zinc-700 dark:text-zinc-100"
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
              <div className="-my-6 divide-y divide-accent-500 dark:divide-accent-400">
                <div className="space-y-2 py-6">
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-text-light hover:bg-primary-100 dark:text-text-dark hover:dark:bg-primary-400"
                  >
                    About Us
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/sermons"
                    className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-text-light hover:bg-primary-100 dark:text-text-dark hover:dark:bg-primary-400"
                  >
                    Sermons
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/events"
                    className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-text-light hover:bg-primary-100 dark:text-text-dark hover:dark:bg-primary-400"
                  >
                    Events
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/watch"
                    className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-text-light hover:bg-primary-100 dark:text-text-dark hover:dark:bg-primary-400"
                  >
                    Watch
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/give"
                    className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-text-light hover:bg-primary-100 dark:text-text-dark hover:dark:bg-primary-400"
                  >
                    Give
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/new"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-2xl font-semibold leading-7 text-text-light hover:bg-primary-100 dark:text-text-dark hover:dark:bg-primary-400"
                  >
                    I&apos;m New
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
