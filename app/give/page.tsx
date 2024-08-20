import React from "react";
import Markdoc from "@markdoc/markdoc";
import reader from "../keystatic/reader";
import { Anton } from "next/font/google";
import { Jumbotron } from "../components/Jumbotron";
import { ContentContainer } from "../components/ContentContainer";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default async function Give() {
  const page = await reader.collections.pages.read("give");

  if (!page) {
    return "LOADING...";
  }

  const { node } = await page.content();
  const renderable = Markdoc.transform(node);

  return (
    <main>
      <Jumbotron
        title={page.title}
        subtitle={page.subtitle}
        imageSrc={page.imageSrc}
      />
      <ContentContainer>
        {Markdoc.renderers.react(renderable, React)}
        <div className="flex justify-center my-16">
          <a
            href="https://pushpay.com/g/gatewayfellowship?src=hpp"
            className="text-lg font-semibold"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="py-2 px-8 text-zinc-50 bg-zinc-700 hover:bg-zinc-800 rounded-lg cursor-pointer hover:shadow-lg transition-all inline-block">
              Give
            </div>
          </a>
        </div>
      </ContentContainer>
    </main>
  );
}
