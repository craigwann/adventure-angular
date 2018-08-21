import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [UserService]
})
export class EditUserComponent implements OnInit {
  userId: string = null;
  user;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private userService: UserService) { }
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userId = urlParameters['id'];
    });
    this.user = this.userService.getUserById(this.userId)
  }

  saveUser(name: string, characteristicOne: string, characteristicTwo: string, points: number) {
    let userInFirebase = this.userService.getUserById(this.userId);
    userInFirebase.update({
      name: name,
      characteristicOne: characteristicOne,
      characteristicTwo: characteristicTwo,
      points: points
    });
    this.router.navigate(['']);
  }

  deleteUser() {
    let userInFirebase = this.userService.getUserById(this.userId);
    userInFirebase.remove();
    this.router.navigate(['']);
  }

}
