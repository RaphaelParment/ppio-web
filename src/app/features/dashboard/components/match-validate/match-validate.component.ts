import { Component, OnInit, ViewChild } from '@angular/core';
import { Match, Set, ValidationStateEnum } from '../../../../core/models/match';
import { Player } from '../../../../core/models/user';
import { MatchService } from '../../../../core/services/match.service';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-match-validate',
  templateUrl: './match-validate.component.html',
  styleUrls: ['./match-validate.component.css']
})
export class MatchValidateComponent implements OnInit {

  matches: Match[] = [];
  change = null;
  ValidationStateEnum = ValidationStateEnum;
  me: Player;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.me = this.userService.getCurrentUser();
    this.userService.getUserMatch(this.me.id).subscribe(matches => this.matches = matches);
  }


  validate(m: Match) {
    m.validationState = ValidationStateEnum.VALIDATED;
    // this.matchService.update(m).subscribe({

    // });
  }

  confirmChange() {
    // call the api
    this.change = null;
  }

}


