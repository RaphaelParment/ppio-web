import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Match, Set } from '../models/match';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Player } from '../models/user';
import { of } from 'rxjs/observable/of';
import { environment } from '../../../environments/environment';

@Injectable()
export class MatchService {

  baseURL = environment.url + 'games';

  constructor(
    private http: Http
  ) { }

  searchMatch(searchParam?: any): Observable<any> {
    return this.http.get(this.baseURL).pipe(
      map(res => {
        return {
          items : this.mapMatches(res.json().items),
          count : res.json().count
        };
      })
    );
  }

  post(match: Match): Observable < any > {
    return this.http.post(this.baseURL, JSON.stringify(match)).pipe(
      map(res => res.json())
    );
  }

  put(match: Match): Observable<any> {
    return this.http.put(this.baseURL, JSON.stringify(match)).pipe(
      map(res => res.json())
    );
  }

  private mapMatches(res: any[]): Match[] {
    return res.map(m => this.mapMatch(m));
  }

  private mapMatch(res: any): Match {
    const match = new Match(
      this.mapSets(res.sets),
      res.validationState,
      res.player1Id,
      res.player2Id,
    );
    match.id = res.id;
    return match;
  }

  private mapSets(json: any[]): Set[] {
    return json.map(s => this.mapSet(s));
  }

  private mapSet(json: any): Set {
    return new Set(json.id, json.score1, json.score2);
  }
}

