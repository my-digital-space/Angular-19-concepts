import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksServiceService } from '../books-service/books-service.service';
import { Book } from '../book/book.component';

@Component({
  selector: 'app-book-buy',
  imports: [],
  templateUrl: './book-buy.component.html',
  styleUrl: './book-buy.component.css'
})
export class BookBuyComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  bbokService: BooksServiceService = inject(BooksServiceService);
  book: Book | undefined;

  constructor() {
    const bookId = Number(this.route.snapshot.params['id']);
    this.book = this.bbokService.getBookById(bookId);
  }

}
