import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService{

  users:  User[];

  constructor(private http: HttpClient) {
    this.http.get('../../assets/files/users.json')
        .subscribe(
          (response: any[]) => {
            this.users = response;
          }, error => {
            console.log('Error: ', error.message);
          }
    );}
}
