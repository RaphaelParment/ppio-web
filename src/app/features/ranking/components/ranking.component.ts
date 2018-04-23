import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  users: User[];

  constructor() { }

  ngOnInit() {
    this.users = [new User('1', 'Marco', 1)
    , new User('2', 'Pablo', 2)
    , new User('3', 'Tommy', 3)
    , new User('4', 'Infinger', 4)
    , new User('5', 'Guchi', 5)
    , new User('6', 'Dolbano', 6)
    , new User('7', 'Addidos', 7)
    , new User('9', 'Noke', 8)
    , new User('8', 'Poum', 9)
  ];
  }

}
