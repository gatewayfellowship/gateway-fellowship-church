import { useState } from "react";
import reader from "../keystatic/reader";
import { Anton } from "next/font/google";
import { Jumbotron } from "../components/Jumbotron";
import { EventsContainer } from "../components/Events";
import Link from "next/link";
import { formatDate } from "../utils/date";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default async function Events() {
  const page = await reader.collections.pages.read("events");
  const events = await reader.collections.events.all();
  const tags = events
    .reduce((acc, event) => {
      if (event.entry.tags) {
        return acc.concat(event.entry.tags);
      }

      return acc;
    }, [] as Array<string>)
    .filter((value, index, array) => array.indexOf(value) === index);

  if (!page) {
    return "LOADING...";
  }

  return (
    <section>
      <Jumbotron
        title={page.title}
        subtitle={page.subtitle}
        imageSrc={page.imageSrc}
      />
      <EventsContainer
        events={events.map((event) => {
          const { content, ...rest } = event.entry;
          console.info("rest", rest);
          return { ...rest, slug: event.slug };
        })}
      />
    </section>
  );
}
