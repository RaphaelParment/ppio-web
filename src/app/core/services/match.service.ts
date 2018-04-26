import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Match, Set } from '../models/match';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Player } from '../models/user';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MatchService {

  baseURL = "http://localhost:4200/ppio/games"

  constructor(
    private http: Http
  ) { }

  searchMatch(searchParam: any): Observable<Match[]> {
    return this.http.get(this.baseURL).pipe(
      map(res => this.mapMatches(res.json()))
    );
  }

  post(match: Match): Observable<any> {
    return this.http.post(this.baseURL, JSON.stringify(match)).pipe(
      map(res => res.json())
    )
  }

  private mapMatches(res: any[]): Match[] {
    return res.map(m => this.mapMatch(m))
  }

  private mapMatch(res: any): Match {
    return new Match(res.id,
      this.mapSets(res.sets),
      res.validated, 
      res.player1Id, 
      res.player2Id,
    );
  }

  private mapSets(json : any[]): Set[]{
    return json.map(s => this.mapSet(s))
  }

  private mapSet(json: any) : Set{
    return new Set(json.id, json.score1, json.score2);
  }
}

