import { Component } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
})
export class FriendsComponent {
  users!: any[];
  constructor(private readonly data: UsersService) {
    this.users = this.data['users'];
  }
}
