import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: User[];
  currentUser: User;
  currentIndex = -1;
  name = '';

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getAll()
    .subscribe(
      data => {
        this.users = data.data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.getUsers();
    this.currentUser = null;
    this.currentIndex = -1;
  }

  setActiveUser(user, index): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  searchName(): void {

  }
}
