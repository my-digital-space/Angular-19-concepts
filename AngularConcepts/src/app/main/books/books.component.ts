import { Component, inject } from '@angular/core';
import { Book, BookComponent } from "../book/book.component";
import { CommonModule } from '@angular/common';
import { BooksServiceService } from '../books-service/books-service.service';

@Component({
  selector: 'app-books',
  imports: [CommonModule, BookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  booksService: BooksServiceService = inject(BooksServiceService);
  booksList: Book[] = [];

  constructor() { 
    this.booksList = this.booksService.getAllBooks();
  }

}
