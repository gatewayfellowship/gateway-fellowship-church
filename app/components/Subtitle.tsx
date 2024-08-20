import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "700", subsets: ["latin"] });

export const Subtitle = ({ text }: { text: string }) => (
  <h3
    className={`${poppins.className}  text-2xl mb-2 text-zinc-800 dark:text-zinc-300`}
  >
    {text}
  </h3>
);
