import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

constructor() { }

addUser(user: User) {
  let users: User[] = [];

  const storedUsersString  = localStorage.getItem('Users');
  if (storedUsersString) { 
    const storedUsers = JSON.parse(storedUsersString) as User;   
    if (Array.isArray(storedUsers)) {
      users = storedUsers;
    }
  }

  users = [user, ...users];
  localStorage.setItem('Users', JSON.stringify(users));
}
/* 1) localStorage: This is a web storage object in JavaScript that allows you to store key-value pairs locally in a user's web browser.
The data stored using localStorage persists even when the user closes their browser or navigates away from the page.
2) setItem('Users', JSON.stringify(users)): This line of code sets a key-value pair in the localStorage.
The key is a string, in this case, 'Users', and the value is the stringified JSON representation of the users object. */


// addUser(user: any){
//   let users = [];
//   if(localStorage.getItem('Users')){
//     users = JSON.parse(localStorage.getItem('Users')!) || [];
//     users = [user, ...users];
//   }
//   else{
//     users = [user];
//   }
//   localStorage.setItem('Users', JSON.stringify(users));
// }

}
