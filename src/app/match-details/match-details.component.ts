import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/services/games.service';
// import { GameDetailsService } from 'src/services/gamesDetails.service';
import {
  // GameDetails,
  GamesDetailsResponse,
} from 'src/services/models/gamesDetails';
import { Match } from 'src/services/models/gamesModels';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css'],
})
export class MatchDetailsComponent implements OnInit {
  match?: Match;
  detail?: GamesDetailsResponse;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GameService,
    // private gamesDetailsService: GameDetailsService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const gameId = Number(routeParams.get('id'));
    this.gamesService.getMatchById(gameId).subscribe((response) => {
      this.match = response;
    });

  }
}
