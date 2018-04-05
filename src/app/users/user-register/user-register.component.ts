import { Component, OnInit, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { UserService } from '../user.service';
import { UsersListComponent } from '../usersList/usersList.component'

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})

export class UserRegisterComponent {

  user: UserComponent = new UserComponent;
  service: UserService;
  userList: UsersListComponent

  constructor(service:UserService,userList: UsersListComponent) {
    this.service = service;
    this.userList = userList;
  }

  register(event) {
    event.preventDefault();
    console.log(this.user);

    this.service.regist(this.user)
      .subscribe(() => {
        this.user = new UserComponent();
        this.service.getUsers()
        .subscribe(users=> this.userList.users = users)
        console.log('User salvo');
      }, erro =>  console.log(erro));
  }

}
