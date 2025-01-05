import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { BooksComponent } from './main/books/books.component';
import { BookBuyComponent } from './main/book-buy/book-buy.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'books',
        component: BooksComponent,
        title: 'Books'
    },
    {
        path: 'book/:id',
        component: BookBuyComponent,
        title: 'Book'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
