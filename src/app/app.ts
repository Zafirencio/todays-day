import { Component, inject} from '@angular/core';
import { PreferitsService } from './services/preferits.service';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  preferitsService = inject(PreferitsService);

  public authService = inject(AuthService);
  public router = inject(Router);

  onLogout()
  {
    this.authService.logout();
    this.router.navigate(['/calendari']);
  }
}
