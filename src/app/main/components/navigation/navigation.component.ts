import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { PATH } from '../../shared/constants/path.constant';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  isAuthenticated = this.authService.isAuthenticated;

  readonly PATH = PATH;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl(PATH.LOGIN);
  }
}
