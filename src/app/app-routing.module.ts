import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookList } from './book/book-list/book-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full'},
  { path: 'books', component: BookList }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
