import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { Player } from '../../../../core/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: Player = null;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }

}
