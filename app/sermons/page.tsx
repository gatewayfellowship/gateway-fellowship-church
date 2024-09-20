import React from "react";
import Image from "next/image";
import Link from "next/link";
import reader from "../keystatic/reader";
import { Jumbotron } from "../components/Jumbotron";
import { ContentContainer } from "../components/ContentContainer";
import { ButtonLink } from "../components/ButtonLink";
import { Subtitle } from "../components/Subtitle";

export default async function Sermons() {
  const page = await reader.collections.pages.read("sermons");
  const sermonSeries = await reader.collections.sermonSeries.all();

  if (!page) {
    return "LOADING...";
  }

  return (
    <main>
      <Jumbotron
        title={page.title}
        subtitle={page.subtitle}
        imageSrc={page.imageSrc}
      />
      <ButtonLink
        isExternal
        primary
        className="block my-8 mx-auto w-fit"
        text="Watch on YouTube"
        to="https://www.youtube.com/@gatewayfellowshipsbc8663"
      />
      {sermonSeries && (
        <ContentContainer>
          <section className="grid gap-10 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {sermonSeries.map((series) => (
              <Link
                key={series.slug}
                href={`/sermons/${encodeURIComponent(series.slug)}`}
                className="cursor-pointer w-full"
              >
                <Image
                  className="shadow-md rounded-xl mb-8 dark:shadow-zinc-700 object-cover w-full aspect-video hover:shadow-lg dark:hover:shadow-zinc-700 transition-shadow"
                  src={series.entry.imageSrc || "/bible-placeholder.jpg"}
                  width={400}
                  height={250}
                  alt="current-sermon-series"
                />
                <Subtitle
                  text={series.entry.title}
                  className="hover:underline"
                />
              </Link>
            ))}
          </section>
        </ContentContainer>
      )}
    </main>
  );
}
