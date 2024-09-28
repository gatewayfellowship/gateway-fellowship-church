import reader from "../keystatic/reader";
import Image from "next/image";
import { Jumbotron } from "../components/Jumbotron";
import { ContentContainer } from "../components/ContentContainer";
import { Title } from "../components/Title";

export default async function Staff() {
  const page = await reader.collections.pages.read("staff");
  const leadership = await reader.singletons.leadership.read();

  if (!page) {
    return "LOADING...";
  }

  return (
    <main>
      <Jumbotron title={page.title} imageSrc={page.imageSrc} />
      <ContentContainer>
        {leadership && (
          <div className="my-12">
            <Title text={leadership.title} />
            <div
              className={`grid gap-8 pt-8 pb-0 sm:py-8 grid-cols-1 ${
                leadership.content.length >= 3
                  ? "sm:grid-cols-2 lg:grid-cols-3"
                  : leadership.content.length === 2
                  ? "sm:grid-cols-2"
                  : ""
              }`}
            >
              {leadership.content.map((leader) => (
                <div key={leader.name} className="flex items-center flex-col">
                  <Image
                    className="rounded-lg mb-4"
                    src={leader.photoSrc}
                    width={200}
                    height={300}
                    alt={leader.name}
                  />
                  <div className="mb-4 text-2xl font-bold">{leader.name}</div>
                  <div className="mb-4">{leader.position}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ContentContainer>
    </main>
  );
}
