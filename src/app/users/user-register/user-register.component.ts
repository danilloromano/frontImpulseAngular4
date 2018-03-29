import { Component, OnInit, Input } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import {UserComponent} from '../user/user.component';
import {UsersListComponent} from '../usersList/usersList.component'


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})

export class UserRegisterComponent {

  url:string;
  user:UserComponent = new UserComponent;
  http:Http;
  userList:UsersListComponent;

  constructor(http:Http, userList:UsersListComponent){
    this.url = 'http://localhost:8080/users/newUser';
    this.http = http;
    this.userList = userList;
  }

  register(event) {
    event.preventDefault();
    console.log(this.user);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(this.url, JSON.stringify(this.user), { headers: headers })
      .subscribe(() => {
        this.user = new UserComponent();
        this.userList.getUsers();
        console.log('User salvo');
      }, erro =>  console.log(erro));
    }



}
