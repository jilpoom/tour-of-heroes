import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../heroes/hero";
import {Location, NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero | undefined;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) {
  }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10)
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
