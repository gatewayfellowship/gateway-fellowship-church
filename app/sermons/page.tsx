import reader from "../keystatic/reader";
import { Anton, Source_Serif_4 } from "next/font/google";
import { Jumbotron } from "../components/Jumbotron";
import { formatDate } from "../utils/date";
import { ContentContainer } from "../components/ContentContainer";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const sourceSerif = Source_Serif_4({ weight: "700", subsets: ["latin"] });

export default async function Sermons() {
  const page = await reader.collections.pages.read("sermons");
  const sermons = await reader.singletons.sermons.read();

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
      {sermons && (
        <ContentContainer>
          {sermons.content
            .toSorted((a, z) => {
              if (a.date >= z.date) {
                return -1;
              }

              if (a.date <= z.date) {
                return 1;
              }

              return 0;
            })
            .map((sermon) => (
              <div
                key={sermon.title}
                className="grid sm:grid-cols-3 grid-cols-1 mb-8 border-t pt-4 first:border-0 border-text-light dark:border-text-dark"
              >
                <div className="mb-8 sm:mb-0">
                  <h2 className={`${sourceSerif.className} text-2xl mb-2`}>
                    {sermon.title}
                  </h2>
                  <p className="text-sm mb-2">{sermon.description}</p>
                  <p className="text-sm">{sermon.speaker}</p>
                </div>
                <p className="sm:text-center hidden sm:block">
                  {formatDate(sermon.date, false)}
                </p>
                <a
                  className="ml-auto hover:underline hidden sm:block"
                  href={sermon.file}
                >
                  Download
                </a>
                <div className="sm:hidden flex flex-row">
                  <p className="sm:text-center">
                    {formatDate(sermon.date, false)}
                  </p>
                  <a className="ml-auto hover:underline" href={sermon.file}>
                    Download
                  </a>
                </div>
              </div>
            ))}
        </ContentContainer>
      )}
    </main>
  );
}
