import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamResponse } from './models/teamsModels';

@Injectable()
export class TeamService {
  constructor(private httpClient: HttpClient) {}

  getTeam(): Observable<TeamResponse> {
    let url = 'https://free-nba.p.rapidapi.com/teams';
    let headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        '02f7d8ed7bmsh8cf3e3f97b95370p14b580jsn18d8e33a4865'
      )
      .set('X-RapidAPI-Host', 'free-nba.p.rapidapi.com');
    return this.httpClient.get<TeamResponse>(url, { headers });
  }
}
