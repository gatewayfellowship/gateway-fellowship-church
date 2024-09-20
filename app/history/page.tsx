import React from "react";
import Markdoc from "@markdoc/markdoc";
import reader from "../keystatic/reader";
import { Anton } from "next/font/google";
import { Jumbotron } from "../components/Jumbotron";
import { ContentContainer } from "../components/ContentContainer";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default async function History() {
  const page = await reader.collections.pages.read("history");

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
      </ContentContainer>
    </main>
  );
}
