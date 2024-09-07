import React, { useEffect } from "react";
import { Poppins } from "next/font/google";
import reader from "../keystatic/reader";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

export default async function Announcement() {
  const announcement = await reader.singletons.announcement.read();

  if (!announcement) {
    return null;
  }

  return (
    <div
      id="announcement"
      className="fixed top-0 left-0 right-0 z-40 announcement "
    >
      <div
        className={`${poppins.className} flex items-center justify-center gap-x-6 bg-gradient-to-br from-stone-50 to-stone-200 dark:from-stone-500 dark:to-stone-700 px-6 py-2.5 sm:px-3.5 max-h-22 md:max-h-12`}
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
              className="text-sm font-semibold py-1 px-3.5 text-primary-50 dark:text-primary-900 bg-primary-500 dark:bg-primary-400 hover:bg-primary-600 dark:hover:bg-primary-500 border-2 border-primary-500 hover:border-primary-600 dark:border-primary-400 dark:hover:border-primary-500 rounded-lg cursor-pointer hover:shadow-md transition-all"
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
