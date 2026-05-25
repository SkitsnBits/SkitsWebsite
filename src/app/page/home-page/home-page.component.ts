import { Component, inject, OnInit } from '@angular/core';
import { EventsComponent } from './events/events.component';
import { HeaderComponent } from "./header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [EventsComponent, HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  router = inject(Router)

  navigate(path: string) {
    this.router.navigate([path])
  }

}
