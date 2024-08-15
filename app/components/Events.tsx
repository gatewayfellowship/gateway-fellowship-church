"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { formatDate } from "../utils/date";

export const EventsContainer = ({ events }) => {
  const [displayedEvents, setDisplayedEvents] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    const tags = events
      .reduce((acc, event) => {
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
    <div className="my-12 mx-4 sm:m-12">
      <h3 className="text-5xl font-black mb-8 small-caps">Upcoming Events</h3>
      <div className="flex">
        <div
          onClick={() => setSelectedTag("")}
          className="m-2 py-2 px-4 rounded-xl dark:bg-gray-700 dark:hover:bg-gray-500 cursor-pointer"
        >
          all
        </div>
        {tags.map((tag) => (
          <div
            onClick={() => setSelectedTag(tag)}
            className="m-2 py-2 px-4 rounded-xl dark:bg-gray-700 dark:hover:bg-gray-500 cursor-pointer"
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 pt-8 pb-0 sm:py-8 mx-16">
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
              className="bg-gray-100 dark:bg-zinc-900 border rounded-lg border-solid border-zinc-100 py-4 px-8 hover:bg-gray-200 hover:dark:bg-zinc-800 hover:shadow-md transition-all"
            >
              <div>
                <h3 className="text-xl mb-4">{title}</h3>
                <p>{formatDate(date)}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
