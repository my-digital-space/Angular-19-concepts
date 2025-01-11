import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { BooksComponent } from './main/books/books.component';
import { BookBuyComponent } from './main/book-buy/book-buy.component';

export const routes: Routes = [
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
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
