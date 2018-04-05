import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [UserComponent],
    imports:[CommonModule],
    providers: [ UserService ]
})

export class usersModule {

}