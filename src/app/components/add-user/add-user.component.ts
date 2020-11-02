import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user = {
    name: '',
    job: ''
  };
  submitted = false;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      name: this.user.name,
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
      name: '',
      job: ''
    };
  }
}
