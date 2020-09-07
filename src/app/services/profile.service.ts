
import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = ''
  private clientsecret ='d33fb88510a2d371676f8766878560766a16b60e'
  constructor(private http:HttpClient) {
    console.log("service is now ready!");
    this.username = 'kiirudavid';
  }
  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" +    this.clientid +
        "&client_secret=" +
        this.clientsecret
    )
    .pipe(map(res => res));;
  }
  getProfileRepos(){
    	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" +    this.clientid +
        "&client_secret=" +
        this.clientsecret
    )
    .pipe(map(res => res));

  }
  updateProfile(username:string){
  	this.username = username;
  }
}