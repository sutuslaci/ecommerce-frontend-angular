import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PATH } from '../../shared/constants/path.constant';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  readonly PATH = PATH;
}
