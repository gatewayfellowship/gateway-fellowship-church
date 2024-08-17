import reader from "../keystatic/reader";
import Image from "next/image";
import { Anton, Source_Serif_4 } from "next/font/google";
import { Jumbotron } from "../components/Jumbotron";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const sourceSerif = Source_Serif_4({ weight: "700", subsets: ["latin"] });

export default async function About() {
  const page = await reader.collections.pages.read("about");
  const leadership = await reader.singletons.leadership.read();
  const beliefs = await reader.singletons.beliefs.read();

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
      {beliefs && (
        <div className="my-12 mx-4 sm:m-12">
          <h3 className="text-5xl font-black mb-8 small-caps">
            {beliefs.title}
          </h3>
          <div className="mx-4 sm:mx-16">
            {beliefs.content.map((belief) => (
              <div key={belief.title} className="mb-16">
                <h4
                  className={`${sourceSerif.className} text-3xl mb-8 text-gray-800 dark:text-gray-300`}
                >
                  {belief.title}
                </h4>
                <p>{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {leadership && (
        <div className="my-12 mx-4 sm:m-12">
          <h3 className="text-5xl font-black mb-8 small-caps">
            {leadership.title}
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 pt-8 pb-0 sm:py-8 mx-4 sm:mx-16">
            {leadership.content.map((leader) => (
              <div
                key={leader.name}
                className="flex items-start sm:items-center flex-col"
              >
                <Image
                  className="rounded-lg mb-4"
                  src={leader.photoSrc}
                  width={200}
                  height={300}
                  alt={leader.name}
                />
                <div className="mb-4 text-2xl font-bold">{leader.name}</div>
                <div className="mb-4">{leader.position}</div>
                <div className="mb-4">{leader.bio}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
