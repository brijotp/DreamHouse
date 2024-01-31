import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }
authUser(user: any){
  let userArray: User[] = [];
  const storedUsersString  = localStorage.getItem('Users');
  if (storedUsersString){
    userArray = JSON.parse(storedUsersString);
  }
  return userArray.find(p => p.userName === user.username && p.password === user.password);
}

}
