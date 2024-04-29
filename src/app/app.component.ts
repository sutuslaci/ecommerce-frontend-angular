import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from './main/components/navigation/navigation.component';
import { SpinnerComponent } from './main/components/spinner/spinner.component';
import { AuthService } from './main/shared/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    SpinnerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.initAuthenticationState();
  }
}
