import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: any;


  constructor(
    router: Router,
    public userService: UserService
    //
  ) { }

  ngOnInit() {
    this.getAllUsers();
    console.log(this.users);

  }

  getAllUsers(): any {
    return new Promise((resolve, reject) => {
      this.userService.getUsers().subscribe(data => {
        resolve(data);
        this.users = data;
        this.users.pop();
        //console.log(this.users);
      });
    });
  }
  deleteUser = i => this.userService.deleteUser(this.users[i]);

}
