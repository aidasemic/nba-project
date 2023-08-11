import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { TeamsComponent } from './teams/teams.component';
import { MatchDetailsComponent } from './match-details/match-details.component';

const routes: Routes = [
  {
    path: 'games',
    component: GamesComponent,
  },
  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'games/:id',
    component: MatchDetailsComponent,
  },
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
