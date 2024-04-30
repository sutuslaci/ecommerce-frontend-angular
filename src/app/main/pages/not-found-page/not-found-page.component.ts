import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PATH } from '../../shared/constants/path.constant';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss'
})
export class NotFoundPageComponent {
  readonly PATH = PATH;
}
