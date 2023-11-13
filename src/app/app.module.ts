import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { TeamsComponent } from './teams/teams.component';
import { GameService } from 'src/services/games.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { TeamService } from 'src/services/teams.service';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { GameDetailsService } from 'src/services/gamesDetails.service';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    TeamsComponent,
    HeaderComponent,
    MatchDetailsComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GameService, TeamService, GameDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
