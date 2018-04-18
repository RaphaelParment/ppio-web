import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Match } from '../models/match';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';

@Injectable()
export class MatchService {

  constructor(
    private http: Http
  ) { }

  // searchMatch(searchParam: any): Observable<Match> {
  //   return this.http.get('mon-url').pipe(
  //     map(res => this.mapMatch(res))
  //   );
  // }

  // private mapMatch(res: any): Match {
  //   return new Match('1', [], 'haha', '1', null, null);
  // }
}

