import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [UserService]
})
export class WelcomeComponent implements OnInit {
  users: FirebaseListObservable<any[]>;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
    console.log(this.users);
  }

}
