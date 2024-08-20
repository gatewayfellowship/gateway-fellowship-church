"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { formatDate } from "../utils/date";
import { Title } from "./Title";
import { ContentContainer } from "./ContentContainer";

interface Event {
  address: string;
  date: string;
  location: string;
  slug: string;
  tags: readonly string[];
  title: string;
}

export const EventsContainer = ({ events }: { events: Array<Event> }) => {
  const [displayedEvents, setDisplayedEvents] = useState<Array<Event>>([]);
  const [tags, setTags] = useState<Array<string>>([]);
  const [selectedTag, setSelectedTag] = useState("");
  const today = useMemo(() => new Date().toISOString(), []);

  useEffect(() => {
    const tags = events
      .reduce((acc: Array<string>, event) => {
        if (event.tags) {
          return acc.concat(event.tags);
        }

        return acc;
      }, [] as Array<string>)
      .filter((value, index, array) => array.indexOf(value) === index);

    setTags(tags);
  }, [events]);

  useEffect(() => {
    if (!selectedTag) {
      setDisplayedEvents(events);
    } else {
      const filteredEvents = events.filter((event) => {
        return event.tags.includes(selectedTag);
      });
      setDisplayedEvents(filteredEvents);
    }
  }, [events, selectedTag]);

  return (
    <ContentContainer>
      <Title text="Events" />
      <div className="flex items-center">
        Filter:
        <div
          onClick={() => setSelectedTag("")}
          className="m-2 py-2 px-4 rounded-xl bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-500 cursor-pointer"
        >
          all
        </div>
        {tags.map((tag) => (
          <div
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className="m-2 py-2 px-4 rounded-xl bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-500 cursor-pointer"
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 pt-8 pb-0 sm:py-8 mx-4 sm:mx-16">
        {displayedEvents
          .toSorted((a, z) => {
            if (a.date >= z.date) {
              return -1;
            }

            if (a.date <= z.date) {
              return 1;
            }

            return 0;
          })
          .map(({ title, date, slug }) => (
            <Link
              key={slug}
              href={`/events/${encodeURIComponent(slug)}`}
              className="bg-zinc-100 dark:bg-zinc-900 border rounded-lg border-solid border-zinc-100 py-4 px-8 hover:bg-zinc-200 hover:dark:bg-zinc-800 hover:shadow-md transition-all"
            >
              <div className={today > date ? "opacity-40" : ""}>
                <h3 className="text-xl mb-4">{title}</h3>
                <p>{formatDate(date)}</p>
              </div>
            </Link>
          ))}
      </div>
    </ContentContainer>
  );
};
