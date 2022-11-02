import { StoredBooks } from './bookData.js';

export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = StoredBooks.length;
  }
}