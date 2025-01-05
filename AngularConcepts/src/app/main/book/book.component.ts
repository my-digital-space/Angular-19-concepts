import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
}

@Component({
  selector: 'app-book',
  imports: [RouterModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() book!: Book;
  
}
