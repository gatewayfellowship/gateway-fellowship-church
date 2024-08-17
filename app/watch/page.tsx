import reader from "../keystatic/reader";
import { Anton } from "next/font/google";
import { Jumbotron } from "../components/Jumbotron";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default async function Watch() {
  const page = await reader.collections.pages.read("watch");

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
      <section className="mx-4 my-24 sm:m-12">
        <h3 className="text-5xl font-black mb-8 small-caps">Watch Live</h3>
        <div className="sm:w-4/5 my-0 mx-auto">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dNC8JATXQk8?si=1-1NkQB1u8ARB4qY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <a
          href="https://www.youtube.com/@gatewayfellowshipsbc8663"
          className="block text-lg font-semibold my-8 mx-auto w-fit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="py-2 px-8 text-gray-50 bg-zinc-700 hover:bg-zinc-800 rounded-lg cursor-pointer hover:shadow-lg transition-all">
            Watch on Youtube
          </div>
        </a>
      </section>
    </main>
  );
}
