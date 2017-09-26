import {BookFromApi} from './book-from-api';

export class Book implements BookFromApi {
  isbn: string;
  title: string;
  subtitle: string;
  abstract: string;
  author: string;
  numPages: number;
  publisher: { name: string; url: string };

  laodedAt: Date;

  constructor(data: BookFromApi) {
    this.isbn = data.isbn;
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.abstract = data.abstract;
    this.author = data.abstract;
    this.numPages = data.numPages;
    this.publisher = data.publisher;

    this.laodedAt = new Date();
  }
}
