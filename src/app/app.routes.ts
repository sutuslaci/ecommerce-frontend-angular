import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./main/pages/home-page/home-page.component').then(mod => mod.HomePageComponent) },
    { path: 'login', loadComponent: () => import('./main/pages/login-page/login-page.component').then(mod => mod.LoginPageComponent) },
    { path: 'products', loadComponent: () => import('./main/pages/product-page/product-page.component').then(mod => mod.ProductPageComponent) },
    { path: '**', loadComponent: () => import('./main/pages/not-found-page/not-found-page.component').then(mod => mod.NotFoundPageComponent) }
];
