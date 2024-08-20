import reader from "../keystatic/reader";
import { Jumbotron } from "../components/Jumbotron";
import { EventsContainer } from "../components/Events";

export default async function Events() {
  const page = await reader.collections.pages.read("events");
  const events = await reader.collections.events.all();

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
          return { ...rest, slug: event.slug };
        })}
      />
    </section>
  );
}
