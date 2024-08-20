import React from "react";
import Markdoc from "@markdoc/markdoc";
import reader from "../../keystatic/reader";
import { Poppins } from "next/font/google";
import { formatDate } from "@/app/utils/date";
import Link from "next/link";
import Image from "next/image";
import { ContentContainer } from "@/app/components/ContentContainer";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export async function generateStaticParams() {
  const events = await reader.collections.events.all();

  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetails({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const event = await reader.collections.events.read(`${slug}`);

  if (!event) {
    return "LOADING...";
  }

  const { node } = await event.content();
  const errors = Markdoc.validate(node);
  const renderable = Markdoc.transform(node);

  return (
    <main className="m-16">
      <Link
        href="/events"
        className="font-bold dark:text-zinc-300 dark:hover:text-zinc-400"
      >
        <Image
          className="inline-block dark:invert dark:opacity-80"
          src="/chevron-left.svg"
          alt="Go back"
          height={20}
          width={20}
        />{" "}
        <span>Back</span>
      </Link>
      <ContentContainer>
        <section className="flex items-center my-8 mx-4">
          <div className="max-w-prose">
            <h3 className={`${poppins.className} text-5xl mb-8`}>
              {event.title}
            </h3>
            <p className="mb-4">{formatDate(event.date)}</p>
            <p className="mb-4">Location: {event.location}</p>
            <p>
              Address:{" "}
              <a
                href={`https://maps.google.com/?q=${event.address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 dark:text-zinc-400 dark:hover:text-zinc-500 hover:underline"
              >
                {event.address}
              </a>
            </p>
            <hr className="my-8" />
            {Markdoc.renderers.react(renderable, React)}
          </div>
        </section>
      </ContentContainer>
    </main>
  );
}
