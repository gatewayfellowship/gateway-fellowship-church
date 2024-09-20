import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "700", subsets: ["latin"] });

export const Subtitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => (
  <h3
    className={`${poppins.className} ${className} text-2xl mb-2 text-secondary-500 dark:text-secondary-300`}
  >
    {text}
  </h3>
);
