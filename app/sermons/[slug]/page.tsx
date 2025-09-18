import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { ContentContainer } from "@/app/components/ContentContainer";
import { Subtitle } from "@/app/components/Subtitle";
import { formatDate } from "@/app/utils/date";
import reader from "../../keystatic/reader";

const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

export async function generateStaticParams() {
  const sermonSeries = await reader.collections.sermonSeries.all();

  return sermonSeries.map((series) => ({
    slug: series.slug,
  }));
}

export default async function EventDetails({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const sermonSeries = await reader.collections.sermonSeries.read(slug);

  if (!sermonSeries) {
    return "Loading...";
  }

  return (
    <ContentContainer>
      <section className="grid gap-10 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sermonSeries.sermons.map((sermon) => (
          <div key={sermon.title} className="w-full">
            {/* Series image */}
            <Image
              className="shadow-md rounded-xl mb-4 dark:shadow-zinc-700 object-cover w-full aspect-video hover:shadow-lg dark:hover:shadow-zinc-700 transition-shadow"
              src={sermonSeries.imageSrc || "/bible-placeholder.jpg"}
              width={400}
              height={250}
              alt={sermon.title}
            />

            {/* Sermon title */}
            <Subtitle
              text={sermon.title}
              className="inline-block mb-2 hover:underline"
            />

            {/* Speaker & date */}
            <div className="flex flex-row items-center justify-between mb-2">
              <p className="my-0">{sermon.speaker}</p>
              <p className="my-0">{formatDate(sermon.date, false)}</p>
            </div>

            {/* YouTube Embed */}
            {sermon.videoUrl && (
              <iframe
                width="100%"
                height="250"
                src={sermon.videoUrl}
                title={sermon.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-md mb-4"
              />
            )}

            {/* Optional external link */}
            <a
              className={`${poppinsBold.className} font-bold hover:underline`}
              href={sermon.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube &gt;
            </a>
          </div>
        ))}
      </section>
    </ContentContainer>
  );
}
