import { Component, OnInit, ViewChild } from '@angular/core';
import { Match, Set } from '../../../../core/models/match';
import { Player } from '../../../../core/models/user';

@Component({
  selector: 'app-match-validate',
  templateUrl: './match-validate.component.html',
  styleUrls: ['./match-validate.component.css']
})
export class MatchValidateComponent implements OnInit {

  matches: Match[] = [];
  change = null;

  ngOnInit(): void {
      
  }


  validate(m: Match) {
    m.isValidated = true;
  }

  confirmChange() {
    // call the api
    this.change = null;
  }

}


