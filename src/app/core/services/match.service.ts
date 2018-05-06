import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Match, Set } from '../models/match';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Player } from '../models/user';
import { of } from 'rxjs/observable/of';
import { environment } from '../../../environments/environment';
import { mapMatches } from '../../utils/mapper';

@Injectable()
export class MatchService {

  baseURL = environment.url + 'games';

  constructor(
    private http: Http
  ) { }

  searchMatch(queryParams?: String, searchParam?: any): Observable<any> {
    const url = queryParams ? this.baseURL + '?' + queryParams : this.baseURL;
    return this.http.get(url).pipe(
      map(res => {
        return {
          items : mapMatches(res.json().items),
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
    return this.http.put(this.baseURL + '/' + match.id, JSON.stringify(match)).pipe(
      map(res => res.json())
    );
  }

}

