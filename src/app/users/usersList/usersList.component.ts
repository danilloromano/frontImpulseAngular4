import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { UserRegisterComponent } from '../user-register/user-register.component'
import { UserService } from '../user.service';
import { UserComponent } from '../user/user.component';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.css']
})

export class UsersListComponent {
  users:Object[] = [];
  displayedColumns = ['name', 'lastName', 'email', 'delete', 'edit'];
  dataSource = new MatTableDataSource(this.users);
  service: UserService;

  constructor(service: UserService, user: UserComponent) { 
    
    this.service = service;

    service.getUsers()
      .subscribe (
        users => this.users = users,
        erro => console.log(erro));
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }


  fuckRemove(user) {
    this.service.remove(user)
      .subscribe ( 
      () => { 
        console.log('User removed');
        let newUsers = this.users.splice(0);
        let Index = newUsers.indexOf(user);
        newUsers.splice(Index, 1);
        this.users = newUsers;
      },
        erro => console.log(erro)
      );
  }

}
