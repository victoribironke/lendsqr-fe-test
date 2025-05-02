import { type ClassValue, clsx } from "clsx";

export const cn = (...inputs: ClassValue[]) => clsx(inputs);

export const formatDate = (dateString: string | Date) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};
