import reader from "./keystatic/reader";
import Image from "next/image";
import { Source_Serif_4, Poppins } from "next/font/google";
import "./jumbotron.css";
import { Jumbotron } from "./components/Jumbotron";

const sourceSerif = Source_Serif_4({ weight: "900", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default async function Home() {
  const page = await reader.collections.pages.read("homepage");
  const distinctives = await reader.singletons.distinctives.read();
  const currentSermon = await reader.singletons.sermonSeries.read();

  if (!page) {
    return "LOADING...";
  }

  return (
    <section>
      {/* Reusing Jumbotron styles here, this a specialized version of the Jumbotron component */}
      <Jumbotron
        title={page.title}
        imageSrc={page.imageSrc}
        className="jumbotron-main-page"
      >
        <div
          className={`${sourceSerif.className} small-caps flex flex-col md:flex-row justify-center items-center font-extrabold text-white w-full z-10`}
        >
          <div className="basis-1/2">
            <Image
              alt="Gateway Fellowship Symbol"
              src="/Main_Anchor_White.png"
              height={500}
              width={500}
            />
          </div>
          <h1 className="basis-1/2 text-5xl md:text-7xl sm:ml-8 text-left leading-relaxed sm:leading-relaxed md:leading-relaxed tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-700">
            {page.title}
          </h1>
        </div>
      </Jumbotron>
      {currentSermon && (
        <div className="mx-4 mt-24 sm:m-12">
          <h3 className="text-5xl font-black mb-8 small-caps">
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
            <a href="sermons" className="text-lg font-semibold my-8">
              <div className="py-2 px-8 text-gray-50 bg-zinc-700 hover:bg-zinc-800 rounded-lg cursor-pointer hover:shadow-lg transition-all">
                Sermon Library
              </div>
            </a>
          </div>
        </div>
      )}
      <hr className="my-12 sm:my-24" />
      {distinctives && (
        <div className="my-12 mx-4 sm:m-12">
          <h3 className="text-5xl font-black mb-8 small-caps">
            {distinctives.title}
          </h3>
          <div className="flex md:flex-row flex-col flex-nowrap overflow-x-auto pt-8 pb-0 sm:py-8">
            {distinctives?.content.map((value, index, arr) => (
              <div
                key={index}
                className={`flex flex-col mb-8 md:mb-0 md:basis-80 flex-shrink-0 md:border-r-zinc-400 font-bold px-6 ${
                  arr.length - 1 === index ? "" : "md:border-r"
                }`}
              >
                <h4
                  className={`${poppins.className} text-4xl text-gray-400 mb-10`}
                >{`${index + 1 <= 9 ? 0 : ""}${index + 1}`}</h4>
                <p className="mb-8">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
