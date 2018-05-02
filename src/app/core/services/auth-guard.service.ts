import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {


  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (localStorage.getItem('currentUser')) {
          // logged in so return true
          return true;
      }
      // not logged in so redirect to login page with the return url
      console.log('no current user');
      this.router.navigate(['login']);
      return false;
  }

}
