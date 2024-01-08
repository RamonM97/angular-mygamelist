import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './guards/isAuthenticated.guard'
//import { isNotAuthenticatedGuard } from './guards/isNotAuthenticated.guard';

export const routes: Routes = [

    {
        path: 'auth',
        title: 'auth',
        loadComponent: () => import('./auth/auth.component'),
        children: [
            {
                path: '', // Ruta vacía dentro de 'auth' para redirigir a 'layout'
                redirectTo: 'mylist',
                pathMatch: 'full',
            },
            //{
            //    path: 'layout',
            //    title: 'Layout',
            //    canActivate: [isNotAuthenticatedGuard],
            //    loadComponent: () => import('./auth/pages/layout-page/layout-page.component'),
            //},
            {
                path: 'login',
                title: 'Login',
                loadComponent: () => import('./auth/pages/login-page/login-page.component'),
            },
            {
                path: 'register',
                title: 'Register',
                loadComponent: () => import('./auth/pages/register-page/register-page.component'),
            },
            {
                path: 'mylist',
                canActivate: [isAuthenticatedGuard],
                title: 'My List',
                loadComponent: () => import('./auth/pages/mylist-page/mylist-page.component'),
            },
            {
                path: 'mygamelist',
                canActivate: [isAuthenticatedGuard],
                title: 'My Game List',
                loadComponent: () => import('./auth/pages/my-game-list-page/my-game-list.component'),
            },
        ] 
    },
    {
        path: '',
        redirectTo: '/auth/mylist',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/auth/mylist',
        pathMatch: 'full'
    }

];
