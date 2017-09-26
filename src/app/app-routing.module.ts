import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookList, BookDetail } from './book';


const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full'},
  { path: 'books', component: BookList },
  { path: 'books/:isbn', component: BookDetail },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
