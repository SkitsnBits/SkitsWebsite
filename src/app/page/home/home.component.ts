import { Component } from '@angular/core';
import { WebsiteService } from '../../service/website.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public website: WebsiteService) {}

}
