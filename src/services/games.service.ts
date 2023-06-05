import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GamesResponse } from './models/gamesModels';

@Injectable()
export class GameService {
  constructor(private httpClient: HttpClient) {}

  getMatches(): Observable<GamesResponse> {
    let url = 'https://free-nba.p.rapidapi.com/games';
    let headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        '02f7d8ed7bmsh8cf3e3f97b95370p14b580jsn18d8e33a4865'
      )
      .set('X-RapidAPI-Host', 'free-nba.p.rapidapi.com');
    return this.httpClient.get<GamesResponse>(url, { headers });
  }
}
