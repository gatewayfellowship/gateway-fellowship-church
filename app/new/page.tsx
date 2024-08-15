import reader from "../keystatic/reader";
import Image from "next/image";
import { Anton } from "next/font/google";
import { Jumbotron } from "../components/Jumbotron";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default async function ImNew() {
  const page = await reader.collections.pages.read("new");

  if (!page) {
    return "LOADING...";
  }

  return (
    <Jumbotron
      title={page.title}
      subtitle={page.subtitle}
      imageSrc={page.imageSrc}
    />
  );
}
