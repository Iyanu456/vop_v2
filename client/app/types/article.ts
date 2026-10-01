export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  category: string;
  readingTime: string;
  coverImage?: string;
  coverVariant?: "dark" | "orange" | "light";
};