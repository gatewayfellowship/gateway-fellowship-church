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
          <div key={sermon.title}>
            <a href={sermon.file}>
              <Image
                className="shadow-md rounded-xl mb-8 dark:shadow-zinc-700 object-cover w-full aspect-video hover:shadow-lg dark:hover:shadow-zinc-700 transition-shadow"
                src={sermonSeries.imageSrc || "/bible-placeholder.jpg"}
                width={400}
                height={250}
                alt="current-sermon-series"
              />
            </a>
            <a href={sermon.file}>
              <Subtitle
                text={sermon.title}
                className="inline-block mb-0 hover:underline"
              />
            </a>
            <div className="flex flex-row items-center justify-between">
              <p className="my-2">{sermon.speaker}</p>
              <p className="my-2">{formatDate(sermon.date, false)}</p>
            </div>
            <a
              className={`${poppinsBold.className} font-bold hover:underline`}
              href={sermon.file}
            >
              Listen &gt;
            </a>
          </div>
        ))}
      </section>
    </ContentContainer>
  );
}
