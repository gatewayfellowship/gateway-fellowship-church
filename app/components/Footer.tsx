import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => (
  <footer className="py-12 px-4 bg-white shadow-inner dark:bg-zinc-900 border-t-zinc-900 dark:border-t-white border-t-2">
    <div className="mb-6 flex items-center justify-center">
      <Image
        className="dark:invert"
        src="/header_symbol.svg"
        alt="Gateway Fellowship"
        width={400}
        height={100}
      />
    </div>
    <div className="mb-6">
      <div className="flex flex-col md:flex-row justify-evenly w-full">
        <div className="mb-6">
          <h4 className="text-gray-800 text-2xl mb-6 font-bold dark:text-gray-100">
            About
          </h4>
          <ul>
            <li className="mb-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500">
              <Link className="hover:underline" href="/about">
                Our Beliefs
              </Link>
            </li>
            <li className="mb-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500">
              <Link className="hover:underline" href="/about">
                Our History
              </Link>
            </li>
            <li className="mb-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500">
              <Link className="hover:underline" href="/about">
                Missions
              </Link>
            </li>
            <li className="mb-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500">
              <Link className="hover:underline" href="/about">
                Leadership
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="text-gray-800 text-2xl mb-6 font-bold dark:text-gray-100">
            Contact
          </h4>
          <ul>
            <li className="mb-3">
              <a className="clickable-link" href="tel:4808924711">
                phone: (480) 892-4711
              </a>
            </li>
            <li className="mb-3">
              <a
                className="clickable-link"
                href="mailto:gateway@gatewayfellowship.org"
              >
                email: gateway@gatewayfellowship.org
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="text-gray-800 text-2xl mb-6 font-bold dark:text-gray-100">
            Visit
          </h4>
          <ul>
            <li className="mb-3">Sunday: 11am & 6pm</li>
            <li className="mb-3">Wednesday: 7pm</li>
            <li className="mb-3">
              <a
                className="hover:underline dark:text-gray-400 dark:hover:text-gray-500"
                href="https://maps.app.goo.gl/tSQBMEk8cV1AhiEg6"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div>60 N Recker Road</div>
                <div>Gilbert, Arizona 85234</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mb-6 mx-6">
      <div className="text-center text-xs">
        Copyright © {new Date().getFullYear()} Gateway Fellowship. All rights
        reserved.
        <p className="mb-3">
          Created by{" "}
          <a
            className="hover:underline"
            href="https://marktkimball.github.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            MK Engineering
          </a>
        </p>
      </div>
      <div className="flex justify-end">
        <a
          className="p-4"
          title="facebook"
          href="https://www.facebook.com/profile.php?id=100064455289156"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            className="dark:invert"
            src="/social/facebook.svg"
            alt="Facebook"
            width={24}
            height={24}
          />
        </a>
        <a
          className="p-4"
          title="youtube"
          href="https://www.youtube.com/@gatewayfellowshipsbc8663"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            className="dark:invert"
            src="/social/youtube.svg"
            alt="YouTube"
            width={24}
            height={24}
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
