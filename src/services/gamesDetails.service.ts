import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDetails } from './models/gamesDetails';

@Injectable()
export class GameDetailsService {
  constructor(private httpClient: HttpClient) {}

  getGameDetails(): Observable<GameDetails> {
    let url = 'https://free-nba.p.rapidapi.com/stats';
    let headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        '02f7d8ed7bmsh8cf3e3f97b95370p14b580jsn18d8e33a4865'
      )
      .set('X-RapidAPI-Host', 'free-nba.p.rapidapi.com');
    return this.httpClient.get<GameDetails>(url, { headers });
  }
}
