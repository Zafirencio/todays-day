import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navegacio',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `<nav style="display: flex; gap: 15px; padding: 10px; background: #eee;">
    <a routerLink="/calendari" routerLinkActive="active-link">El meu Calendari</a>
    <a routerLink="/cerca" routerLinkActive="active-link">Cercar Esdeveniment</a>
    <a routerLink="/preferits" routerLinkActive="active-link">Esdeveniments Guardats</a>
    <a routerLink="/login" routerLinkActive="active-link">Login</a>
    </nav>`,
  styles: [`.active-link { font-weight: bold; color: blue; text-decoration: underline; }`],
})
export class Navegacio { }
