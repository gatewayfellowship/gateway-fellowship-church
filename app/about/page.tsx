import reader from "../keystatic/reader";
import Image from "next/image";
import { Jumbotron } from "../components/Jumbotron";
import { ContentContainer } from "../components/ContentContainer";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";

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
      <ContentContainer>
        {beliefs && (
          <div className="my-12">
            <Title text={beliefs.title} />
            {beliefs.content.map((belief) => (
              <div key={belief.title} className="mb-16">
                <Subtitle text={belief.title} />
                <p>{belief.description}</p>
              </div>
            ))}
          </div>
        )}
        {leadership && (
          <div className="my-12">
            <Title text={leadership.title} />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 pt-8 pb-0 sm:py-8">
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
      </ContentContainer>
    </main>
  );
}
