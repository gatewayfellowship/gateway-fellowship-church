import reader from "../keystatic/reader";
import { Jumbotron } from "../components/Jumbotron";
import { ContentContainer } from "../components/ContentContainer";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";

export default async function ImNew() {
  const page = await reader.collections.pages.read("new");
  const services = await reader.singletons.services.read();
  const thingsToKnowItems = await reader.singletons.thingsToKnow.read();

  if (!page) {
    return "LOADING...";
  }

  return (
    <main>
      <Jumbotron title={page.title} imageSrc={page.imageSrc} />
      <ContentContainer>
        <div className="mt-24 mb-36">
          <Title text="Service Times" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {services?.content?.map((service, index) => (
              <div
                key={`${service.dayOfWeek}-${index}`}
                className="mb-12 last:mb-0"
              >
                <Subtitle text={service.dayOfWeek} />
                {service.serviceTypes.map(({ name, time, description }) => (
                  <div key={name} className="text-lg mb-4">
                    <p>
                      {name} at {time}
                    </p>
                    {description && (
                      <p className="whitespace-pre-wrap mt-8">{description}</p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="my-36">
          {thingsToKnowItems && (
            <div className="my-24">
              <Title text={thingsToKnowItems.title} />
              {thingsToKnowItems.content.map((item) => (
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
