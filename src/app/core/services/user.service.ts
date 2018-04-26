import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/user';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  baseURL = "http://localhost:4200/ppio/players"

  constructor(
    private http: Http
  ) { }

  search(params: any) {
    return this.http.get(this.baseURL).pipe(
      map(res => this.mapUsers(res.json()))
    )
  }

  post(user: User): Observable<any>{
    return this.http.post(this.baseURL, JSON.stringify(user));
  }

  private mapUsers(json: any) : User[]{
    return json.map(u => new User(u.id, u.firstName, u.lastName, u.points))
  }

}
