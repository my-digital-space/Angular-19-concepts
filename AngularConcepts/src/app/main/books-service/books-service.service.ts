import { Injectable } from '@angular/core';
import { Book } from '../book/book.component';

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {
  protected books: Book[] = [
    {
      id: 1,
      title: 'Book 1',
      description: 'Description 1',
      author: 'Author 1'
    },
    {
      id: 2,
      title: 'Book 2',
      description: 'Description 2',
      author: 'Author 2'
    },
    {
      id: 3,
      title: 'Book 3',
      description: 'Description 3',
      author: 'Author 3'
    },
    {
      id: 4,
      title: 'Book 4',
      description: 'Description 4',
      author: 'Author 4'
    }
  ];

  constructor() { }

  getAllBooks(): Book[] {
    return this.books;
  }

  getBookById(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }

}
