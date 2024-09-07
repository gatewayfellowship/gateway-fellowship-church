import { Source_Serif_4 } from "next/font/google";

const sourceSerif = Source_Serif_4({ weight: "700", subsets: ["latin"] });

export const Title = ({ text }: { text: string }) => (
  <h2
    className={`${sourceSerif.className} text-stone-700 dark:text-text-dark text-5xl text-center border-b-2 border-stone-700 dark:border-text-dark pb-8 mb-12 small-caps`}
  >
    {text}
  </h2>
);
