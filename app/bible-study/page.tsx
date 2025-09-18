import React from "react";
import Markdoc from "@markdoc/markdoc";
import reader from "@/keystatic/reader";
import { Jumbotron } from "@/components/Jumbotron";
import { ContentContainer } from "@/components/ContentContainer";

export default async function BibleStudy() {
  const page = await reader.collections.pages.read("bible-study");

  if (!page) return "LOADING...";

  const { node } = await page.content();
  const renderable = Markdoc.transform(node);

  return (
    <main>
      <Jumbotron title={page.title} imageSrc={page.imageSrc} />
      <ContentContainer>
        {Markdoc.renderers.react(renderable, React)}
      </ContentContainer>
    </main>
  );
}
