import { Component, OnInit } from '@angular/core';
import { User, Player } from '../../../core/models/user';
import { UserService } from '../../../core/services/user.service';
import { Match , Set} from '../../../core/models/match';
import { environment } from '../../../../environments/environment';
import { MatchService } from '../../../core/services/match.service';


@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  nbSets = environment.sets;

  users: User[] = [];
  me: Player = null;
  opponent: Player = null;
  sets: Set[] = [];

  constructor(
    private userService: UserService,
    private matchService: MatchService
  ) { }

  ngOnInit() {
    this.userService.search('blalba').subscribe(users => this.users = users.sort((a, b) => a.lastname.localeCompare(b.lastname)));

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
    const match = new Match(this.sets, false, 342514650865631233, this.opponent.id);
    console.log(match);
    this.matchService.post(match).subscribe();
  }



}
