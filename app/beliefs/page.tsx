import reader from "../keystatic/reader";
import { Jumbotron } from "../components/Jumbotron";
import { ContentContainer } from "../components/ContentContainer";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";

export default async function Beliefs() {
  const page = await reader.collections.pages.read("beliefs");
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
      </ContentContainer>
    </main>
  );
}
