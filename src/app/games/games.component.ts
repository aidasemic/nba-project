import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/games.service';
import { Match } from 'src/services/models/gamesModels';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  matches: Match[] = [];

  constructor(private gamesService: GameService) {}

  ngOnInit() {
    this.gamesService.getMatches().subscribe((response) => {
      this.matches = response.data;
    });
  }
}
