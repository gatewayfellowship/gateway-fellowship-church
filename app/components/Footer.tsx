import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import reader from "../keystatic/reader";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

export const Footer = async () => {
  const services = await reader.singletons.services.read();
  const contactItems = await reader.singletons.contactItems.read();

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
                <a
                  className="hover:underline"
                  href={`tel:${contactItems?.phoneNumber.replace(/[-.]/g, "")}`}
                >
                  {contactItems?.phoneNumber}
                </a>
              </li>
              <li className="mb-3">
                email:{" "}
                <a
                  className="hover:underline"
                  href={`mailto:${contactItems?.email}`}
                >
                  {contactItems?.email}
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
                href={contactItems?.googleMapsLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div>{contactItems?.addressLine1}</div>
                <div>{contactItems?.addressLine2}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 mx-6">
        <div className="flex justify-center gap-8 md:gap-4">
          {contactItems?.instagramLink && (
            <a
              className="p-4 cursor-pointer"
              title="instagram"
              href={contactItems.instagramLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                className="invert"
                src="/social/instagram.svg"
                alt="Instagram"
                width={40}
                height={40}
              />
            </a>
          )}
          {contactItems?.facebookLink && (
            <a
              className="p-4 cursor-pointer"
              title="facebook"
              href={contactItems.facebookLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                className="invert"
                src="/social/facebook.svg"
                alt="Facebook"
                width={40}
                height={40}
              />
            </a>
          )}
          {contactItems?.youtubeLink && (
            <a
              className="p-4 cursor-pointer"
              title="youtube"
              href={contactItems.youtubeLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                className="invert"
                src="/social/youtube.svg"
                alt="YouTube"
                width={40}
                height={40}
              />
            </a>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-16 mt-16 mb-12">
          <Image
            className="invert"
            src="/associations/SBC_Logo.png"
            alt="Southern Baptist Convention"
            width={120}
            height={60}
          />
          <Image
            src="/associations/AMN_Logo.png"
            alt="Arizona Mission Network"
            width={120}
            height={60}
          />
        </div>
        <div className="text-center text-xs text-text-dark">
          Copyright © 2024 - {new Date().getFullYear()} Gateway Fellowship. All
          rights reserved.
          <p className="mb-12">
            Created by{" "}
            <a
              className="hover:underline"
              href="https://marktkimball.github.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Mark Kimball
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
