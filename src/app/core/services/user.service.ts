import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User, Player } from '../models/user';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Crypto } from '../../utils/crypto';

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
          items : this.mapUsers(res.json().items),
          count : res.json().count
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

  private mapUsers(json: any): User[] {
    return json.map(u => new User(u.id, u.firstName, u.lastName, u.email, u.points));
  }

}
