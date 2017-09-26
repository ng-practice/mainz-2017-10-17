import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full'},
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
