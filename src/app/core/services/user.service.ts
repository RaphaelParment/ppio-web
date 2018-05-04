import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User, Player } from '../models/user';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Crypto } from '../../utils/crypto';
import { mapMatches } from '../../utils/mapper';
import { mapUsers } from '../../utils/mapper';

@Injectable()
export class UserService {

  baseURL = environment.url + 'players';

  constructor(
    private http: Http
  ) { }

  search(params?: any) {
    return this.http.get(this.baseURL).pipe(
      map(res => {
        return {
          items : mapUsers(res.json().items),
          count : res.json().count
        };
      })
    );
  }

  getUserMatch(id: String): Observable<any> {
    return this.http.get(this.baseURL + '/' + id  + '/games').pipe(
      map(x => {
        return {
          items : mapMatches(x.json().items),
          count : x.json().count
        };
      })
    );
  }

  getCurrentUser(): Player {
    const crypto = new Crypto();
    const userCrypter = localStorage.getItem('currentUser');
    if (userCrypter !== null) {
      const userDecrypter = crypto.decrypt(userCrypter);
      return JSON.parse(userDecrypter);
    } else {
      return null;
    }
  }
}
