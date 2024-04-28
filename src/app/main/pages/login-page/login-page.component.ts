import { Component, effect } from '@angular/core';
import { Router } from '@angular/router';

import { LoginComponent } from '../../components/login/login.component';
import { PATH } from '../../shared/constants/path.constant';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    effect(() => {
      if (this.authService.isAuthenticated()) {
        this.router.navigateByUrl(PATH.HOME);
      }
    });
  }
}
