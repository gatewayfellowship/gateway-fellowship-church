import reader from "../keystatic/reader";
import { Jumbotron } from "../components/Jumbotron";
import { ContentContainer } from "../components/ContentContainer";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";

export default async function Ministries() {
  const page = await reader.collections.pages.read("ministries");
  const ministries = await reader.singletons.ministries.read();

  if (!page) {
    return "LOADING...";
  }

  return (
    <main>
      <Jumbotron title={page.title} imageSrc={page.imageSrc} />
      <ContentContainer>
        <div className="my-36">
          {ministries && (
            <div className="my-24">
              {ministries.content.map((item) => (
                <div key={item.title} className="mb-12">
                  <Subtitle text={item.title} />
                  <p className="whitespace-pre-line">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </ContentContainer>
    </main>
  );
}
