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
  const currentSermon = await reader.singletons.sermonSeries.read();
  const welcomeItems = await reader.singletons.welcomeItems.read();

  if (!page) {
    return "LOADING...";
  }

  return (
    <section>
      <div className="rounded-3xl mx-4 mb-12 mt-0 sm:p-12 bg-[linear-gradient(to_right,_#434343_0%,_#000_100%)]">
        <div
          className={`${poppinsBold.className} small-caps flex flex-col md:flex-row justify-center items-center font-extrabold text-text-dark w-full z-10`}
        >
          <Image
            className="shrink h-auto w-auto min-w-0"
            alt="Gateway Fellowship Symbol"
            src="/White_Circle_Text.png"
            height={600}
            width={600}
          />
          <h1 className="md:basis-1/2 min-w-0 text-4xl p-12 sm:p-0 md:text-6xl md:ml-8 text-left leading-relaxed sm:leading-relaxed md:leading-relaxed tracking-wide">
            {page.title}
          </h1>
        </div>
      </div>
      <ContentContainer>
        {welcomeItems && (
          <div>
            <h3 className="text-5xl text-accent-600 dark:text-accent-300 mb-16 small-caps">
              Welcome to Gateway Fellowship
            </h3>
            <div className="pt-8 pb-0 sm:py-8">
              {welcomeItems?.content.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex justify-center mb-16 sm:mb-24 md:mb-48 flex-col-reverse md:flex-row ${
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
                    <p className="max-w-md text-xl text-stone-800">
                      {item.description}
                    </p>
                  </div>
                  <Image
                    className="rounded-2xl shrink h-auto w-auto min-w-0"
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
          </>
        )}
      </ContentContainer>
    </section>
  );
}
