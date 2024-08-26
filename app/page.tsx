import reader from "./keystatic/reader";
import Image from "next/image";
import { Source_Serif_4, Poppins } from "next/font/google";
import { Jumbotron } from "./components/Jumbotron";
import { ContentContainer } from "./components/ContentContainer";
import { ButtonLink } from "./components/ButtonLink";
import Announcement from "./components/Annoucement";

const sourceSerif = Source_Serif_4({ weight: "900", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default async function Home() {
  const page = await reader.collections.pages.read("homepage");
  const distinctives = await reader.singletons.distinctives.read();
  const currentSermon = await reader.singletons.sermonSeries.read();

  if (!page) {
    return "LOADING...";
  }
  const title = page.title;
  const jesusIndex = title.toLowerCase().indexOf("jesus");
  const newTitle = [
    title.slice(0, jesusIndex),
    <span className="invert dark:invert-0 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-600 dark:from-primary-500 dark:to-secondary-500">
      Jesus
    </span>,
    title.slice(jesusIndex + 5),
  ];

  return (
    <section>
      <Announcement />
      <Jumbotron
        title={page.title}
        imageSrc={page.imageSrc}
        className="jumbotron-main-page invert dark:invert-0"
      >
        <div
          className={`${sourceSerif.className} small-caps flex flex-col md:flex-row justify-center items-center font-extrabold text-text-dark w-full z-10`}
        >
          <div>
            <Image
              className="basis-1/2"
              alt="Gateway Fellowship Symbol"
              src="/White_Circle_Text.png"
              height={600}
              width={600}
            />
          </div>
          <h1 className="basis-1/2 text-zinc-300 text-5xl md:text-7xl sm:ml-8 text-left leading-relaxed sm:leading-relaxed md:leading-relaxed tracking-wide">
            {newTitle}
          </h1>
        </div>
      </Jumbotron>
      <ContentContainer>
        {currentSermon && (
          <div>
            <h3 className="text-5xl text-accent-600 dark:text-accent-300 mb-8 small-caps">
              Current Series
            </h3>
            <div className="flex flex-col justify-center items-center">
              <Image
                className="shadow-xl rounded-xl my-8"
                src={currentSermon.image}
                width={1000}
                height={400}
                alt="current-sermon-series"
              />
              <div className="my-8">
                <ButtonLink to="/sermons" text="Sermon Library" primary />
              </div>
            </div>
          </div>
        )}
        <hr className="my-12 sm:my-24 border-secondary-200" />
        {distinctives && (
          <div>
            <h3 className="text-5xl text-accent-600 dark:text-accent-300 mb-8 small-caps">
              {distinctives.title}
            </h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 pt-8 pb-0 sm:py-8">
              {distinctives?.content.map((value, index, arr) => (
                <div
                  key={index}
                  className="flex flex-col mb-8 md:mb-0 md:basis-80 flex-shrink-0 font-bold p-6 rounded-xl bg-accent-50 dark:bg-accent-800"
                >
                  <h4
                    className={`${poppins.className} text-4xl text-accent-600 dark:text-accent-300 mb-10`}
                  >{`${index + 1 <= 9 ? 0 : ""}${index + 1}`}</h4>
                  <p className="mb-8">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </ContentContainer>
    </section>
  );
}
