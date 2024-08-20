import Link from "next/link";

export const ButtonLink = ({
  text,
  to,
  primary = true,
}: {
  text: string;
  to: string;
  primary?: boolean;
}) => {
  if (primary) {
    return (
      <Link href={to} className="text-lg font-semibold">
        <div className="py-2 px-8 text-zinc-50 bg-zinc-700 hover:bg-zinc-800 rounded-lg cursor-pointer hover:shadow-lg transition-all">
          {text}
        </div>
      </Link>
    );
  }

  return (
    <Link href={to} className="text-lg font-semibold">
      <div className="py-2 px-8 text-zinc-900 dark:text-white dark:border-white rounded-lg cursor-pointer border-2 border-zinc-800 hover:bg-zinc-800 hover:text-white hover:shadow-lg transition-all">
        {text}
      </div>
    </Link>
  );
};
