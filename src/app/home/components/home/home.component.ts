import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItem } from '../../models/menu';
import { LoginService } from '../../../core/services/login.service';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { Player } from '../../../core/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: Player;
  addNuke = false;
  fillerNav = new Array(
    new MenuItem('Dashboard', '/kpio/dashboard'),
    new MenuItem('Matches', '/kpio/matches'),
    new MenuItem('Ranking', '/kpio/ranking'));

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private route: Router,
  ) {
  }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
  }

  disconnect() {
    this.loginService.disconnect().subscribe(x => this.route.navigate(['/login']));
  }

}
