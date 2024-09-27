import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import reader from "../keystatic/reader";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

export const Footer = async () => {
  const services = await reader.singletons.services.read();

  return (
    <footer className="py-12 px-4 bg-gradient-to-r from-zinc-600 dark:from-zinc-700 to-zinc-800 dark:to-zinc-800 border-t-zinc-900 border-t rounded-t-3xl">
      <div className="mb-6 flex items-center justify-center">
        <Image
          src="/White_Text_Between.png"
          alt="Gateway Fellowship"
          width={400}
          height={100}
        />
      </div>
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-evenly w-full">
          <div className="mb-6">
            <h4 className="text-accent-400 text-2xl mb-6 font-bold">About</h4>
            <ul>
              <li className="mb-3 text-text-dark">
                <Link className="hover:underline" href="/beliefs">
                  Our Beliefs
                </Link>
              </li>
              <li className="mb-3 text-text-dark">
                <Link className="hover:underline" href="/staff">
                  Our Staff
                </Link>
              </li>
              <li className="mb-3 text-text-dark">
                <Link className="hover:underline" href="/history">
                  Our History
                </Link>
              </li>
              <li className="mb-3 text-text-dark">
                <Link className="hover:underline" href="/ministries">
                  Ministries
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-accent-400 text-2xl mb-6 font-bold">Contact</h4>
            <ul className="text-text-dark">
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
            <h4 className="text-accent-400 text-2xl mb-6 font-bold">Visit</h4>
            <ul className="text-text-dark">
              {services?.content?.map((service, index) => (
                <li
                  key={`${service.dayOfWeek}-${index}`}
                  className={`${poppinsBold.className} mb-3 text-lg`}
                >
                  {service.dayOfWeek}
                  <div>
                    {service.serviceTypes.map((serviceType) => (
                      <div
                        key={`${serviceType.name}`}
                        className={`${poppins.className} font-normal text-base`}
                      >{`${serviceType.name}: ${serviceType.time}`}</div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-12 mb-3 text-text-dark">
              <a
                className="hover:underline"
                href="https://maps.app.goo.gl/tSQBMEk8cV1AhiEg6"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div>60 N Recker Road</div>
                <div>Gilbert, Arizona 85234</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 mx-6">
        <div className="flex justify-end">
          <a
            className="p-4 cursor-pointer"
            title="facebook"
            href="https://www.facebook.com/profile.php?id=100064455289156"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              className="invert"
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
              className="invert"
              src="/social/youtube.svg"
              alt="YouTube"
              width={24}
              height={24}
            />
          </a>
        </div>
        <div className="text-center text-xs text-text-dark">
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
      </div>
    </footer>
  );
};

export default Footer;
