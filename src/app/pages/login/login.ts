import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  email: string = '';
  contrasenya: string = '';
  errorVisible: boolean = false;

  onLogin()
  {
    const exit = this.authService.login(this.email, this.contrasenya);

    if (exit)
    {
      this.errorVisible = false;
      this.router.navigate(['/calendari']);
    } else {
      this.errorVisible = true;
    }
  }
}
