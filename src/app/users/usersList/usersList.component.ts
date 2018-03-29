import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http'
import { HeaderComponent } from '../../header/header.component';
import { UserRegisterComponent } from '../user-register/user-register.component'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.css']
})

export class UsersListComponent implements OnInit {
  users:Object[] = [];
  displayedColumns = ['name', 'lastName', 'email'];
  dataSource = this.users;
  http:Http;

  constructor(http:Http) { 
    this.http = http
  }

  getUsers() {
    this.http
    .get('http://localhost:8080/userData')
    .map(res => res.json())
    .subscribe(users => {
      this.users = users;
      console.log(users);
    }, error => console.log(error))
  }

  ngOnInit() {
    this.getUsers()
  }

}
