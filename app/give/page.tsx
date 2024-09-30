import React from "react";
import reader from "../keystatic/reader";
import { Jumbotron } from "../components/Jumbotron";
import { ContentContainer } from "../components/ContentContainer";
import { ButtonLink } from "../components/ButtonLink";
import { Subtitle } from "../components/Subtitle";

export default async function Give() {
  const page = await reader.collections.pages.read("give");
  const givingOptions = await reader.singletons.giveOptions.read();

  if (!page) {
    return "LOADING...";
  }

  return (
    <main>
      <Jumbotron title={page.title} imageSrc={page.imageSrc} />
      <ContentContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 my-16">
          {givingOptions?.content.map((giveOption) => (
            <div key={giveOption.title}>
              <Subtitle text={giveOption.title} />
              <p className="whitespace-pre-wrap mb-8">
                {giveOption.description}
              </p>
              {giveOption.url && (
                <ButtonLink
                  isExternal
                  primary={giveOption.isPreferred}
                  text="Give"
                  className="inline-block"
                  to={giveOption.url}
                />
              )}
            </div>
          ))}
        </div>
      </ContentContainer>
    </main>
  );
}
