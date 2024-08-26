import reader from "../keystatic/reader";
import { Jumbotron } from "../components/Jumbotron";
import { ContentContainer } from "../components/ContentContainer";
import { ButtonLink } from "../components/ButtonLink";

export default async function Watch() {
  const page = await reader.collections.pages.read("watch");

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
        <div className="sm:w-4/5 my-0 mx-auto">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dNC8JATXQk8?si=1-1NkQB1u8ARB4qY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <ButtonLink
          isExternal
          primary
          className="block my-8 mx-auto w-fit"
          text="Watch on YouTube"
          to="https://www.youtube.com/@gatewayfellowshipsbc8663"
        />
      </ContentContainer>
    </main>
  );
}
