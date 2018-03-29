import { Component, OnInit, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';
import { UserComponent } from './user/user.component';

@Injectable()
export class UserService {

    getUserUrl:string;
    postUrl:string;
    headers: Headers;
    http:Http;


    constructor(http:Http){
        this.getUserUrl = 'http://localhost:8080/userData';
        this.postUrl = 'http://localhost:8080/users/newUser';
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    getUsers():Observable<UserComponent[]> {
        return this.http
        .get(this.getUserUrl)
        .map(res => res.json())
    }

    regist(user:UserComponent):Observable<Response> {
        return this.http
        .post(this.postUrl, JSON.stringify(user), 
                { headers: this.headers }); 
    }

    
  
}