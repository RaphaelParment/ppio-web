import { Component, OnInit } from '@angular/core';
import { Match, Set } from '../../../core/models/match';
import { Player } from '../../../core/models/user';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: Match[];

  constructor() { }

  ngOnInit() {
    const set1 = new Set('1', 11, 2);
    const match = new Match('1', [set1, set1], true, new Player('1', 'Polo', 1), new Player('2', 'Marco', 2));
    const match1 = new Match('1', [set1, set1], true, new Player('1', 'Polo', 1), new Player('2', 'Marco', 2));
    const match2 = new Match('1', [set1, set1], true, new Player('1', 'Polo', 1), new Player('2', 'Marco', 2));
    const match3 = new Match('1', [set1, set1], true, new Player('1', 'Polo', 1), new Player('2', 'Marco', 2));
    const match4 = new Match('1', [set1, set1], true, new Player('1', 'Polo', 1), new Player('2', 'Marco', 2));
    const match5 = new Match('1', [set1, set1], true, new Player('1', 'Polo', 1), new Player('2', 'Marco', 2));
    this.matches = [match, match1, match2, match3, match4, match5];
  }

}
