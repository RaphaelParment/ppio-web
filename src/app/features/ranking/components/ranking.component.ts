import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
   this.userService.search().subscribe(users => this.users = users.items.sort((a, b) => b.points - a.points));
  }

}
