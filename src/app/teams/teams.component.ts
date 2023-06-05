import { Component, OnInit } from '@angular/core';
import { Team } from 'src/services/models/teamsModels';
import { TeamService } from 'src/services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    return this.teamService
      .getTeam()
      .subscribe((response) => (this.teams = response.data));
  }
}
