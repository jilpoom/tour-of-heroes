import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Hero} from "../components/heroes/hero";
import {HEROES} from "../components/heroes/mock-heroes";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes
  }
}
