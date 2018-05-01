import { Component, OnInit } from '@angular/core';
import { User, Player } from '../../../core/models/user';
import { UserService } from '../../../core/services/user.service';
import { Match , Set} from '../../../core/models/match';
import { environment } from '../../../../environments/environment';
import { MatchService } from '../../../core/services/match.service';
import { Router } from '@angular/router';
import { ValidatorMatch } from '../../../utils/validator-match';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  nbSets = environment.sets;
  errorMessage = '';
  users: User[] = [];
  me: Player = null;
  opponent: Player = null;
  sets: Set[] = [];

  constructor(
    private userService: UserService,
    private matchService: MatchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.me = this.userService.getCurrentUser();
    if (!this.me) {
      this.router.navigate(['login']);
    }
    this.userService.search().subscribe(users => {
      this.users = users.items.sort((a, b) => a.lastName.localeCompare(b.lastName)).filter(u => u.id !== this.me.id);
    });
  }

  addSet() {
    if (this.sets.length < this.nbSets) {
      this.sets.push(new Set());
    }
  }

  removeSet() {
    if (this.sets.length > 0) {
      this.sets.pop();
    }
  }

  addMatch() {
    const validator = new ValidatorMatch();
    const match = new Match(this.sets, false, this.me.id, this.opponent.id);
    console.log(match);
    if (validator.isValid(match)) {
      this.errorMessage = '';
    // this.matchService.post(match).subscribe();
    } else {
      this.errorMessage = 'The match is not valid !';
    }

  }
}
