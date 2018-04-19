import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {MatTableModule,MatInputModule,MatPaginatorModule,MatProgressSpinnerModule,MatSortModule } from '@angular/material';
import {usersModule} from './users/users.module';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { UsersListComponent } from './users/usersList/usersList.component';
import 'rxjs/add/operator/map';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routs';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    UsersListComponent,
    LoginComponent,
    HomeComponent,
    UserRegisterComponent,
    DialogComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    routing,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    FormsModule,
    usersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
