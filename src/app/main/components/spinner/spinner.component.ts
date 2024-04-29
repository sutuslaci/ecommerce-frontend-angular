import { tap } from 'rxjs';

import { Component, Input, OnInit, Signal } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

import { LoadingService } from '../../shared/services/loading.service';

@Component({
  selector: 'spinner',
  standalone: true,
  imports: [],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent implements OnInit {
  @Input()
  detectRouteTransitions = false;

  isLoading: Signal<boolean>;

  constructor(
    private loadingService: LoadingService,
    private router: Router
  ) {
    this.isLoading = this.loadingService.isLoading;
  }

  ngOnInit(): void {
    if (this.detectRouteTransitions) {
      this.router.events.pipe(
        tap((event) => {
          if (event instanceof RouteConfigLoadStart) {
            this.loadingService.start();
          } else if (event instanceof RouteConfigLoadEnd) {
            this.loadingService.stop();
          }
        })
      ).subscribe();
    }
  }
}
