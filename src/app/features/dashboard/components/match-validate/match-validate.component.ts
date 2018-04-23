import { Component, OnInit, ViewChild } from '@angular/core';
import { Match, Set } from '../../../../core/models/match';
import { Player } from '../../../../core/models/user';

@Component({
  selector: 'app-match-validate',
  templateUrl: './match-validate.component.html',
  styleUrls: ['./match-validate.component.css']
})
export class MatchValidateComponent implements OnInit {

  matches: Match[];
  change = null;

  ngOnInit(): void {
      const set1 = new Set('1', 11, 2);
      const match = new Match('1', [set1, set1], true, new Player('1', 'Polo', 1), new Player('2', 'Marco', 2));
      const match1 = new Match('1', [set1, set1], true, new Player('1', 'Polo', 1), new Player('2', 'Marco', 2));
      const match2 = new Match('1', [set1, set1], true, new Player('1', 'Polo', 1), new Player('2', 'Marco', 2));
      const match3 = new Match('1', [set1, set1], true, new Player('1', 'Polo', 1), new Player('2', 'Marco', 2));
      const match4 = new Match('1', [set1, set1], true, new Player('1', 'Polo', 1), new Player('2', 'Marco', 2));
      const match5 = new Match('1', [set1, set1], true, new Player('1', 'Polo', 1), new Player('2', 'Marco', 2));
      this.matches = [match, match1, match2, match3, match4, match5];
  }


  validate(m: Match) {
    m.isValidated = true;
  }

  confirmChange() {
    // call the api
    this.change = null;
  }

}


