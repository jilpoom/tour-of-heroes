import {Routes} from '@angular/router';
import {HeroesComponent} from "./components/heroes/heroes.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HeroDetailComponent} from "./components/hero-detail/hero-detail.component";

export const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'dashboard', component: DashboardComponent},
];
