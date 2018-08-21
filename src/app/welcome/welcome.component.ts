import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [UserService]
})
export class WelcomeComponent implements OnInit {
  users: FirebaseListObservable<any[]>;

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  newUser(name: string, characteristicOne: string, characteristicTwo: string, points: number) {
    let newUser = new User(name, characteristicOne, characteristicTwo, points);
    this.userService.updateDatabase(newUser);
  }
  editUser(currentUser){
    this.router.navigate([currentUser.$key, 'edit'])
  }
}
