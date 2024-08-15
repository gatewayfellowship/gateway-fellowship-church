export const formatDate = (isoDateString: string, withTime = true) => {
  const date = new Date(isoDateString);

  // Options for formatting the date
  const options: Intl.DateTimeFormatOptions = withTime
    ? {
        day: "numeric",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        month: "long",
        year: "numeric",
      }
    : {
        day: "numeric",
        month: "long",
        year: "numeric",
      };

  // Format the date using Intl.DateTimeFormat
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
