export interface BookFromApi {
  isbn: string;
  title: string;
  subtitle: string;
  abstract: string;
  author: string;
  numPages: number;
  publisher: { name: string; url: string };
}
