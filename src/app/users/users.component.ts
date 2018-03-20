import { Component, OnInit, Inject } from '@angular/core';
import {Http} from '@angular/http'
import { HeaderComponent } from '../header/header.component';
import { inject } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users:Object[] = [];

  constructor(http:Http) { 
    http
        .get('http://localhost:8080/userData')
        .map(res => res.json())
        .subscribe(users => {
          this.users = users;
          console.log(this.users);
        }, error => console.log(error))
  }

  ngOnInit() {
  }



}
