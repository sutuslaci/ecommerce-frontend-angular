import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./main/pages/login-page/login-page.component').then(mod => mod.LoginPageComponent) }
];
