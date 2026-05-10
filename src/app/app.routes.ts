import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'AtAv Events | Home'
  },
  {
    path: 'events',
    loadComponent: () => import('./features/events/events.component').then((m) => m.EventsComponent),
    title: 'AtAv Events | Event Details'
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register.component').then((m) => m.RegisterComponent),
    title: 'AtAv Events | Register'
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then((m) => m.LoginComponent),
    title: 'AtAv Events | Login'
  },
  { path: '**', redirectTo: '' }
];
