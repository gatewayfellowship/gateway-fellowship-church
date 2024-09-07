import React from "react";
import Image from "next/image";
import Link from "next/link";
import reader from "../keystatic/reader";

export const Footer = async () => {
  const services = await reader.singletons.services.read();

  return (
    <footer className="py-12 px-4 bg-gradient-to-r from-stone-50 to-stone-200 dark:from-stone-800 dark:to-stone-900 border-t-stone-100 dark:border-t-stone-900 border-t rounded-t-3xl">
      <div className="mb-6 flex items-center justify-center">
        <Image
          className="dark:invert"
          src="/Black_Text_Between.png"
          alt="Gateway Fellowship"
          width={400}
          height={100}
        />
      </div>
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-evenly w-full">
          <div className="mb-6">
            <h4 className="text-accent-500 dark:text-accent-200 text-2xl mb-6 font-bold">
              About
            </h4>
            <ul>
              <li className="mb-3 text-text-light dark:text-text-dark">
                <Link className="hover:underline" href="/about">
                  Our Beliefs
                </Link>
              </li>
              <li className="mb-3 text-text-light dark:text-text-dark">
                <Link className="hover:underline" href="/about">
                  Our History
                </Link>
              </li>
              <li className="mb-3 text-text-light dark:text-text-dark">
                <Link className="hover:underline" href="/about">
                  Missions
                </Link>
              </li>
              <li className="mb-3 text-text-light dark:text-text-dark">
                <Link className="hover:underline" href="/about">
                  Leadership
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-accent-500 dark:text-accent-200 text-2xl mb-6 font-bold">
              Contact
            </h4>
            <ul>
              <li className="mb-3">
                phone:{" "}
                <a className="hover:underline" href="tel:4808924711">
                  480.892.4711
                </a>
              </li>
              <li className="mb-3">
                email:{" "}
                <a
                  className="hover:underline"
                  href="mailto:gateway@gatewayfellowship.org"
                >
                  gateway@gatewayfellowship.org
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-accent-500 dark:text-accent-200 text-2xl mb-6 font-bold">
              Visit
            </h4>
            <ul>
              {services?.content?.map((service, index) => (
                <li key={`${service.dayOfWeek}-${index}`} className="mb-3">
                  {`${service.dayOfWeek}: ${service.time}`}
                </li>
              ))}
              <li className="mb-3">
                <a
                  className="hover:underline"
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
            className="p-4 cursor-pointer"
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
            className="p-4 cursor-pointer"
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
};

export default Footer;
