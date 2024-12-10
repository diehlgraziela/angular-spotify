import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {
    this.verifyTokenUrlCallback();
  }

  verifyTokenUrlCallback() {
    const token = this.authService.extractTokenFromUrl();

    if (token) {
      this.authService.setToken(token);
      this.router.navigate(['/player/home']);
    }
  }

  login() {
    window.location.href = this.authService.getLoginUrl();
  }
}
