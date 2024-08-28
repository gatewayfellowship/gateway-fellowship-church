import React from "react";
import { Source_Serif_4 } from "next/font/google";
import "../jumbotron.css";

const soureSerif = Source_Serif_4({ weight: "400", subsets: ["latin"] });

export const Jumbotron = ({
  children,
  imageSrc,
  subtitle,
  title,
  className = "",
}: {
  imageSrc: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
  subtitle?: string;
}) => (
  <div
    className={`${soureSerif.className} jumbotron ${className} relative flex flex-col items-center justify-center text-center p-4 sm:p-12 mx-4 mb-12 mt-0 rounded-3xl`}
    style={{
      backgroundImage: `url(${imageSrc})`,
    }}
  >
    {children ?? (
      <React.Fragment>
        <h1 className="text-5xl text-text-dark z-10 sm:leading-relaxed small-caps mb-8 sm:mb-4">
          {title}
        </h1>
        {subtitle && (
          <h6 className="text-xl text-text-dark z-10 tracking-widest">
            {subtitle}
          </h6>
        )}
      </React.Fragment>
    )}
  </div>
);
