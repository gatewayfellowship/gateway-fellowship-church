import React, { useEffect } from "react";
import { Poppins } from "next/font/google";
import reader from "../keystatic/reader";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

export default async function Announcement() {
  const announcement = await reader.singletons.announcement.read();

  if (!announcement || !announcement.isVisible) {
    return null;
  }

  return (
    <div
      id="announcement"
      className="fixed bottom-0 left-0 right-0 pb-8 px-4 z-40 announcement"
    >
      <div
        className={`${poppins.className} rounded-xl shadow-xl flex items-center justify-center gap-x-6 bg-gradient-to-br text-gray-800 from-primary-300 to-primary-400 px-6 py-2.5 sm:px-3.5`}
      >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-custom-dark-text">
            {announcement.title && (
              <React.Fragment>
                <strong className={`$${poppinsBold.className} font-bold`}>
                  {announcement.title}
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
            {announcement.description}
          </p>
          {announcement.link && (
            <a
              href={announcement.link}
              className="flex-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 text-sm font-semibold py-1 px-3.5 text-gray-800 hover:shadow-xl cursor-pointer transition-all border-2 border-gray-800 rounded-xl"
            >
              {announcement.linkText || "Learn More"}{" "}
              <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
