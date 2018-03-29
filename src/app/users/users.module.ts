import { NgModule } from '@angular/core';
import { UsersListComponent } from './usersList/usersList.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';


@NgModule({
    declarations: [ UsersListComponent],
    imports:[ UsersListComponent],
    providers: [ UserService ]
})

export class usersModule {

}