import Link from "next/link";

export const ButtonLink = ({
  text,
  to,
  className = "",
  isExternal = false,
  primary = true,
}: {
  text: string;
  to: string;
  className?: string;
  isExternal?: boolean;
  primary?: boolean;
}) => {
  const primaryButton = (
    <div className="text-lg font-semibold py-2 px-8 text-primary-50 dark:text-primary-900 bg-primary-500 dark:bg-primary-400 hover:bg-primary-600 dark:hover:bg-primary-500 border-2 border-primary-500 hover:border-primary-600 dark:border-primary-400 dark:hover:border-primary-500 rounded-lg cursor-pointer hover:shadow-md transition-all">
      {text}
    </div>
  );

  const secondaryButton = (
    <div className="text-lg font-semibold py-2 px-8 text-primary-500 border-primary-500 hover:text-primary-50 hover:bg-primary-500 hover:border-primary-500 dark:text-primary-400 dark:border-primary-400 hover:dark:text-primary-900 hover:dark:border-primary-400 hover:dark:bg-primary-400 rounded-lg cursor-pointer border-2 hover:shadow-md transition-all">
      {text}
    </div>
  );

  if (isExternal) {
    return (
      <a
        className={className}
        href={to}
        rel="noopener noreferrer"
        target="_blank"
      >
        {primary ? primaryButton : secondaryButton}
      </a>
    );
  }

  return (
    <Link className={className} href={to}>
      {primary ? primaryButton : secondaryButton}
    </Link>
  );
};
