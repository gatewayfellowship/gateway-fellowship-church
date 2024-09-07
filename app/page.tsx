import reader from "./keystatic/reader";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { ContentContainer } from "./components/ContentContainer";
import { ButtonLink } from "./components/ButtonLink";
import Announcement from "./components/Annoucement";

const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default async function Home() {
  const page = await reader.collections.pages.read("homepage");
  const distinctives = await reader.singletons.distinctives.read();
  const currentSermon = await reader.singletons.sermonSeries.read();

  if (!page) {
    return "LOADING...";
  }

  return (
    <section>
      <Announcement />
      <div className="rounded-3xl mx-4 mb-12 mt-0 p-4 sm:p-12 bg-[linear-gradient(135deg,_#fdfcfb_0%,_#e2d1c3_100%)] dark:bg-[linear-gradient(to_right,_#434343_0%,_#000_100%)]">
        <div
          className={`${poppinsBold.className} small-caps flex flex-col md:flex-row justify-center items-center font-extrabold text-text-dark w-full z-10 invert dark:invert-0`}
        >
          <Image
            className="basis-1/2 shrink h-auto w-auto min-w-0"
            alt="Gateway Fellowship Symbol"
            src="/White_Circle_Text.png"
            height={600}
            width={600}
          />
          <h1 className="basis-1/2 min-w-0 text-4xl md:text-6xl sm:ml-8 text-left leading-relaxed sm:leading-relaxed md:leading-relaxed tracking-wide">
            {page.title}
          </h1>
        </div>
      </div>
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
              {distinctives?.content.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col mb-8 md:mb-0 md:basis-80 flex-shrink-0 font-bold p-6 rounded-xl bg-stone-100 dark:bg-stone-800"
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
