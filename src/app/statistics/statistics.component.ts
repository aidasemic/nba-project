import { Component } from '@angular/core';
import { GameDetailsService } from 'src/services/gamesDetails.service';
import {
  GameDetails,
  GamesDetailsResponse,
} from 'src/services/models/gamesDetails';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
  details: GamesDetailsResponse[] = [];
  constructor(private stats: GameDetailsService) {}

  ngOnInit() {
    return this.stats
      .getGameDetails()
      .subscribe((response) => (this.details = response.data));
  }
  
}
