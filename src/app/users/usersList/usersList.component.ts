import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { UserRegisterComponent } from '../user-register/user-register.component'
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.css']
})

export class UsersListComponent implements OnInit {
  users:Object[] = [];
  displayedColumns = ['name', 'lastName', 'email'];
  dataSource = this.users;

  constructor(service: UserService) { 

    service.getUsers()
    .subscribe (
      users => this.users = users,
      erro => console.log(erro)
    );
  }

  ngOnInit() {
    
  }
  

}
