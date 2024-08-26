import React from "react";
import Markdoc from "@markdoc/markdoc";
import reader from "../keystatic/reader";
import { Anton } from "next/font/google";
import { Jumbotron } from "../components/Jumbotron";
import { ContentContainer } from "../components/ContentContainer";
import { ButtonLink } from "../components/ButtonLink";

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
          <ButtonLink
            isExternal
            primary
            text="Give"
            to="https://pushpay.com/g/gatewayfellowship?src=hpp"
          />
        </div>
      </ContentContainer>
    </main>
  );
}
