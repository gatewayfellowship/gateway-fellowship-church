import React from "react";
import { Poppins } from "next/font/google";
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

function getYouTubeEmbedUrl(url: string) {
  // Extract the video ID from a YouTube URL and return the embed URL
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : "";
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
        {sermonSeries.sermons.map((sermon) => {
          const embedUrl = sermon.videoUrl ? getYouTubeEmbedUrl(sermon.videoUrl) : "";

          return (
            <div key={sermon.title} className="w-full">
              {embedUrl ? (
                <div className="aspect-video w-full mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src={embedUrl}
                    title={sermon.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl shadow-md dark:shadow-zinc-700 hover:shadow-lg dark:hover:shadow-zinc-700 transition-shadow"
                  />
                </div>
              ) : (
                <p>No video available</p>
              )}
              <Subtitle text={sermon.title} className="inline-block mb-0 hover:underline" />
              <div className="flex flex-row items-center justify-between">
                <p className="my-2">{sermon.speaker}</p>
                <p className="my-2">{formatDate(sermon.date, false)}</p>
              </div>
            </div>
          );
        })}
      </section>
    </ContentContainer>
  );
}
