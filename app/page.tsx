import reader from "./keystatic/reader";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { ContentContainer } from "./components/ContentContainer";
import { ButtonLink } from "./components/ButtonLink";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

export default async function Home() {
  const page = await reader.collections.pages.read("homepage");
  const distinctives = await reader.singletons.distinctives.read();
  const currentSermon = await reader.singletons.currentSeries.read();
  const welcomeItems = await reader.singletons.welcomeItems.read();

  if (!page) {
    return "LOADING...";
  }

  return (
    <section>
      <div className="mx-4 mb-12 mt-0">
        <div className="relative rounded-3xl overflow-hidden w-full h-full">
          <video
            playsInline
            autoPlay
            muted
            loop
            poster="/Gilbert_Drone_Preview.jpg"
            className="object-fill w-full h-full"
          >
            <source src="/Gateway_Loop.webm" type="video/webm" />
          </video>
          <div
            className={`${poppinsBold.className} bg-opacity-30 bg-black absolute sm:p-12 top-0 left-0 right-0 bottom-0 small-caps flex flex-col md:flex-row justify-center items-center font-extrabold text-text-dark w-full z-10`}
          >
            <Image
              className="shrink h-auto w-auto max-h-full sm:max-h-[150%] min-w-0"
              alt="Gateway Fellowship Symbol"
              src="/White_Circle_Text.png"
              height={600}
              width={600}
            />
            <h1 className="hidden md:block md:basis-1/2 min-w-0 p-12 sm:p-0 text-4xl md:text-5xl lg:text-6xl md:ml-8 text-left leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed tracking-wide">
              {page.title}
            </h1>
          </div>
        </div>
      </div>
      <h1 className="font-extrabold mx-4 my-12 text-center md:hidden text-4xl leading-relaxed tracking-wide">
        {page.title}
      </h1>
      <hr className="md:hidden my-12 mx-24 border-secondary-200" />
      <ContentContainer>
        {welcomeItems && (
          <div>
            <h3 className="text-5xl text-accent-600 dark:text-accent-300 mb-16 small-caps">
              {welcomeItems.title}
            </h3>
            <div className="pt-8 pb-0 sm:py-8">
              {welcomeItems?.content.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex justify-center mb-16 sm:mb-24 md:mb-48 last-of-type:mb-0 flex-col-reverse md:flex-row ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex flex-col mt-12 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <h4 className="text-4xl italic mb-8 font-bold">
                      {item.title}
                    </h4>
                    <p className="sm:max-w-md text-xl text-zinc-800 dark:text-zinc-400 whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                  <Image
                    className="rounded-2xl shrink w-auto aspect-video md:aspect-[4/3] lg:aspect-[5/3] object-cover min-w-0"
                    src={item.image}
                    height={300}
                    width={500}
                    alt={item.title}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {currentSermon && (
          <>
            <hr className="my-12 sm:my-24 border-secondary-200" />
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
          </>
        )}
        {distinctives && (
          <>
            <hr className="my-12 sm:my-24 border-secondary-200" />
            <div>
              <h3 className="text-5xl text-accent-600 dark:text-accent-300 mb-8 small-caps">
                {distinctives.title}
              </h3>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 pt-8 pb-0 sm:py-8">
                {distinctives?.content.map((value, index) => (
                  <div
                    key={index}
                    className="flex flex-col mb-8 md:mb-0 md:basis-80 flex-shrink-0 font-bold p-6 rounded-xl bg-zinc-100 dark:bg-zinc-800"
                  >
                    <h4
                      className={`${poppins.className} text-4xl text-accent-600 dark:text-accent-300 mb-10`}
                    >{`${index + 1 <= 9 ? 0 : ""}${index + 1}`}</h4>
                    <p className="mb-8">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </ContentContainer>
    </section>
  );
}
