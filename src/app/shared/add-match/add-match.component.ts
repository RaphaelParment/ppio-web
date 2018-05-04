import { Component, OnInit, Input } from '@angular/core';
import { User, Player } from '../../core/models/user';
import { UserService } from '../../core/services/user.service';
import { Match , Set} from '../../core/models/match';
import { environment } from '../../../environments/environment';
import { MatchService } from '../../core/services/match.service';
import { Router } from '@angular/router';
import { matchIsValid } from '../../utils/validator';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  @Input()
  edit: Boolean = false

  @Input()
  match: Match = new Match()

  nbSets = environment.sets;
  errorMessage = '';
  users: User[] = [];
  me: Player = null;

  constructor(
    private userService: UserService,
    private matchService: MatchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.me = this.userService.getCurrentUser();
    this.userService.search().subscribe(users => {
      this.users = users.items.sort((a, b) => a.lastName.localeCompare(b.lastName)).filter(u => u.id !== this.me.id);
    });
  }

  addSet() {
    if (this.match.sets.length < this.nbSets) {
      this.match.sets.push(new Set());
    }
  }

  removeSet() {
    if (this.match.sets.length > 0) {
      this.match.sets.pop();
    }
  }

  addMatch() {
    console.log(this.match);
    if (matchIsValid(this.match)) {
      this.errorMessage = '';
      this.matchService.post(this.match).subscribe();
    } else {
      this.errorMessage = 'The match is not valid !';
    }

  }

  editMatch() {
    this.match.editedById = this.me.id
    this.matchService.put(this.match).subscribe(x => {
      console.log(x)
      this.match = null
    })
  }
}
