import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LoginService {


  constructor(
    private http: Http
  ) { }

  login(email: string, pwd: string): Observable<Boolean> {
    localStorage.setItem('currentUser', '{\'name\':\'Charlie\', \'lastname\': \'Quetstroey\'}');
    return of(true);
  }

  disconnect(): Observable<Boolean> {
    localStorage.removeItem('currentUser');
    return of(true);
  }

}
