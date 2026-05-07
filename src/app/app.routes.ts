import { Routes } from '@angular/router';
import { Calendari } from './pages/calendari/calendari'
import { Cerca } from './pages/cerca/cerca';
import { Detall } from './pages/detall/detall';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path: '', redirectTo: 'calendari', pathMatch: 'full'},
    {path: 'calendari', component: Calendari },
    {path: 'cerca', component: Cerca },
    {path: 'detall/:id', component: Detall },
    {path: 'preferits', loadComponent: () => import('./pages/preferits/preferits').then(m => m.Preferits),
         canActivate: [authGuard] },
    {path: 'login', component: Login },
    {path: '**', redirectTo: 'calendari'}
];
