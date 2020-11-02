import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User;
  submitted = false;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  saveUser() {
    const data = {
      name: this.user.first_name + ' ' + this.user.last_name,
      job: this.user.job
    };

    this.usersService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      );
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      first_name: '',
      last_name: '',
      email: '',
      job: ''
    };
  }
}
