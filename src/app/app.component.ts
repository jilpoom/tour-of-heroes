import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroesComponent} from "./components/heroes/heroes.component";
import {MessagesComponent} from "./components/messages/messages.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroesComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
}
