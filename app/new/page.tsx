import reader from "../keystatic/reader";
import { Jumbotron } from "../components/Jumbotron";
import { ContentContainer } from "../components/ContentContainer";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";

export default async function ImNew() {
  const page = await reader.collections.pages.read("new");
  const services = await reader.singletons.services.read();
  const whatToExpectItems = await reader.singletons.whatToExpect.read();
  const thingsToKnowItems = await reader.singletons.thingsToKnow.read();

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
        <div className="mt-24 mb-36">
          <Title text="Service Times" />
          {/* <hr className="mt-8 mb-12" /> */}
          {services?.content?.map((service, index) => (
            <div
              key={`${service.dayOfWeek}-${index}`}
              className="text-3xl mb-3 text-center"
            >
              {`${service.dayOfWeek} at ${service.time}`}
            </div>
          ))}
        </div>
        <div className="my-36">
          {whatToExpectItems && (
            <div className="my-24">
              <Title text={whatToExpectItems.title} />
              {whatToExpectItems.content.map((item) => (
                <div key={item.title} className="mb-12">
                  <Subtitle text={item.title} />
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="my-36">
          {thingsToKnowItems && (
            <div className="my-24">
              <Title text={thingsToKnowItems.title} />
              {thingsToKnowItems.content.map((item) => (
                <div key={item.title} className="mb-12">
                  <Subtitle text={item.title} />
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </ContentContainer>
    </main>
  );
}
