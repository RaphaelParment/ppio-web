import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItem } from '../models/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  mobileQuery: MediaQueryList;
  fillerNav = new Array(
    new MenuItem('Dashboard', '/ppio/dashboard'),
    new MenuItem('Matches', '/ppio/matches'),
    new MenuItem('Ranking', '/ppio/ranking'));

  constructor() {
  }
}
