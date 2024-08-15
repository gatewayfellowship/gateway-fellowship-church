import React from "react";
import { Source_Serif_4 } from "next/font/google";
import "../jumbotron.css";

const soureSerif = Source_Serif_4({ weight: "400", subsets: ["latin"] });

export const Jumbotron = ({
  imageSrc,
  title,
  subtitle,
}: {
  imageSrc: string;
  title: string;
  subtitle?: string;
}) => (
  <div
    style={{
      backgroundImage: `url(${imageSrc})`,
    }}
    className={`${soureSerif.className} jumbotron flex relative items-center justify-center text-center w-screen p-12`}
  >
    <div className="text-white w-4/5 z-10">
      <h1 className="text-5xl sm:leading-relaxed small-caps mb-8 sm:mb-4">
        {title}
      </h1>
      {subtitle && <h6 className="text-xl tracking-widest">{subtitle}</h6>}
    </div>
  </div>
);
