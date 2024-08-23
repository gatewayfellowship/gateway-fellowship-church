import React from "react";
import { Poppins } from "next/font/google";
import reader from "../keystatic/reader";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

export default async function Announcement() {
  const announcment = await reader.singletons.announcment.read();

  if (!announcment) {
    return null;
  }

  return (
    <div
      id="announcment"
      className="fixed bottom-0 left-0 right-0 py-8 px-4 z-40 announcement"
    >
      <div
        className={`${poppins.className} rounded-xl shadow-xl flex items-center gap-x-6 bg-sky-100 px-6 py-2.5 sm:px-3.5 sm:before:flex-1`}
      >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-zinc-900">
            {announcment.title && (
              <React.Fragment>
                <strong className={`$${poppinsBold.className} font-bold`}>
                  {announcment.title}
                </strong>
                <svg
                  viewBox="0 0 2 2"
                  className="mx-2 inline h-0.5 w-0.5 fill-current"
                  aria-hidden="true"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
              </React.Fragment>
            )}
            {announcment.description}
          </p>
          {announcment.link && (
            <a
              href={announcment.link}
              className="flex-none rounded-full text-zinc-50 bg-zinc-700 hover:bg-zinc-800 px-3.5 py-1 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              {announcment.linkText || "Learn More"}{" "}
              <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
            <svg
              className="h-5 w-5 text-zinc-900"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
