import { Component, OnInit } from '@angular/core';
import { Match, Set } from '../../../core/models/match';
import { Player } from '../../../core/models/user';
import { MatchService } from '../../../core/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: Match[];

  constructor(private matchService : MatchService) { }

  ngOnInit() {
   this.matchService.searchMatch("validated=true&limit=20&offset=0").subscribe(matches => this.matches = matches.items)
  }

  changeQuery(page: number) {
    // this.matchService.searchMatch("validated=true&limit=20&offset="+(page-1)).subscribe(matches => this.matches = matches.items)
  }
}
