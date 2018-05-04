import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Player } from '../models/user';
import { map } from 'rxjs/operators/map';
import { Crypto } from '../../utils/crypto';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {

  baseURL = environment.url + 'players';

  constructor(
    private http: Http
  ) { }

  login(player: Player): Observable<Player> {
    const crypto = new Crypto();
    return this.http.post(this.baseURL, JSON.stringify(player)).pipe(
      map(x => {
        if (x) {
          const currentUser = JSON.stringify(x.json());
          localStorage.setItem('currentUser', crypto.crypt(currentUser));
          return x.json();
        }
        return null;
      })
    );
  }

  disconnect(): Observable<Boolean> {
    localStorage.removeItem('currentUser');
    return of(true);
  }

}
